import { useState, useEffect, useRef } from 'react'
import { Mail, Send, CheckCircle, Loader2 } from 'lucide-react'
import { trpc } from '@/providers/trpc'

function SectionReveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { entry.target.classList.add('animate-fade-in-up'); observer.unobserve(entry.target) } },
      { threshold: 0.1 }
    )
    if (ref.current) { ref.current.style.opacity = '0'; observer.observe(ref.current) }
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={className}>{children}</div>
}

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const subscribe = trpc.newsletter.subscribe.useMutation({
    onSuccess: (data) => {
      setIsSuccess(true)
      setMessage(data.message)
      setEmail('')
      setTimeout(() => {
        setIsSuccess(false)
        setMessage('')
      }, 5000)
    },
    onError: (error) => {
      setMessage(error.message || 'Something went wrong. Please try again.')
      setIsSuccess(false)
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      subscribe.mutate({ email })
    }
  }

  return (
    <section className="bg-navy-900 py-16 md:py-20 border-t border-navy-800">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <SectionReveal className="bg-navy-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl" />
          <div className="relative z-10 text-center">
            <Mail className="w-10 h-10 text-gold-500 mx-auto mb-4" />
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-cream-50 mb-3">Get Insider Tips & Strategies</h2>
            <p className="text-cream-100 mb-8 max-w-lg mx-auto">Join 10,000+ creators and professionals who receive our weekly newsletter with actionable marketing tips, industry trends, and exclusive offers.</p>

            {subscribe.isSuccess ? (
              <div className="flex items-center justify-center gap-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">{message}</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-full bg-navy-700 border border-navy-600 text-cream-50 placeholder-slate focus:border-gold-500 focus:outline-none text-sm"
                />
                <button
                  type="submit"
                  disabled={subscribe.isPending}
                  className="px-6 py-3 bg-gold-500 text-navy-900 font-semibold rounded-full hover:bg-gold-400 transition-colors flex items-center justify-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {subscribe.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Subscribe
                    </>
                  )}
                </button>
              </form>
            )}
            {subscribe.isError && (
              <p className="text-red-400 text-sm mt-3">{message}</p>
            )}
            <p className="text-cream-100/50 text-xs mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
