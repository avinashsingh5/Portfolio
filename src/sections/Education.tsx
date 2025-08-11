import { motion } from 'framer-motion'

type EducationItem = {
  school: string
  location: string
  degree: string
  score: string
  period?: string
}

const education: EducationItem[] = [
  {
    school: 'Lovely Professional University',
    location: 'Kapurthala, Punjab',
    degree: 'B.Tech',
    score: 'CGPA: 7.5',
    period: 'Aug. 2022 – Jul. 2026',
  },
  {
    school: 'Himalayan International School',
    location: 'Patna, Bihar',
    degree: 'Senior Secondary',
    score: 'Percentage: 82%',
    period: '2022',
  },
  {
    school: 'DAV Public School',
    location: 'Patna, Bihar',
    degree: 'Secondary',
    score: 'Percentage: 94%',
    period: '2020',
  },
]

export function Education() {
  return (
    <section id="education" className="w-full px-6 md:px-10 py-20">
      <h2 className="mx-auto max-w-6xl font-poppins text-2xl font-semibold text-white">Education</h2>
      <div className="mx-auto mt-8 max-w-6xl space-y-4">
        {education.map((e, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-white">{e.school}</p>
                <p className="text-xs text-zinc-400">{e.location}</p>
              </div>
              {e.period && <span className="shrink-0 text-xs text-zinc-400">{e.period}</span>}
            </div>
            <div className="mt-2 text-sm text-zinc-300">{e.degree}</div>
            <div className="text-xs text-zinc-400">{e.score}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


