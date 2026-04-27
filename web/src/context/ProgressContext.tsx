import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

const STORAGE_KEY = 'longest-night-progress-v1'

function loadCompleted(): Set<number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set()
    const arr = JSON.parse(raw) as number[]
    return new Set(arr.filter((n) => n >= 1 && n <= 5))
  } catch {
    return new Set()
  }
}

function saveCompleted(set: Set<number>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set].sort()))
}

type ProgressValue = {
  completed: Set<number>
  completedCount: number
  markSceneComplete: (sceneId: number) => void
  resetProgress: () => void
  isSceneUnlocked: (sceneId: number) => boolean
  allComplete: boolean
}

const ProgressContext = createContext<ProgressValue | null>(null)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completed, setCompleted] = useState<Set<number>>(() =>
    typeof window === 'undefined' ? new Set() : loadCompleted(),
  )

  const markSceneComplete = useCallback((sceneId: number) => {
    if (sceneId < 1 || sceneId > 5) return
    setCompleted((prev) => {
      const next = new Set(prev)
      next.add(sceneId)
      saveCompleted(next)
      return next
    })
  }, [])

  const resetProgress = useCallback(() => {
    const empty = new Set<number>()
    setCompleted(empty)
    saveCompleted(empty)
  }, [])

  const isSceneUnlocked = useCallback(
    (sceneId: number) => {
      if (sceneId === 1) return true
      return completed.has(sceneId - 1)
    },
    [completed],
  )

  const value = useMemo<ProgressValue>(
    () => ({
      completed,
      completedCount: completed.size,
      markSceneComplete,
      resetProgress,
      isSceneUnlocked,
      allComplete: completed.size >= 5,
    }),
    [completed, markSceneComplete, resetProgress, isSceneUnlocked],
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider')
  return ctx
}
