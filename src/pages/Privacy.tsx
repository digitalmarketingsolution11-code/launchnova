import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield } from 'lucide-react'

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

export default function Privacy() {
  return (
    <>
      <section className="bg-navy-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <Shield className="w-8 h-8 text-gold-500 mx-auto mb-4" />
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-cream-50 mb-4">Privacy Policy</h1>
          <p className="text-cream-100 max-w-xl mx-auto">Last updated: June 2026</p>
        </div>
      </section>

      <section className="bg-cream-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="space-y-10 text-charcoal">
              <div>
                <h2 className="font-heading font-semibold text-xl mb-3">1. Information We Collect</h2>
                <p className="text-slate leading-relaxed">We collect information you provide directly to us, including name, email address, phone number, and project details when you fill out our contact form or request a consultation. We also automatically collect certain information about your device and usage of our website.</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-xl mb-3">2. How We Use Your Information</h2>
                <p className="text-slate leading-relaxed">We use the information we collect to provide, maintain, and improve our services, communicate with you about your projects, send marketing communications (with your consent), and comply with legal obligations.</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-xl mb-3">3. Information Sharing</h2>
                <p className="text-slate leading-relaxed">We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-xl mb-3">4. Data Security</h2>
                <p className="text-slate leading-relaxed">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure.</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-xl mb-3">5. Your Rights</h2>
                <p className="text-slate leading-relaxed">You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time by contacting us at support@LaunchNova.online.</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-xl mb-3">6. Cookies</h2>
                <p className="text-slate leading-relaxed">We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookies through your browser settings.</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-xl mb-3">7. Contact Us</h2>
                <p className="text-slate leading-relaxed">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@LaunchNova.online" className="text-gold-500 hover:underline">support@LaunchNova.online</a>.</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-gold-500 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy-900 mb-4">Have Questions?</h2>
          <p className="text-navy-800 mb-6">Our team is here to help with any privacy concerns.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-900 text-gold-500 font-semibold rounded-full hover:bg-navy-800 transition-colors">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
