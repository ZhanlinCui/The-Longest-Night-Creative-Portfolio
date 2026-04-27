import type { ReactNode } from 'react'
import { cn } from '../lib/cn'
import { isVideoPath } from '../config/media'

type MediaFrameProps = {
  src: string
  alt: string
  aspectClass?: string
  className?: string
  overlay?: ReactNode
  bottomLeft?: ReactNode
  topRight?: ReactNode
}

export function MediaFrame({
  src,
  alt,
  aspectClass = 'aspect-video',
  className,
  overlay,
  bottomLeft,
  topRight,
}: MediaFrameProps) {
  const video = isVideoPath(src)

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-sm bg-surface-container-low ghost-border',
        aspectClass,
        className,
      )}
    >
      {video ? (
        <video
          className="h-full w-full object-cover opacity-90 mix-blend-screen"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          aria-label={alt}
        />
      ) : (
        <img
          className="h-full w-full object-cover opacity-80 mix-blend-screen"
          src={src}
          alt={alt}
        />
      )}
      {overlay}
      {topRight ? (
        <div className="pointer-events-none absolute right-4 top-4 z-10 text-right">{topRight}</div>
      ) : null}
      {bottomLeft ? (
        <div className="pointer-events-none absolute bottom-4 left-4 z-10">{bottomLeft}</div>
      ) : null}
    </div>
  )
}
