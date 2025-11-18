import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: '$2,500/mo',
    features: ['Platform audit', 'Content calendar', '8 posts/mo', 'Basic reporting'],
    highlight: false
  },
  {
    name: 'Growth',
    price: '$6,000/mo',
    features: ['Creative strategy', 'Weekly shoots', '20 posts/mo', 'Community management', 'A/B testing'],
    highlight: true
  },
  {
    name: 'Scale',
    price: 'Custom',
    features: ['Paid ads', 'UGC studio', 'Creator program', 'Advanced analytics', 'Quarterly roadmaps'],
    highlight: false
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Pricing</h2>
          <p className="mt-4 text-slate-600">Flexible engagements tailored to your stage and goals.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative rounded-2xl border border-black/10 bg-white p-6 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] ${t.highlight ? 'ring-2 ring-black' : ''}`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-black px-3 py-1 text-xs text-white">Most Popular</div>
              )}
              <div className="text-sm text-slate-500">{t.name}</div>
              <div className="mt-2 text-3xl font-semibold">{t.price}</div>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                {t.features.map(f => (
                  <li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-black" /> {f}</li>
                ))}
              </ul>
              <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-black px-4 py-2 text-white text-sm">Choose {t.name}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
