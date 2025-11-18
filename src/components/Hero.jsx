import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden" id="top">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/95" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-slate-700 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Premium Social Media Agency
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Grow faster with an Apple‑grade social presence
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            We design cinematic social experiences that turn attention into revenue. Strategy, content, and performance — crafted end‑to‑end with obsessive detail.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white text-sm font-medium hover:opacity-90 transition">
              Book Free Call
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50 transition">
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
