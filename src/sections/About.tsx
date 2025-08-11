import { motion } from 'framer-motion'
import { useScrollFloat } from '../hooks/useScrollFloat'
import { FiDownload, FiCode, FiGlobe, FiDatabase, FiSettings } from 'react-icons/fi'

const features = [
  { title: 'Clean Code', desc: 'Writing maintainable and scalable code', icon: FiCode },
  { title: 'Web Applications', desc: 'Full-stack web development expertise', icon: FiGlobe },
  { title: 'Backend Systems', desc: 'Robust API development and database design', icon: FiDatabase },
  { title: 'DevOps', desc: 'CI/CD pipelines, containerization, monitoring', icon: FiSettings },
]

export function About() {
  const { ref, y } = useScrollFloat(12)
  return (
    <section id="about" className="relative w-full px-6 md:px-10 py-24">
      <motion.div ref={ref as any} style={{ y }} className="grid w-full items-start gap-10 md:grid-cols-2 will-change-transform">
        {/* Left: Copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-semibold tracking-widest text-orange-400"
          >
            — ABOUT
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg leading-8 text-zinc-300"
          >
            Full‑stack developer specializing in MERN, real‑time systems with Socket.IO,
            and Gen‑AI. I focus on clean architecture, performance, and
            UI/UX that feels effortless.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-base italic text-blue-400"
          >
            Clean code, measurable impact, and delightful user experience.
          </motion.p>
          <div className="mt-8">
            <a
              href="https://github.com/avinashsingh5/certificates/blob/main/12215935_AvinashKumar.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-white/5"
            >
              <FiDownload className="h-4 w-4 text-blue-400" />
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/avinash-kumarsingh/"
              target="_blank"
              className="ml-3 inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-white/5"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Right: Feature grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((f, idx) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Icon className="h-5 w-5 text-indigo-300" />
                  <p className="text-base font-semibold text-white">{f.title}</p>
                </div>
                <p className="text-sm leading-6 text-zinc-400">{f.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}


