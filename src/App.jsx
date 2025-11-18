import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <CTA />

      <footer className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-black" />
            <span className="text-sm text-slate-600">© {new Date().getFullYear()} Social Studio</span>
          </div>
          <div className="text-sm text-slate-600">Premium social media agency</div>
        </div>
      </footer>
    </div>
  )
}

export default App
