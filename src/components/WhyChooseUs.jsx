import { motion } from 'framer-motion'

const points = [
  { title: 'Apple‑grade craft', desc: 'Polished visuals, micro‑interactions, and a premium aesthetic.' },
  { title: 'Performance mindset', desc: 'Every post and ad laddered to metrics that matter.' },
  { title: 'Senior talent only', desc: 'Small, expert team — no handoffs to juniors.' },
  { title: 'Speed + clarity', desc: 'Weekly sprints, crystal‑clear reporting, proactive ideas.' }
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Why Choose Us</h2>
          <p className="mt-4 text-slate-600">Where brand meets performance — without compromise.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
            >
              <h3 className="font-medium">{p.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
