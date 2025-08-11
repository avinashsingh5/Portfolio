import { motion } from 'framer-motion'
import { useScrollFloat } from '../hooks/useScrollFloat'
import { FiMessageSquare, FiBookOpen, FiShoppingBag, FiGithub } from 'react-icons/fi'

type Project = {
  title: string
  period: string
  tagline: string
  github: string
  bullets: string[]
  tags: string[]
  icon: React.ComponentType<{ className?: string }>
  gradient: string
}

const projects: Project[] = [
  {
    title: 'Real-Time Chat Application',
    period: 'Feb. 2025 – May. 2025',
    tagline: 'Full-Stack MERN Chat App with Live Messaging',
    github: 'https://github.com/avinashsingh5/Connect-App',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Cloudinary'],
    icon: FiMessageSquare,
    gradient: 'from-indigo-500 via-blue-500 to-cyan-400',
    bullets: [
      'Built a full-stack real-time messaging platform using the MERN stack with Socket.IO, enabling instant message delivery and online status tracking.',
      'Implemented JWT authentication with bcrypt hashing and HTTP-only cookies for secure sessions, reaching 99.9% uptime.',
      'Developed a responsive chat interface with Cloudinary-based image sharing, reducing message latency by ~80% vs polling.',
    ],
  },
  {
    title: 'Context-Aware Multi-Document Summarizer',
    period: 'Dec. 2024 – Mar. 2025',
    tagline: 'Knowledge Graph-Enhanced Semantic Summarizer',
    github: 'https://github.com/avinashsingh5/multidoc-multilingual-summarizer',
    tags: ['RAG', 'Neo4j', 'spaCy', 'LLaMA‑2', 'Python'],
    icon: FiBookOpen,
    gradient: 'from-fuchsia-500 via-purple-500 to-indigo-500',
    bullets: [
      'Constructed a RAG pipeline to summarize 50+ pages of cross-document content; achieved ~85% coherence (ROUGE-L).',
      'Designed a Knowledge Graph using Neo4j and spaCy, extracting 500+ entity relationships per document; improved context retention by ~25%.',
      'Reduced redundancy by ~20% with abstractive summarization and fine-tuned LLaMA‑2 for domain adaptation; +15% factual consistency vs extractive baselines.',
    ],
  },
  {
    title: 'LV Food Delivery',
    period: 'Sept. 2024 – Jan. 2025',
    tagline: 'React-Based Food Delivery E‑Commerce Platform',
    github: 'https://github.com/avinashsingh5/LV-FOOD-DELIVERY',
    tags: ['React', 'Redux Toolkit', 'RTK Query', 'Code Splitting'],
    icon: FiShoppingBag,
    gradient: 'from-amber-500 via-orange-500 to-rose-500',
    bullets: [
      'Optimized performance via code splitting (React.lazy), memoization (React.memo), and useCallback/useMemo; 40% faster loads, 60% smaller bundles.',
      'Built Redux store with slice-based architecture and async cart actions; normalized state yielded 50% faster updates and 30% less memory.',
      'Centralized state with Redux Toolkit; predictable data flow improved re-renders by ~70% and responsiveness by ~45%.',
    ],
  },
]

export function Projects() {
  const { ref, y } = useScrollFloat(18)
  return (
    <section id="projects" className="w-full px-6 md:px-10 py-20">
      <h2 className="mx-auto max-w-6xl font-poppins text-2xl font-semibold text-white">Projects</h2>
      <motion.div ref={ref as any} style={{ y }} className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 will-change-transform">
          {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: idx * 0.06 }}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            {/* Gradient header */}
            <div className={`relative h-20 w-full bg-gradient-to-r ${project.gradient}`}>
              <div className="absolute inset-0 opacity-40 [background:radial-gradient(800px_200px_at_20%_-20%,white_5%,transparent_60%)]" />
              <div className="relative flex h-full items-center justify-between px-5">
                <div className="flex items-center gap-3">
                  {(() => { const Icon = project.icon; return <Icon className="h-6 w-6 text-white" /> })()}
                  <div>
                    <h3 className="text-base font-semibold text-white">{project.title}</h3>
                    <p className="text-xs text-white/80">{project.tagline}</p>
                  </div>
                </div>
                <span className="shrink-0 text-[10px] font-medium tracking-wide text-white/90">{project.period}</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-5">
              <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-300">
              {project.bullets.map((b, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -6 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  {b}
                </motion.li>
              ))}
              </ul>

              {/* Tech tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-black/20 px-2 py-1 text-[11px] text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 text-xs font-medium text-zinc-200 transition hover:bg-white/5"
                >
                  <FiGithub className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}


