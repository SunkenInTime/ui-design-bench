// Design Three: Colorful Creative - Vibrant, playful, artistic
import Link from "next/link";

export default function DesignThree() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="fixed top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="fixed -bottom-8 left-1/2 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md rounded-full px-4 py-2">
          <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-orange-400 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
            IdeaFlow
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden sm:block px-5 py-2.5 bg-white/60 backdrop-blur-md rounded-full text-sm font-medium text-stone-700 hover:bg-white/80 transition-colors"
          >
            Explore
          </Link>
          <Link
            href="#"
            className="px-5 py-2.5 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-rose-500/25 transition-all"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-400"></span>
            <span className="text-sm font-medium text-stone-600">Free for creative minds</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Think freely.
            </span>
            <br />
            <span className="text-stone-800">Create wildly.</span>
          </h1>

          <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Unleash your creativity with a note-taking app designed for dreamers, artists, and innovators. 
            Your ideas deserve a beautiful home.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="#"
              className="group relative px-8 py-4 bg-stone-900 text-white rounded-2xl font-semibold text-lg hover:bg-stone-800 transition-colors"
            >
              Start Creating Free
              <span className="absolute -right-1 -top-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
              </span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl font-medium text-stone-700 hover:bg-white transition-colors"
            >
              <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              See it in action
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="group bg-white/70 backdrop-blur-md rounded-3xl p-6 text-left shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">Visual Notes</h3>
              <p className="text-sm text-stone-600">Embed images, sketches, and mind maps directly in your notes.</p>
            </div>

            <div className="group bg-white/70 backdrop-blur-md rounded-3xl p-6 text-left shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">Spark Ideas</h3>
              <p className="text-sm text-stone-600">AI-powered suggestions help you connect dots you never saw before.</p>
            </div>

            <div className="group bg-white/70 backdrop-blur-md rounded-3xl p-6 text-left shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">Time Travel</h3>
              <p className="text-sm text-stone-600">See how your thoughts evolved with beautiful timeline views.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Testimonial */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 text-center shadow-sm">
            <p className="text-lg text-stone-700 italic mb-6">
              "IdeaFlow transformed how I journal my creative process. It feels like the app was made just for artists like me."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-300 to-orange-300 rounded-full flex items-center justify-center text-white font-bold">
                S
              </div>
              <div className="text-left">
                <div className="font-semibold text-stone-800">Sarah Chen</div>
                <div className="text-sm text-stone-500">Illustrator & Designer</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

