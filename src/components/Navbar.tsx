import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const setAccent = (hsl: string) => {
    document.documentElement.style.setProperty('--accent', hsl)
  }

  const links: Array<[string, string]> = [
    ['Home', 'home'],
    ['About', 'about'],
    ['Skills', 'skills'],
    ['Projects', 'projects'],
    ['Education', 'education'],
    ['Certificates', 'certificates'],
    ['Contact', 'contact'],
  ]

  return (
    <header className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 ${isScrolled ? 'border-b border-white/10' : ''}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="text-sm font-semibold tracking-wide text-zinc-200">
          <span className="accent-text">●</span> Avinash Kumar
        </a>
        <button className="md:hidden text-zinc-300 hover:text-white" aria-label="Menu" onClick={() => setMobileOpen((o) => !o)}>
          ☰
        </button>
        <div className="hidden items-center gap-6 md:flex">
          {links.map(([label, to]) => (
            <a
              key={to}
              href={`#${to}`}
              className="cursor-pointer text-sm text-zinc-300 hover:text-white"
            >
              {label}
            </a>
          ))}
          <div className="ml-2 flex items-center gap-1">
            {[
              '243 94% 66%', // indigo
              '201 100% 50%', // cyan
              '142 71% 45%', // green
              '14 90% 60%', // orange
            ].map((hsl) => (
              <button
                key={hsl}
                onClick={() => setAccent(hsl)}
                className="h-3 w-3 rounded-full ring-1 ring-white/20"
                style={{ backgroundColor: `hsl(${hsl})` }}
                aria-label="Set accent color"
              />
            ))}
          </div>
          <a href="https://github.com/avinashsingh5" target="_blank" className="text-zinc-300 hover:text-white" aria-label="GitHub">
            <FaGithub className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/avinash-kumarsingh/" target="_blank" className="text-zinc-300 hover:text-white" aria-label="LinkedIn">
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </nav>
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/50">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex flex-col gap-3">
              {links.map(([label, to]) => (
                <a
                  key={to}
                  href={`#${to}`}
                  className="cursor-pointer text-sm text-zinc-300 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <span className="text-xs text-zinc-400">Accent:</span>
                {['243 94% 66%', '201 100% 50%', '142 71% 45%', '14 90% 60%'].map((hsl) => (
                  <button
                    key={hsl}
                    onClick={() => setAccent(hsl)}
                    className="h-4 w-4 rounded-full ring-1 ring-white/20"
                    style={{ backgroundColor: `hsl(${hsl})` }}
                    aria-label="Set accent color"
                  />
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                <a href="https://github.com/avinashsingh5" target="_blank" className="text-zinc-300 hover:text-white" aria-label="GitHub">
                  <FaGithub className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/avinash-kumarsingh/" target="_blank" className="text-zinc-300 hover:text-white" aria-label="LinkedIn">
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}


