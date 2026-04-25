export default function Three() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 px-6 py-24 flex flex-col items-center">
      <div className="max-w-5xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Capture. Connect. Create.</h1>
          <p className="text-lg text-zinc-500 max-w-xl mx-auto">Everything you need to turn scattered notes into structured knowledge.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
          <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-white border border-zinc-200 p-8 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-2xl font-semibold">All your notes, connected.</h3>
              <p className="text-zinc-500 mt-2">Bi-directional linking helps you build a web of ideas that mirrors how your brain works.</p>
            </div>
            <div className="h-24 rounded-2xl bg-zinc-100 border border-zinc-100" />
          </div>
          <div className="md:col-span-2 rounded-3xl bg-zinc-900 text-white p-8 flex items-center justify-between shadow-sm">
            <div>
              <h3 className="text-xl font-semibold">Instant search</h3>
              <p className="text-zinc-400 text-sm mt-1">Find anything in milliseconds.</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
          </div>
          <div className="rounded-3xl bg-white border border-zinc-200 p-6 flex flex-col justify-between shadow-sm">
            <h3 className="font-semibold">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {['idea', 'work', 'life'].map(t => <span key={t} className="px-3 py-1 rounded-full bg-zinc-100 text-xs font-medium text-zinc-600">#{t}</span>)}
            </div>
          </div>
          <div className="rounded-3xl bg-white border border-zinc-200 p-6 flex flex-col justify-between shadow-sm">
            <h3 className="font-semibold">Daily notes</h3>
            <p className="text-3xl font-bold text-zinc-900">04/20</p>
          </div>
          <div className="md:col-span-4 rounded-3xl bg-white border border-zinc-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="text-xl font-semibold">Ready to upgrade your mind?</h3>
              <p className="text-zinc-500 text-sm mt-1">Join 10,000+ thinkers today.</p>
            </div>
            <button className="h-11 px-6 rounded-full bg-zinc-950 text-white font-medium text-sm hover:bg-zinc-800 transition cursor-pointer">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
