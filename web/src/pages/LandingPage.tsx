import { Link } from 'react-router-dom'
import { isVideoPath, mediaUrl } from '../config/media'
import { SiteFooter } from '../components/SiteFooter'
import { SiteNav } from '../components/SiteNav'

export function LandingPage() {
  const hero = mediaUrl('landingHero')
  const isVideo = isVideoPath(hero)

  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface">
      <SiteNav archiveLink="hidden" />
      <main className="relative mt-20 flex flex-grow flex-col justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0">
          {isVideo ? (
            <video
              src={hero}
              className="h-full w-full object-cover opacity-35 mix-blend-screen"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
            />
          ) : (
            <img
              src={hero}
              alt=""
              className="h-full w-full object-cover opacity-30 mix-blend-screen"
            />
          )}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-surface/80 via-surface/40 to-surface" />
        </div>
        <section className="relative z-20 container mx-auto flex min-h-[716px] flex-col items-center justify-center px-6 text-center md:px-12 lg:px-24">
          <h1 className="font-headline mb-6 text-5xl font-bold leading-none tracking-tight text-primary-fixed md:text-7xl lg:text-8xl">
            The Longest Night
          </h1>
          <div className="mx-auto mb-12 max-w-2xl space-y-4">
            <p className="font-body text-xl font-light text-on-surface-variant md:text-2xl">
              A speculative interactive portfolio inspired by Liu Cixin’s{' '}
              <span className="italic text-inverse-surface">The Wandering Earth</span>
            </p>
            <p className="font-body text-lg text-secondary/80">
              Five scenes trace the scientific, political, and human cost of moving a world.
            </p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <Link
              to="/archive"
              className="group relative overflow-hidden rounded-sm bg-primary-container px-8 py-4 font-headline text-lg font-semibold tracking-wide text-on-primary-container shadow-[0_0_15px_rgba(160,233,255,0.15)] transition-all duration-300 hover:bg-primary-fixed-dim hover:shadow-[0_0_25px_rgba(160,233,255,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Enter the Archive
                <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </span>
              <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[100%]" />
            </Link>
            <span className="font-label text-xs uppercase tracking-wider text-outline">
              Created by Zhanlin Cui, UNSW
            </span>
          </div>
        </section>
        <div className="relative z-20 container mx-auto mb-24 mt-12 max-w-4xl px-12 opacity-60">
          <div className="relative flex h-px w-full items-center bg-outline-variant/30">
            <div className="absolute left-1/3 h-4 w-0.5 bg-primary-fixed shadow-[0_0_8px_#a0e9ff]" />
            <div className="absolute right-0 h-px w-1/4 bg-gradient-to-r from-outline-variant/50 to-transparent" />
          </div>
          <div className="mt-2 flex justify-between font-label text-[10px] uppercase tracking-widest text-outline">
            <span>Initiation</span>
            <span>Deceleration</span>
            <span>Escape Velocity</span>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
