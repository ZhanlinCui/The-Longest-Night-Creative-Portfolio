import { Link } from 'react-router-dom'

type SceneBottomNavProps = {
  sceneId: number
}

export function SceneBottomNav({ sceneId }: SceneBottomNavProps) {
  const prev = sceneId > 1 ? sceneId - 1 : null
  const next = sceneId < 5 ? sceneId + 1 : null

  return (
    <div className="relative z-10 mt-12 flex w-full items-center justify-between border-t border-outline-variant/15 bg-surface px-6 py-6 md:px-12">
      {prev ? (
        <Link
          to={`/scene/${prev}`}
          className="font-headline flex items-center gap-2 text-sm uppercase tracking-wider text-on-surface-variant transition-colors hover:text-primary-fixed"
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Previous Scene
        </Link>
      ) : (
        <span className="font-headline text-sm uppercase tracking-wider text-outline/50">
          Previous Scene
        </span>
      )}
      {next ? (
        <Link
          to={`/scene/${next}`}
          className="font-headline flex items-center gap-2 text-sm uppercase tracking-wider text-primary-fixed transition-colors hover:text-primary"
        >
          Next Scene
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </Link>
      ) : (
        <Link
          to="/reflection"
          className="font-headline flex items-center gap-2 text-sm uppercase tracking-wider text-primary-fixed transition-colors hover:text-primary"
        >
          Final Reflection
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </Link>
      )}
    </div>
  )
}
