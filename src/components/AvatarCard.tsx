import React from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type AvatarCardProps = {
  src: string
  alt: string
  className?: string
}

export function AvatarCard({ src, alt, className = '' }: AvatarCardProps) {
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const smoothRotateX = useSpring(rotateX, { stiffness: 180, damping: 20, mass: 0.6 })
  const smoothRotateY = useSpring(rotateY, { stiffness: 180, damping: 20, mass: 0.6 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - left) / width
    const py = (e.clientY - top) / height
    const maxRotate = 10
    rotateX.set((py - 0.5) * -2 * maxRotate)
    rotateY.set((px - 0.5) * 2 * maxRotate)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: 'preserve-3d' }}
      className={[
        'relative mx-auto h-48 w-48 md:h-64 md:w-64 rounded-2xl border border-white/10 overflow-hidden',
        'shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] bg-black/20',
        className,
      ].join(' ')}
    >
      {/* Accent glow behind */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[24px] blur-3xl"
        style={{ background: 'radial-gradient(closest-side, hsl(var(--accent)/0.35), transparent 70%)' }}
      />

      {/* Image */}
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" style={{ transform: 'translateZ(30px)' }} />

      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />

      {/* Soft animated rim-light shimmer */}
      <motion.div
        className="pointer-events-none absolute -inset-2 rounded-[18px]"
        initial={false}
        animate={{ boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 0 36px hsl(var(--accent)/0.35)', '0 0 0 rgba(0,0,0,0)'] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transform: 'translateZ(40px)' }}
      />
    </motion.div>
  )
}

export default AvatarCard


