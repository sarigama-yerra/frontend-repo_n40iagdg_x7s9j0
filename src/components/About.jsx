import { motion } from 'framer-motion'
import { Rocket, Sparkles, LineChart, Zap } from 'lucide-react'

const items = [
  {
    icon: Rocket,
    title: 'Strategy-first',
    desc: 'We start with positioning, ICP clarity, and a platform-native plan.'
  },
  {
    icon: Sparkles,
    title: 'Design obsession',
    desc: 'Minimal, cinematic visuals engineered for scroll-stopping impact.'
  },
  {
    icon: LineChart,
    title: 'Performance DNA',
    desc: 'Creative tested against outcomes — not just aesthetics.'
  },
  {
    icon: Zap,
    title: 'Fast iteration',
    desc: 'Weekly sprints, transparent reporting, continuous improvement.'
  }
]

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">About Us</h2>
          <p className="mt-4 text-slate-600">
            We’re a boutique social media agency crafting premium brand presence across platforms. From narrative to analytics, we blend craft with performance.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-black/10 bg-white p-6 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-black text-white grid place-items-center">
                  <item.icon size={18} />
                </div>
                <h3 className="font-medium">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
