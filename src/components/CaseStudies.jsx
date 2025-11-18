import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const cases = [
  {
    title: 'DTC Beauty: +312% ROAS',
    before: 'Inconsistent posting, low engagement',
    after: 'High-performing UGC engine with weekly testing',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'SaaS: 4x Inbound Demos',
    before: 'Long sales cycles, weak narrative',
    after: 'Narrative series + founder-led content',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Ecom: +180% Revenue',
    before: 'Generic creatives, no testing framework',
    after: 'Creative lab with rapid iteration',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop'
  }
]

export default function CaseStudies() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section id="cases" ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Case Studies</h2>
          <p className="mt-4 text-slate-600">Before/after snapshots from recent engagements.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group overflow-hidden rounded-2xl border border-black/10 bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.image} alt="case" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-medium">{c.title}</h3>
                <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-slate-500">Before</div>
                    <div className="text-slate-800">{c.before}</div>
                  </div>
                  <div>
                    <div className="text-slate-500">After</div>
                    <div className="text-slate-800">{c.after}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
