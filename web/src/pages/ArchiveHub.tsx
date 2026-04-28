import { Link } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'
import { scenes } from '../data/scenes'
import { SiteFooter } from '../components/SiteFooter'
import { SiteNav } from '../components/SiteNav'
import { cn } from '../lib/cn'

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
        <section className="relative flex min-h-[720px] w-full overflow-hidden bg-surface md:w-2/3 lg:w-3/4">
          <img
            src="/media/scence selection.png"
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full scale-105 object-cover object-center opacity-30 mix-blend-screen"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/72 to-surface/50" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/35" />

          <div className="relative z-10 flex w-full flex-col justify-center px-6 py-12 md:px-10 lg:px-16">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-primary-container/60" />
                <span className="font-label text-xs uppercase tracking-[0.22em] text-primary-fixed">
                  Mission Sequence
                </span>
              </div>
              <h2 className="font-headline text-3xl leading-tight text-primary md:text-5xl">
                Follow the archive in order.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-on-surface-variant md:text-base">
                Complete each visual chapter to unlock the next stage of Earth's journey.
                Start with the highlighted scene, then continue downward.
              </p>
            </div>

            <div className="relative max-w-4xl">
              <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-outline-variant/30 md:block" />
              <div className="grid gap-4">
                {scenes.map((s) => {
                  const unlocked = isSceneUnlocked(s.id)
                  const done = completed.has(s.id)
                  const active = unlocked && !done

                  const card = (
                    <div
                      className={cn(
                        'relative flex min-h-24 items-center gap-4 rounded-sm border p-4 text-left backdrop-blur-xl transition-all md:gap-6 md:p-5',
                        done &&
                          'border-primary-container/25 bg-surface-container-low/65 text-on-surface',
                        active &&
                          'border-primary-container/70 bg-primary-container/12 shadow-[0_0_28px_rgba(160,233,255,0.16)]',
                        !unlocked &&
                          'border-outline-variant/20 bg-surface-container-lowest/55 opacity-55',
                      )}
                    >
                      <div
                        className={cn(
                          'relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border font-mono text-base font-bold md:h-14 md:w-14',
                          unlocked
                            ? 'border-primary-container bg-primary-container/12 text-primary-fixed'
                            : 'border-outline-variant/40 bg-surface-container-high text-outline',
                        )}
                      >
                        {unlocked ? s.roman : (
                          <span className="material-symbols-outlined text-base">lock</span>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex flex-wrap items-center gap-3">
                          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-outline">
                            Step {String(s.id).padStart(2, '0')}
                          </span>
                          <span
                            className={cn(
                              'font-label text-[10px] uppercase tracking-[0.18em]',
                              done && 'text-primary-container',
                              active && 'text-primary-fixed',
                              !unlocked && 'text-outline',
                            )}
                          >
                            {done ? 'Completed' : active ? 'Start here' : 'Locked'}
                          </span>
                        </div>
                        <h3 className="font-headline text-xl leading-tight text-on-surface md:text-2xl">
                          {s.title}
                        </h3>
                        <p className="mt-1 text-sm text-on-surface-variant">
                          {s.chapterLabel}
                        </p>
                      </div>
                      <span
                        className={cn(
                          'material-symbols-outlined shrink-0 text-lg',
                          unlocked ? 'text-primary-container' : 'text-outline',
                        )}
                        aria-hidden
                      >
                        {done ? 'check' : active ? 'arrow_forward' : 'lock'}
                      </span>
                    </div>
                  )

                  return unlocked ? (
                    <Link key={s.id} to={`/scene/${s.id}`} className="group block">
                      {card}
                    </Link>
                  ) : (
                    <div key={s.id}>{card}</div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
