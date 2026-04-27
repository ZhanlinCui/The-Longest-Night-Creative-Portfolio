import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'

const GITHUB_URL = 'https://github.com/ZhanlinCui/The-Longest-Night-Creative-Portfolio'

type SiteNavProps = {
  archiveLink?: 'archive' | 'scene' | 'hidden'
  className?: string
}

export function SiteNav({ archiveLink = 'archive', className }: SiteNavProps) {
  return (
    <nav
      className={cn(
        'fixed top-0 z-50 flex h-20 w-full items-center justify-between border-0 bg-surface/90 px-8 shadow-[0_8px_32px_-8px_rgba(160,233,255,0.05)] backdrop-blur-md',
        className,
      )}
    >
      <Link
        to="/"
        className="font-headline text-lg font-bold tracking-[-0.02em] text-primary transition-transform active:scale-95"
      >
        THE LONGEST NIGHT
      </Link>
      <div className="hidden items-center gap-8 md:flex">
        {archiveLink === 'archive' ? (
          <Link
            to="/archive"
            className="font-headline border-b border-primary-container pb-1 text-sm tracking-tight text-primary-container transition-colors hover:bg-primary/5"
          >
            Return to Archive
          </Link>
        ) : archiveLink === 'scene' ? (
          <Link
            to="/archive"
            className="rounded-sm px-3 py-2 font-headline text-sm tracking-tight text-on-surface/60 transition-colors hover:bg-primary/5 hover:text-on-surface"
          >
            Return to Archive
          </Link>
        ) : null}
      </div>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-sm border border-outline-variant/30 px-3 py-2 font-headline text-sm tracking-tight text-on-surface/70 transition-colors hover:border-primary-container/50 hover:bg-primary/5 hover:text-primary-fixed"
        aria-label="Open GitHub repository"
      >
        <span>GitHub</span>
        <span className="material-symbols-outlined text-base" aria-hidden>
          open_in_new
        </span>
      </a>
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-b from-primary-container/10 to-transparent" />
    </nav>
  )
}
