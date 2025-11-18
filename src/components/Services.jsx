import { motion } from 'framer-motion'
import { Camera, Megaphone, DollarSign, MessageSquare } from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Content Creation',
    desc: 'End-to-end production: concepting, shoots, editing, motion, and delivery.'
  },
  {
    icon: Megaphone,
    title: 'Social Media Management',
    desc: 'Daily posting, community management, calendars, and trends — handled.'
  },
  {
    icon: DollarSign,
    title: 'Paid Ads',
    desc: 'High-performing creatives for Meta, TikTok, and YouTube that scale.'
  },
  {
    icon: MessageSquare,
    title: 'Consulting',
    desc: 'Audits, playbooks, and in-house team enablement for sustainable growth.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Services</h2>
          <p className="mt-4 text-slate-600">
            Precision creative and performance systems tailored to your brand’s goals.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-0.5 transition-all"
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
