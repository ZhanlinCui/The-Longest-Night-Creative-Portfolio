import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter'
import { SiteNav } from '../components/SiteNav'
import { useProgress } from '../context/ProgressContext'
import { getSceneById } from '../data/scenes'
import { cn } from '../lib/cn'

export function ScenePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const sceneId = Number(id)
  const scene = getSceneById(sceneId)
  const { isSceneUnlocked, markSceneComplete } = useProgress()
  const [frameIndex, setFrameIndex] = useState(0)

  useEffect(() => {
    setFrameIndex(0)
  }, [sceneId])

  if (!scene || !Number.isFinite(sceneId) || sceneId < 1 || sceneId > 5) {
    return <Navigate to="/archive" replace />
  }

  if (!isSceneUnlocked(sceneId)) {
    return <Navigate to="/archive" replace />
  }

  const frame = scene.frames[frameIndex]
  const frameCount = scene.frames.length
  const isLastFrame = frameIndex === frameCount - 1

  const advance = () => {
    if (!isLastFrame) {
      setFrameIndex((current) => Math.min(current + 1, frameCount - 1))
      return
    }

    markSceneComplete(sceneId)
    navigate('/archive')
  }

  return (
    <div className="flex min-h-screen flex-col bg-background font-body text-on-surface">
      <SiteNav archiveLink="scene" />
      <main className="relative flex flex-grow flex-col overflow-hidden pt-20">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(135deg,rgba(160,233,255,0.08),transparent_38%,rgba(255,217,152,0.05))]" />
        <section className="relative z-10 grid flex-grow grid-cols-1 lg:grid-cols-[minmax(0,1.45fr)_minmax(360px,0.55fr)]">
          <div className="relative min-h-[46vh] overflow-hidden bg-surface-container-low lg:min-h-[calc(100vh-5rem)]">
            <img
              key={frame.image}
              src={frame.image}
              alt={`${scene.title}: ${frame.title}`}
              className="h-full min-h-[46vh] w-full object-cover opacity-90 lg:min-h-[calc(100vh-5rem)]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-background/20 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/75" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3 font-label text-[10px] uppercase tracking-[0.2em] text-primary-fixed/75 md:bottom-8 md:left-8">
              <span className="h-px w-10 bg-primary-container/60" />
              <span>{scene.chapterLabel}</span>
            </div>
          </div>

          <aside className="relative flex min-h-[460px] flex-col justify-between border-t border-outline-variant/15 bg-surface/95 px-6 py-8 backdrop-blur-xl md:px-10 lg:min-h-[calc(100vh-5rem)] lg:border-l lg:border-t-0 lg:px-12 lg:py-12">
            <div>
              <div className="mb-8 flex items-center justify-between gap-4">
                <Link
                  to="/archive"
                  className="font-label text-xs uppercase tracking-[0.18em] text-outline transition-colors hover:text-primary-fixed"
                >
                  Archive
                </Link>
                <span className="font-mono text-xs text-secondary">
                  {String(frameIndex + 1).padStart(2, '0')} / {String(frameCount).padStart(2, '0')}
                </span>
              </div>

              <p className="font-label mb-4 text-xs uppercase tracking-[0.22em] text-secondary">
                Scene {scene.roman} // {frame.stepLabel}
              </p>
              <h1 className="font-headline text-4xl font-semibold leading-tight text-primary md:text-5xl">
                {scene.title}
              </h1>
              <div className="my-8 h-px w-full bg-outline-variant/25" />
              <p className="font-label mb-3 text-xs uppercase tracking-[0.18em] text-outline">
                {frame.title}
              </p>
              <p className="max-w-xl font-body text-xl font-light leading-[1.65] text-on-surface md:text-2xl lg:text-[1.65rem]">
                {frame.englishDescription}
              </p>
              <p className="mt-8 border-l border-primary-container/30 pl-4 text-sm leading-7 text-on-surface-variant">
                {scene.question}
              </p>
            </div>

            <div className="mt-10">
              <div className="mb-6 grid grid-cols-5 gap-2" aria-label="Scene progress">
                {scene.frames.map((item, index) => (
                  <button
                    key={item.image}
                    type="button"
                    onClick={() => setFrameIndex(index)}
                    className={cn(
                      'h-1.5 rounded-none transition-colors',
                      index <= frameIndex ? 'bg-primary-container' : 'bg-outline-variant/35',
                    )}
                    aria-label={`Open ${item.title}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={advance}
                className="group flex w-full items-center justify-between rounded-sm bg-primary-container px-6 py-4 font-headline text-sm uppercase tracking-[0.16em] text-on-primary-container transition-colors hover:bg-primary"
              >
                <span>{isLastFrame ? 'Complete Scene' : 'Continue'}</span>
                <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                  {isLastFrame ? 'check' : 'arrow_forward'}
                </span>
              </button>
            </div>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
