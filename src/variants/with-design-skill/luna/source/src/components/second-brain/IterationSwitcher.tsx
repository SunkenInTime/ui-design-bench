import Link from "next/link";
import { iterations, type IterationId } from "./types";

type IterationSwitcherProps = {
  active: IterationId;
};

export default function IterationSwitcher({
  active,
}: IterationSwitcherProps) {
  const activeIteration = iterations.find((iteration) => iteration.id === active);

  return (
    <details className="iteration-switcher">
      <summary className="switcher-trigger" aria-label="Switch landing page direction">
        <span className="switcher-spark" aria-hidden="true" />
        <span className="switcher-trigger-copy">
          <span className="switcher-trigger-label">Direction</span>
          <strong>{String(active).padStart(2, "0")}</strong>
        </span>
        <span className="switcher-chevron" aria-hidden="true">
          ↗
        </span>
      </summary>
      <div className="switcher-menu">
        <p className="switcher-menu-heading">Five ways in</p>
        <nav aria-label="Landing page directions">
          {iterations.map((iteration) => (
            <Link
              key={iteration.id}
              href={`/${iteration.id}`}
              className={`switcher-option${
                iteration.id === active ? " is-active" : ""
              }`}
              aria-current={iteration.id === active ? "page" : undefined}
            >
              <span className="switcher-option-number">
                {String(iteration.id).padStart(2, "0")}
              </span>
              <span className="switcher-option-copy">
                <strong>{iteration.name}</strong>
                <span>{iteration.descriptor}</span>
              </span>
              <span className="switcher-option-arrow" aria-hidden="true">
                {iteration.id === active ? "●" : "↗"}
              </span>
            </Link>
          ))}
        </nav>
        <p className="switcher-menu-footnote">
          You are viewing <strong>{activeIteration?.name}</strong>.
        </p>
      </div>
    </details>
  );
}
