export function SiteFooter() {
  return (
    <footer className="relative z-20 mt-auto flex w-full flex-col items-center justify-between gap-6 border-t border-outline-variant/15 bg-surface px-12 py-12 md:flex-row">
      <div className="font-headline text-sm text-on-surface opacity-80">
        © THE LONGEST NIGHT // CREATED BY ZHANLIN CUI, UNSW
      </div>
      <nav className="flex flex-wrap justify-center gap-6 font-label text-[10px] uppercase tracking-[0.2em] text-outline">
        <a className="opacity-80 transition-colors hover:text-primary" href="#">
          Speculative Archive
        </a>
        <a className="opacity-80 transition-colors hover:text-primary" href="#">
          Visual Narrative
        </a>
        <a className="opacity-80 transition-colors hover:text-primary" href="#">
          GENS4015
        </a>
      </nav>
    </footer>
  )
}
