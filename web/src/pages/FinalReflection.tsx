import { Link, Navigate, useNavigate } from 'react-router-dom'
import { mediaUrl } from '../config/media'
import { SiteFooter } from '../components/SiteFooter'
import { SiteNav } from '../components/SiteNav'
import { useProgress } from '../context/ProgressContext'

export function FinalReflection() {
  const { allComplete, resetProgress } = useProgress()
  const navigate = useNavigate()
  const bg = mediaUrl('reflectionBg')

  if (!allComplete) {
    return <Navigate to="/archive" replace />
  }

  return (
    <div className="flex min-h-screen flex-col bg-surface font-body text-on-surface antialiased">
      <SiteNav archiveLink="archive" />
      <main className="relative flex flex-grow flex-col pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={bg}
            alt=""
            className="h-full w-full object-cover object-top opacity-60 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent" />
        </div>
        <div className="relative z-10 flex flex-grow items-end px-8 pb-24 md:px-16 lg:px-24">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-primary-container/50" />
              <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary">
                Archive Entry Resolved
              </span>
            </div>
            <h1 className="font-headline mb-6 text-5xl font-bold leading-tight tracking-[-0.02em] text-primary drop-shadow-md md:text-7xl">
              The Longest Night
            </h1>
            <h2 className="font-headline mb-8 text-2xl font-light text-secondary md:text-3xl">
              Survival was never only escape. It was design.
            </h2>
            <div className="relative mb-12 overflow-hidden rounded-sm border border-outline-variant/15 bg-surface-variant/20 p-8 shadow-2xl backdrop-blur-md">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary-container to-transparent opacity-50" />
              <p className="font-body text-lg font-light leading-relaxed text-on-surface-variant">
                In <em>The Wandering Earth</em>, survival becomes a chain of decisions about force,
                ecology, evidence, and time.
              </p>
            </div>
            <div className="flex flex-col items-start gap-6 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  resetProgress()
                  navigate('/archive')
                }}
                className="group relative flex items-center gap-3 overflow-hidden rounded-sm bg-primary-container px-8 py-4 text-on-primary-container transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 font-label text-sm font-medium uppercase tracking-[0.15em]">
                  Replay the Archive
                </span>
                <span className="material-symbols-outlined relative z-10 text-sm" aria-hidden>
                  replay
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
              <Link
                to="/archive"
                className="rounded-sm border border-outline-variant/30 px-8 py-4 font-label text-sm uppercase tracking-[0.15em] text-on-surface transition-all hover:border-outline-variant hover:bg-surface-variant/30"
              >
                Return to Scenes
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
