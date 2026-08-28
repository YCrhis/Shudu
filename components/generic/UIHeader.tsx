const UIHeader = () => {
  return (
     <header className="sticky top-0 z-30 border-b border-zinc-800/80 bg-[#09090B]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-black">
              <span className="text-lg font-black">V</span>
            </div>

            <div>
              <p className="text-sm font-bold tracking-wide">VEHICLE WORKS</p>

              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Maintenance System
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">

            {/* User */}
            <div className="hidden items-center gap-3 border-l border-zinc-800 pl-4 sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/10 text-sm font-bold text-amber-500">
                JP
              </div>

              <div>
                <p className="text-sm font-medium">Juan Pérez</p>

                <p className="text-xs text-zinc-600">Administrator</p>
              </div>
            </div>

            <button className="rounded-lg border border-zinc-800 px-3 py-2 text-sm text-zinc-500 transition hover:border-zinc-700 hover:text-zinc-200">
              Logout
            </button>
          </div>
        </div>
      </header>
  )
}

export default UIHeader