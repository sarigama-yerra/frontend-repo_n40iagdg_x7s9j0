import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: 'They rebuilt our content engine from the ground up. The quality and results are night and day.',
    author: 'Maya Patel',
    role: 'VP Marketing, Nimbus SaaS'
  },
  {
    quote: 'Our ROAS jumped 3x within two months. Their creative testing framework just works.',
    author: 'Leo Martinez',
    role: 'CMO, Bloom Beauty'
  },
  {
    quote: 'Finally an agency that gets brand and performance. Senior team, zero fluff, big outcomes.',
    author: 'Claire Nguyen',
    role: 'Founder, Atelier Home'
  }
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Loved by modern brands</h2>
        </div>

        <div className="relative mt-10 min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="text-xl leading-relaxed text-slate-800">“{testimonials[index].quote}”</p>
              <div className="mt-4 text-sm text-slate-600">{testimonials[index].author} • {testimonials[index].role}</div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} aria-label={`Go to slide ${i+1}`} className={`h-2 w-2 rounded-full ${i === index ? 'bg-black' : 'bg-slate-300'}`}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
