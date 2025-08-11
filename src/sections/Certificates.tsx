import { motion } from 'framer-motion'

const certs = [
  { title: 'Cloud Computing ', issuer: 'NPTEL', link: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs118/Course/NPTEL24CS118S157020061504430631.pdf' },
  { title: 'Server-Side JavaScript with Node.js ', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/verify/EHQH7S5FC8XV' },
  { title: 'Generative AI with Large Language Models', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/verify/HB4753CR9Q9V' },
  { title: 'C and C++ Programming ', issuer: 'Board Infinity', link: 'https://github.com/avinashsingh5/certificates/blob/main/Board_infinity(12215935).pdf' },
]

export function Certificates() {
  return (
    <section id="certificates" className="w-full px-6 md:px-10 py-20">
      <h2 className="mx-auto max-w-6xl font-poppins text-2xl font-semibold text-white">Certificates</h2>
      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {certs.map((c, idx) => (
            <motion.a
            key={c.title}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="block rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"
          >
            <p className="text-white">{c.title}</p>
            <p className="mt-1 text-sm text-zinc-400">{c.issuer}</p>
            <p className="mt-2 text-xs text-zinc-400">View Certification</p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}


