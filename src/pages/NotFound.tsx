import { Link } from 'react-router-dom'
import { Rocket, Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="bg-navy-900 min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="mb-8">
          <Rocket className="w-20 h-20 text-gold-500 mx-auto mb-6 animate-bounce" />
          <h1 className="font-heading font-bold text-8xl text-gold-500 mb-2">404</h1>
          <p className="text-2xl text-cream-50 font-heading font-semibold mb-3">Page Not Found</p>
          <p className="text-cream-100">
            Looks like this page launched into space. The page you are looking for does not exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 text-navy-900 font-semibold rounded-full hover:bg-gold-400 transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold-500 text-gold-400 font-semibold rounded-full hover:bg-gold-500 hover:text-navy-900 transition-colors"
          >
            Contact Support
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800">
          <p className="text-sm text-slate">Try one of these popular pages:</p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <Link to="/services/crowdfunding" className="text-sm text-gold-500 hover:text-gold-400 hover:underline">Crowdfunding</Link>
            <Link to="/services/book-marketing" className="text-sm text-gold-500 hover:text-gold-400 hover:underline">Book Marketing</Link>
            <Link to="/services/resume-writing" className="text-sm text-gold-500 hover:text-gold-400 hover:underline">Resume Writing</Link>
            <Link to="/services/music-promotion" className="text-sm text-gold-500 hover:text-gold-400 hover:underline">Music Promotion</Link>
            <Link to="/services/translation" className="text-sm text-gold-500 hover:text-gold-400 hover:underline">Translation</Link>
            <Link to="/services/genealogy" className="text-sm text-gold-500 hover:text-gold-400 hover:underline">Genealogy</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
