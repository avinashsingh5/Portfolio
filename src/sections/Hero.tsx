import { motion } from 'framer-motion'
import avatar from '../assets/Av.png'
import ProfileCard from '../components/ProfileCard'

export function Hero() {
  return (
    <section id="home" className="relative w-full px-6 md:px-10 min-h-[100svh] flex items-center pt-24 md:pt-28 pb-16">
      <div className="mx-auto w-full max-w-6xl grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 md:order-1"
        >
          <h1 className="font-poppins text-4xl font-bold tracking-tight text-white md:text-5xl">
            Avinash Kumar
          </h1>
          <p className="mt-2 text-base md:text-lg text-zinc-300 leading-relaxed">
            Full‑Stack Developer (MERN) • Gen‑AI • System Design
          </p>
          <p className="mt-6 max-w-prose text-zinc-400 leading-relaxed">
            I build fast, scalable products with a focus on clean architecture and a calm, effortless user experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="accent-bg accent-ring inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium text-black ring-1 ring-inset ring-white/10 transition hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/5"
            >
              About Me
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 md:order-2"
        >
          <div className="mx-auto flex items-center justify-center">
            <ProfileCard
              name="Avinash Kumar"
              title="Full‑Stack Developer"
              handle="avinashsingh5"
              status="Online"
              contactText="Contact Me"
              avatarUrl={avatar}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => window.open('https://www.linkedin.com/in/avinash-kumarsingh/', '_self')}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}


