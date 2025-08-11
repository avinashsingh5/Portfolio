import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useScrollFloat } from '../hooks/useScrollFloat'
import { type IconType } from 'react-icons'
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaJava, FaGithub, FaLock } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiJavascript, SiMongodb, SiMysql, SiExpress, SiHtml5, SiCss3, SiAngular, SiC, SiCplusplus, SiRedux, SiAmazon, SiSocketdotio, SiOpenapiinitiative, SiGithubactions, SiPostman, SiCloudinary } from 'react-icons/si'

type SkillItem = { name: string; icon: IconType }

const categories: { [category: string]: SkillItem[] } = {
  Languages: [
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'C', icon: SiC },
    { name: 'C++', icon: SiCplusplus },
    { name: 'Java', icon: FaJava },
  ],
  Frontend: [
    { name: 'HTML', icon: SiHtml5 },
    { name: 'CSS', icon: SiCss3 },
    { name: 'React', icon: FaReact },
    { name: 'Angular', icon: SiAngular },
    { name: 'Redux Toolkit', icon: SiRedux },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
  ],
  Backend: [
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Express', icon: SiExpress },
    { name: 'Socket.IO', icon: SiSocketdotio },
    { name: 'JWT Auth', icon: FaLock },
    { name: 'REST/OpenAPI', icon: SiOpenapiinitiative },
  ],
  Databases: [
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'MySQL', icon: SiMysql },
  ],
  AWS: [
    { name: 'AWS EC2', icon: SiAmazon },
    { name: 'AWS S3', icon: SiAmazon },
    { name: 'AWS Lambda', icon: SiAmazon },
  ],
  DevOps: [
    { name: 'Git', icon: FaGitAlt },
    { name: 'GitHub', icon: FaGithub },
    { name: 'GitHub Actions', icon: SiGithubactions },
    { name: 'Docker', icon: FaDocker },
  ],
  Tools: [
    { name: 'Postman', icon: SiPostman },
    { name: 'Cloudinary', icon: SiCloudinary },
  ],
}

const tabs = ['Frontend', 'Backend', 'Languages', 'Databases', 'AWS', 'DevOps', 'Tools'] as const

export function Skills() {
  const [active, setActive] = React.useState<(typeof tabs)[number]>('Languages')
  const { ref, y } = useScrollFloat(14)

  return (
    <section id="skills" className="w-full px-6 md:px-10 py-20">
      <h2 className="mx-auto max-w-6xl font-poppins text-2xl font-semibold text-white">Skills</h2>

      {/* Tabs */}
      <div className="mx-auto mt-6 flex max-w-6xl flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`relative rounded-full px-4 py-2 text-sm transition focus:outline-none ${
              active === tab ? 'text-white' : 'text-zinc-300 hover:text-white'
            }`}
          >
            {active === tab && (
              <motion.span
                layoutId="skillsTabBg"
                className="absolute inset-0 rounded-full bg-indigo-500/20"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div ref={ref as any} style={{ y }} className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 will-change-transform">
        <AnimatePresence mode="popLayout">
          {categories[active].map(({ name, icon: Icon }, idx) => (
            <motion.div
              key={`${active}-${name}`}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.55, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                   style={{ background: 'radial-gradient(600px 120px at 10% 0%, rgba(99,102,241,0.12), transparent 60%)' }}
              />
              <div className="flex items-center gap-3">
                <Icon className="h-7 w-7 text-zinc-200 transition group-hover:text-white" />
                <p className="text-sm text-zinc-300">{name}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}


