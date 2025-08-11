import { motion } from 'framer-motion'

export function Contact() {
  return (
    <section id="contact" className="w-full px-6 md:px-10 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-semibold tracking-widest text-orange-400"
        >
          — GET IN TOUCH
        </motion.p>

        {/* decorative square removed per request */}

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300"
        >
          I'm always open to exciting opportunities — whether it's full‑time roles, freelance projects, tech
          collaborations, or even a friendly conversation. Let's connect!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <a
            href="https://www.linkedin.com/in/avinash-kumarsingh/"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/10 transition hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            Reach Me on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  )
}


