import { useState, useEffect } from 'react'
import { X, Cookie } from 'lucide-react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-md border-t border-navy-700">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie className="w-5 h-5 text-gold-500 flex-shrink-0 hidden sm:block" />
        <p className="text-sm text-cream-100 flex-1">
          We use cookies to enhance your experience, analyze traffic, and personalize content. By continuing, you agree to our{' '}
          <a href="#/privacy" className="text-gold-400 hover:underline">Privacy Policy</a> and{' '}
          <a href="#/terms" className="text-gold-400 hover:underline">Terms of Service</a>.
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={accept}
            className="px-5 py-2 bg-gold-500 text-navy-900 text-sm font-semibold rounded-full hover:bg-gold-400 transition-colors"
          >
            Accept
          </button>
          <button onClick={accept} className="text-cream-100 hover:text-cream-50 p-1">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
