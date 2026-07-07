import { useState, useEffect } from 'react'
import { X, Gift } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ExitIntent() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !localStorage.getItem('exit-intent-dismissed')) {
        setVisible(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [dismissed])

  const dismiss = () => {
    setVisible(false)
    setDismissed(true)
    localStorage.setItem('exit-intent-dismissed', 'true')
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm" onClick={dismiss}>
      <div className="bg-cream-50 rounded-2xl p-8 max-w-md w-full relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={dismiss} className="absolute top-4 right-4 text-slate hover:text-charcoal">
          <X className="w-5 h-5" />
        </button>
        <div className="w-14 h-14 bg-gold-500/15 rounded-xl flex items-center justify-center mb-4">
          <Gift className="w-7 h-7 text-gold-500" />
        </div>
        <h3 className="font-heading font-bold text-2xl text-charcoal mb-2">Wait! Before You Go...</h3>
        <p className="text-slate mb-6">Get a <strong>free strategy consultation</strong> worth $200 — no strings attached. Let us show you exactly how we can help you succeed.</p>
        <Link
          to="/contact"
          onClick={dismiss}
          className="block w-full py-3.5 bg-gold-500 text-navy-900 font-semibold rounded-full hover:bg-gold-400 transition-colors text-center"
        >
          Claim Your Free Consultation
        </Link>
        <button onClick={dismiss} className="w-full mt-3 text-sm text-slate hover:text-charcoal transition-colors">
          No thanks, I will pass
        </button>
      </div>
    </div>
  )
}
