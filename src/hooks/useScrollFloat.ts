import { useRef } from 'react'
import { useScroll, useTransform, MotionValue, useReducedMotion } from 'framer-motion'

type ScrollFloat = {
  ref: React.RefObject<HTMLElement | null>
  y: MotionValue<number>
}

export function useScrollFloat(amplitude: number = 24): ScrollFloat {
  const ref = useRef<HTMLElement | null>(null)
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [amplitude, -amplitude])
  return { ref, y }
}


