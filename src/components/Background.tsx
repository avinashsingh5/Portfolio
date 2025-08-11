import { motion } from 'framer-motion'

/**
 * Animated background tailored to the site's dark theme and accent color.
 * - Soft radial gradients for depth
 * - Subtle animated glow following the accent color
 * - Low-contrast grid overlay for texture
 */
export function Background() {
  return (
    <>
      {/* Static layered gradients */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_0%_100%,rgba(56,189,248,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_100%_100%,rgba(16,185,129,0.08),transparent_60%)]" />

        {/* Grid texture (very subtle) */}
        <div className="absolute inset-0 opacity-[0.12] [background:repeating-linear-gradient(0deg,rgba(255,255,255,.06)_0px,rgba(255,255,255,.06)_1px,transparent_1px,transparent_16px),repeating-linear-gradient(90deg,rgba(255,255,255,.06)_0px,rgba(255,255,255,.06)_1px,transparent_1px,transparent_16px)]" />
      </div>

      {/* Animated accent glow */}
      <motion.div aria-hidden className="fixed inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute left-1/2 top-[20%] h-64 w-64 -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, hsl(var(--accent)/0.33), transparent)' }}
          animate={{ x: [0, 36, -24, 0], y: [0, -24, 12, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
    </>
  )
}


