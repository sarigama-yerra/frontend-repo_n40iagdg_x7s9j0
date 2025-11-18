import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Grow Your Brand With Us</h2>
          <p className="mt-4 text-slate-600">Book a free strategy call. We’ll audit your presence and map the fastest path to impact.</p>
          <a href="#" className="mt-8 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white text-sm font-medium hover:opacity-90 transition">
            Book Free Call
          </a>
        </motion.div>
      </div>
    </section>
  )
}
