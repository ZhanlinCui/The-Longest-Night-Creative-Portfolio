import { Link } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'
import { scenes } from '../data/scenes'
import { SiteFooter } from '../components/SiteFooter'
import { SiteNav } from '../components/SiteNav'
import { cn } from '../lib/cn'

const nodeLayout: Record<
  number,
  { className: string; align: 'left' | 'right' }
> = {
  1: {
    className:
      'top-1/2 left-1/2 -translate-x-[250px] -translate-y-[150px]',
    align: 'left',
  },
  2: {
    className:
      'top-1/2 left-1/2 translate-x-[150px] -translate-y-[250px]',
    align: 'right',
  },
  3: {
    className: 'top-1/2 left-1/2 translate-x-[350px] translate-y-[50px]',
    align: 'right',
  },
  4: {
    className: 'top-1/2 left-1/2 translate-x-[100px] translate-y-[350px]',
    align: 'left',
  },
  5: {
    className:
      'top-1/2 left-1/2 -translate-x-[300px] translate-y-[200px]',
    align: 'right',
  },
}

export function ArchiveHub() {
  const { completed, completedCount, isSceneUnlocked, allComplete } = useProgress()

  return (
    <div className="flex min-h-screen flex-col bg-surface font-body text-on-surface">
      <SiteNav archiveLink="archive" />
      <main className="relative flex flex-grow flex-col pt-20 md:flex-row">
        <aside className="z-10 flex w-full flex-col justify-between border-b border-outline-variant/15 bg-surface-container-lowest/80 p-8 backdrop-blur-sm md:w-1/3 md:border-b-0 md:border-r lg:w-1/4 md:p-12">
          <div>
            <div className="mb-8 flex items-center gap-2 opacity-60">
              <Link
                to="/"
                className="flex items-center text-on-surface hover:text-primary-fixed"
                aria-label="Back to landing"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
              </Link>
              <span className="font-label text-sm uppercase tracking-wider">Archive Hub</span>
            </div>
            <p className="font-label mb-2 text-xs uppercase tracking-wider text-outline">
              Archive
            </p>
            <h1 className="font-headline mb-6 text-3xl leading-[1.1] tracking-[-0.02em] text-primary-fixed md:text-4xl lg:text-5xl">
              Every stage of survival became a different kind of problem.
            </h1>
            <p className="mb-12 font-body text-base leading-relaxed text-on-surface-variant opacity-80">
              Select a scene node to follow the visual sequence of engines, shelters, gravity,
              evidence, and deep time.
            </p>
          </div>
          <div className="space-y-4 border-t border-outline-variant/20 pt-8">
            <div className="flex items-center justify-between">
              <span className="font-label text-xs uppercase tracking-wider text-outline">
                Archive Status
              </span>
              <span className="rounded-sm border border-primary-container/20 bg-primary-container/10 px-2 py-1 font-label text-xs text-primary-container">
                {allComplete ? 'COMPLETE' : 'PARTIAL RECOVERY'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-label text-xs uppercase tracking-wider text-outline">
                Progress
              </span>
              <span className="font-mono text-sm text-on-surface">
                {completedCount}/5 COMPLETED
              </span>
            </div>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-none bg-surface-container-high">
              <div
                className="h-full bg-primary-container transition-all"
                style={{ width: `${Math.max(5, (completedCount / 5) * 100)}%` }}
              />
            </div>
            {allComplete ? (
              <Link
                to="/reflection"
                className="mt-4 inline-block font-headline text-sm text-primary-fixed underline-offset-4 hover:underline"
              >
                Open final reflection →
              </Link>
            ) : null}
          </div>
        </aside>
        <section className="radial-bg relative flex min-h-[600px] w-full items-center justify-center overflow-hidden bg-surface md:w-2/3 lg:w-3/4">
          <img
            src="/media/Scene5/5.2.png"
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full scale-105 object-cover object-center opacity-20 mix-blend-screen"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(12,14,18,0.25)_0%,rgba(12,14,18,0.65)_48%,rgba(12,14,18,0.9)_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface/35 via-transparent to-surface/20" />
          <div className="orbit-line h-[300px] w-[300px]" />
          <div className="orbit-line h-[500px] w-[500px]" />
          <div className="orbit-line h-[700px] w-[700px]" />
          <div className="orbit-line h-[900px] w-[900px] opacity-50" />
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <div className="glow-line mb-2 h-4 w-4 rotate-45 rounded-sm bg-primary-fixed" />
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary-fixed">
              Scene Index
            </span>
          </div>
          {scenes.map((s) => {
            const layout = nodeLayout[s.id]
            const unlocked = isSceneUnlocked(s.id)
            const done = completed.has(s.id)
            const rowReverse = layout.align === 'right'

            const inner = (
              <>
                <div
                  className={cn(
                    'relative flex items-center justify-center overflow-hidden rounded-sm border backdrop-blur-md transition-all duration-300',
                    unlocked
                      ? 'h-12 w-12 border-primary-container bg-primary-container/10 hover:bg-primary-container/20'
                      : 'h-10 w-10 border-outline-variant/30 bg-surface-container-high opacity-50',
                  )}
                >
                  {unlocked ? (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-primary-container/5" />
                      <span className="font-mono font-bold text-primary-fixed">{s.roman}</span>
                      <div className="glow-line absolute bottom-0 left-0 h-0.5 w-full bg-primary-container" />
                    </>
                  ) : (
                    <span className="material-symbols-outlined text-sm text-outline">lock</span>
                  )}
                </div>
                <div className={cn('flex flex-col', rowReverse && 'items-end text-right')}>
                  <span className="font-label mb-1 text-xs uppercase tracking-wider text-outline">
                    {unlocked ? (done ? 'COMPLETED' : 'AVAILABLE') : `SCENE ${s.roman}`}
                  </span>
                  <span
                    className={cn(
                      'font-headline text-lg text-on-surface',
                      !unlocked && 'text-base text-on-surface-variant',
                    )}
                  >
                    {s.title}
                  </span>
                </div>
              </>
            )

            return (
              <div
                key={s.id}
                className={cn(
                  'absolute left-1/2 top-1/2 z-20 flex items-center gap-4',
                  layout.className,
                  rowReverse && 'flex-row-reverse',
                  !unlocked && 'opacity-50',
                )}
              >
                {unlocked ? (
                  <Link to={`/scene/${s.id}`} className="group flex items-center gap-4">
                    {inner}
                  </Link>
                ) : (
                  <div className="flex items-center gap-4">{inner}</div>
                )}
              </div>
            )
          })}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 300 400 Q 500 200 700 400"
              fill="none"
              stroke="#a0e9ff"
              strokeDasharray="4 4"
              strokeWidth="1"
            />
          </svg>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
