"use client";

import { useEffect, useRef, useState } from "react";
import type { HeroVariantProps } from "./types";

const VS = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = vec2((a_pos.x + 1.0) * 0.5, 1.0 - (a_pos.y + 1.0) * 0.5);
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FS = `
precision highp float;
varying vec2 v_uv;
uniform sampler2D u_tex;
uniform float u_time;
uniform vec2 u_cursor;
uniform vec2 u_resolution;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 3; i++) {
    v += a * vnoise(p);
    p *= 2.02;
    a *= 0.55;
  }
  return v;
}

void main() {
  vec2 uv = v_uv;
  vec2 px = uv * u_resolution;

  float dist = distance(px, u_cursor);
  float heat = exp(-(dist * dist) / (220.0 * 220.0));

  float t = u_time * 0.55;
  float n1 = fbm(uv * vec2(7.0, 14.0) + vec2(t, t * 0.6));
  float n2 = fbm(uv * vec2(9.0, 18.0) + vec2(-t * 0.7, t * 0.4));
  vec2 displ = vec2(n1 - 0.5, n2 - 0.5);

  float idle = 0.0035;
  float baseStrength = idle + heat * 0.022;
  vec2 disp = displ * baseStrength;

  float ca = 0.0008 + heat * 0.0065;

  float maskR = texture2D(u_tex, uv + disp + vec2( ca, 0.0)).a;
  float maskG = texture2D(u_tex, uv + disp).a;
  float maskB = texture2D(u_tex, uv + disp - vec2( ca, 0.0)).a;

  vec3 ink = vec3(0.090, 0.090, 0.094);
  vec3 bg  = vec3(0.980, 0.980, 0.980);

  float r = mix(bg.r, ink.r, maskR);
  float g = mix(bg.g, ink.g, maskG);
  float b = mix(bg.b, ink.b, maskB);

  float a = max(maskR, max(maskG, maskB));
  vec3 color = vec3(r, g, b);

  // Premultiplied output so the canvas can sit on the page without painting bg
  gl_FragColor = vec4(color * a, a);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type);
  if (!sh) return null;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(sh));
    gl.deleteShader(sh);
    return null;
  }
  return sh;
}

export function HeatShimmerVariant({ lines }: HeroVariantProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef({ x: -9999, y: -9999 });
  const [webglOk, setWebglOk] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const measure = measureRef.current;
    if (!container || !canvas || !measure) return;

    const gl = canvas.getContext("webgl", {
      premultipliedAlpha: true,
      antialias: true,
      alpha: true,
    });
    if (!gl) {
      setWebglOk(false);
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    const vs = compile(gl, gl.VERTEX_SHADER, VS);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FS);
    if (!vs || !fs) return;
    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const aPos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uTex = gl.getUniformLocation(prog, "u_tex");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uCursor = gl.getUniformLocation(prog, "u_cursor");
    const uResolution = gl.getUniformLocation(prog, "u_resolution");

    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.uniform1i(uTex, 0);
    gl.activeTexture(gl.TEXTURE0);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    let w = 0;
    let h = 0;

    function paintTextTexture() {
      const rect = measure!.getBoundingClientRect();
      const containerRect = container!.getBoundingClientRect();
      w = Math.ceil(rect.width);
      h = Math.ceil(rect.height);
      if (w === 0 || h === 0) return;

      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      canvas!.style.left = `${rect.left - containerRect.left}px`;
      canvas!.style.top = `${rect.top - containerRect.top}px`;

      const off = document.createElement("canvas");
      off.width = w * dpr;
      off.height = h * dpr;
      const octx = off.getContext("2d");
      if (!octx) return;
      octx.scale(dpr, dpr);

      const cs = getComputedStyle(measure!);
      const fontSize = parseFloat(cs.fontSize);
      const family = cs.fontFamily;
      const weight = cs.fontWeight;

      octx.fillStyle = "#000";
      octx.font = `${weight} ${fontSize}px ${family}`;
      octx.textBaseline = "alphabetic";

      const lineEls = Array.from(
        measure!.querySelectorAll<HTMLElement>(".hero-fx__line"),
      );
      const wrapperRect = measure!.getBoundingClientRect();
      lineEls.forEach((lineEl) => {
        const lr = lineEl.getBoundingClientRect();
        const offsetX = lr.left - wrapperRect.left;
        const baseline = lr.top - wrapperRect.top + lr.height * 0.82;
        octx.fillText(lineEl.textContent ?? "", offsetX, baseline);
      });

      gl!.bindTexture(gl!.TEXTURE_2D, tex);
      gl!.pixelStorei(gl!.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
      gl!.texImage2D(
        gl!.TEXTURE_2D,
        0,
        gl!.RGBA,
        gl!.RGBA,
        gl!.UNSIGNED_BYTE,
        off,
      );
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
      gl!.uniform2f(uResolution, canvas!.width, canvas!.height);
    }
    paintTextTexture();

    const ro = new ResizeObserver(paintTextTexture);
    ro.observe(container);
    window.addEventListener("resize", paintTextTexture);

    let raf = 0;
    const t0 = performance.now();
    function tick(now: number) {
      const t = (now - t0) / 1000;
      const measureRect = measure!.getBoundingClientRect();
      const cur = cursorRef.current;
      const lx = (cur.x - measureRect.left) * dpr;
      const ly = (cur.y - measureRect.top) * dpr;

      gl!.clearColor(0, 0, 0, 0);
      gl!.clear(gl!.COLOR_BUFFER_BIT);
      gl!.uniform1f(uTime, reduceMotion ? 0 : t);
      gl!.uniform2f(uCursor, lx, ly);
      gl!.drawArrays(gl!.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    function onMove(e: PointerEvent) {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    }
    window.addEventListener("pointermove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", paintTextTexture);
      window.removeEventListener("pointermove", onMove);
      gl.deleteTexture(tex);
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, [lines]);

  return (
    <div
      ref={containerRef}
      className={`hero-fx hero-fx--shimmer${webglOk ? "" : " hero-fx--shimmer-fallback"}`}
    >
      <span ref={measureRef} className="hero-fx__measure" aria-hidden="true">
        {lines.map((line, li) => (
          <span key={li} className="hero-fx__line">
            {line}
          </span>
        ))}
      </span>
      {webglOk ? (
        <canvas
          ref={canvasRef}
          className="hero-fx__canvas"
          aria-hidden="true"
        />
      ) : null}
    </div>
  );
}
