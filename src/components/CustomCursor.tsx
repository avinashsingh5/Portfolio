import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

function isInteractiveElement(target: EventTarget | null): boolean {
  if (!target || !(target as HTMLElement).closest) return false
  const el = (target as HTMLElement).closest(
    'a, button, [role="button"], input[type="submit"], .cursor-hover'
  )
  return !!el
}

function isTextInput(target: EventTarget | null): boolean {
  if (!target || !(target as HTMLElement).closest) return false
  return !!(target as HTMLElement).closest('input, textarea, select, [contenteditable="true"]')
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isDown, setIsDown] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Fast-follow dot
  const dotX = useSpring(x, { stiffness: 1000, damping: 60, mass: 0.3 })
  const dotY = useSpring(y, { stiffness: 1000, damping: 60, mass: 0.3 })
  // Smooth ring trail
  const ringX = useSpring(x, { stiffness: 300, damping: 25, mass: 0.6 })
  const ringY = useSpring(y, { stiffness: 300, damping: 25, mass: 0.6 })

  useEffect(() => {
    if (typeof window === "undefined") return
    const fine = window.matchMedia && window.matchMedia("(pointer: fine)").matches
    const wide = window.matchMedia && window.matchMedia("(min-width: 768px)").matches
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const enable = fine && wide && !reduced
    setEnabled(enable)
    if (!enable) return

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const overText = isTextInput(e.target)
      setVisible(!overText)
      setIsActive(isInteractiveElement(e.target))
    }
    const handleDown = () => setIsDown(true)
    const handleUp = () => setIsDown(false)
    const handleEnter = () => setVisible(true)
    const handleLeave = () => setVisible(false)

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mousedown", handleDown)
    window.addEventListener("mouseup", handleUp)
    window.addEventListener("mouseenter", handleEnter)
    window.addEventListener("mouseleave", handleLeave)
    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("mousedown", handleDown)
      window.removeEventListener("mouseup", handleUp)
      window.removeEventListener("mouseenter", handleEnter)
      window.removeEventListener("mouseleave", handleLeave)
    }
  }, [x, y])

  if (!enabled) return null

  const baseOpacity = visible ? 0.5 : 0
  const ringScale = isActive ? 1.2 : isDown ? 0.95 : 1
  const dotScale = isDown ? 0.85 : isActive ? 0.95 : 1

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      {/* Ring */}
      <motion.div
        style={{ translateX: ringX, translateY: ringY }}
        animate={{ opacity: baseOpacity, scale: ringScale }}
        transition={{ type: "spring", stiffness: 220, damping: 28 }}
        className="absolute -ml-3 -mt-3 h-6 w-6 rounded-full"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.12), 0 0 14px hsl(var(--accent)/0.25)",
            background: "radial-gradient(closest-side, hsl(var(--accent)/0.08), transparent 70%)",
          }}
        />
      </motion.div>

      {/* Dot */}
      <motion.div
        style={{ translateX: dotX, translateY: dotY, background: "hsl(var(--accent))" }}
        animate={{ opacity: baseOpacity, scale: dotScale }}
        transition={{ type: "spring", stiffness: 700, damping: 40 }}
        className="absolute -ml-[4px] -mt-[4px] h-2 w-2 rounded-full"
      />
    </div>
  )
}


