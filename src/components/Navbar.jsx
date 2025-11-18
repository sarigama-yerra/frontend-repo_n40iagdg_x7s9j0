import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#cases', label: 'Case Studies' },
    { href: '#why', label: 'Why Us' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#pricing', label: 'Pricing' },
  ]

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-lg bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-black" />
            <span className="font-semibold tracking-tight">Social Studio</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-sm text-slate-700 hover:text-black transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#cta" className="inline-flex items-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition">
              Book Free Call
            </a>
          </div>

          <button aria-label="Open Menu" onClick={() => setOpen(true)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
            <Menu size={18} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 220, damping: 24 }}
              className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white p-6"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">Menu</span>
                <button onClick={() => setOpen(false)} className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-black text-white">
                  <X size={16} />
                </button>
              </div>
              <div className="mt-6 grid gap-4">
                {navLinks.map(link => (
                  <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-lg text-slate-800">
                    {link.label}
                  </a>
                ))}
                <a href="#cta" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-black px-4 py-3 text-white">
                  Book Free Call
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
