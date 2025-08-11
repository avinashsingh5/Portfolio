import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiExternalLink, FiHeart, FiArrowUp } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const featured = [
  { title: 'Real-Time Chat Application', desc: 'full-stack real-time messaging platform', href: 'https://github.com/avinashsingh5/Connect-App' },
  { title: 'Context-Aware Multi-Document', desc: 'Knowledge Graph-Enhanced Semantic Summarizer', href: 'https://github.com/avinashsingh5/multidoc-multilingual-summarizer' },
  { title: 'Url-Shortner', desc: 'Short URLs and Redirection', href: 'https://github.com/avinashsingh5' },
  { title: 'LV Food Delivery', desc: 'React-Based Food Delivery E‑Commerce Platform', href: 'https://github.com/avinashsingh5/LV-FOOD-DELIVERY' },
]

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const email = 'avinashkumar90202@gmail.com'
  const location = 'Patna, Bihar, India'

  return (
    <footer className="relative z-10 mt-10 border-t border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-3 md:px-10">
        {/* Left: Intro */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.0, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <h3 className="font-poppins text-2xl font-semibold text-white">Avinash Kumar</h3>
          <p className="mt-4 max-w-prose text-zinc-300">
            Full Stack Developer passionate about building fast, scalable, and beautiful digital experiences.
            Open to full‑time roles, freelance gigs, and collaborative projects.
          </p>
          <div className="mt-6 space-y-2 text-sm text-zinc-300">
            <div className="flex items-center gap-2"><FiMail className="h-4 w-4" /> <a className="hover:underline" href={`mailto:${email}`}>{email}</a></div>
            <div className="flex items-center gap-2"><FiMapPin className="h-4 w-4" /> <span>{location}</span></div>
          </div>
          <div className="mt-5 flex gap-3">
            <a href="https://github.com/avinashsingh5" target="_blank" className="rounded-md border border-white/10 p-2 text-zinc-300 transition hover:bg-white/5 hover:text-white" aria-label="GitHub"><FaGithub className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com/in/avinash-kumarsingh/" target="_blank" className="rounded-md border border-white/10 p-2 text-zinc-300 transition hover:bg-white/5 hover:text-white" aria-label="LinkedIn"><FaLinkedin className="h-5 w-5" /></a>
            <a href={`mailto:${email}`} className="rounded-md border border-white/10 p-2 text-zinc-300 transition hover:bg-white/5 hover:text-white" aria-label="Email"><FiMail className="h-5 w-5" /></a>
          </div>
        </motion.div>

        {/* Middle: Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <h4 className="font-poppins text-lg text-white">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-zinc-300">
            {links.map((l, i) => (
              <motion.li key={l.label} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.04 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                <a href={l.href} className="hover:text-white">{l.label}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right: Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <h4 className="font-poppins text-lg text-white">Featured Projects</h4>
          <div className="mt-4 space-y-4">
            {featured.map((p, i) => (
              <motion.a key={p.title} href={p.href} target="_blank" className="block group" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.04 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                <p className="text-white group-hover:underline">{p.title}</p>
                <p className="text-xs text-zinc-400">{p.desc}</p>
              </motion.a>
            ))}
          </div>
          <a href="#projects" className="mt-4 inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-indigo-200">
            View all projects <FiExternalLink />
          </a>
        </motion.div>
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="border-t border-white/10" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-zinc-400 md:flex-row md:px-10">
        <div>© {new Date().getFullYear()} Avinash Kumar. Made with <FiHeart className="mx-1 inline text-rose-400" /> </div>
        <div className="flex flex-wrap items-center gap-3 text-[11px]">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Full Stack Developer</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Node JS & React</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">AWS & DevOps</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Open to Opportunities</span>
        </div>
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-2 rounded-md border border-white/10 px-2 py-1 text-zinc-300 hover:bg-white/5 hover:text-white"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <FiArrowUp /> Top
        </motion.button>
      </div>
    </footer>
  )
}


