import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, FileText } from 'lucide-react'

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

export default function Terms() {
  return (
    <>
      <section className="bg-navy-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <FileText className="w-8 h-8 text-gold-500 mx-auto mb-4" />
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-cream-50 mb-4">Terms of Service</h1>
          <p className="text-cream-100 max-w-xl mx-auto">Last updated: June 2026</p>
        </div>
      </section>

      <section className="bg-cream-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="space-y-10 text-charcoal">
              <div>
                <h2 className="font-heading font-semibold text-xl mb-3">1. Agreement to Terms</h2>
                <p className="text-slate leading-relaxed">By accessing and using LaunchNova's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-xl mb-3">2. Services</h2>
                <p className="text-slate leading-relaxed">LaunchNova provides digital marketing services including crowdfunding campaign management, book marketing, resume writing, music promotion, translation services, and genealogy research. Specific deliverables and timelines are outlined in individual service agreements.</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-xl mb-3">3. Payment Terms</h2>
                <p className="text-slate leading-relaxed">Payment is due according to the schedule outlined in your service agreement. We accept bank transfers and major payment methods. Late payments may result in service suspension. All fees are non-refundable unless otherwise stated.</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-xl mb-3">4. Intellectual Property</h2>
                <p className="text-slate leading-relaxed">All materials, strategies, and content created by LaunchNova remain our intellectual property until full payment is received. Upon payment, deliverables are transferred to the client for their intended use.</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-xl mb-3">5. Confidentiality</h2>
                <p className="text-slate leading-relaxed">We maintain strict confidentiality regarding all client information and project details. We will not disclose your information to third parties without your consent, except as required by law.</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-xl mb-3">6. Limitation of Liability</h2>
                <p className="text-slate leading-relaxed">LaunchNova's liability is limited to the amount paid for services. We do not guarantee specific results (e.g., funding amounts, book sales, job offers) as these depend on factors beyond our control.</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-xl mb-3">7. Termination</h2>
                <p className="text-slate leading-relaxed">Either party may terminate the service agreement with written notice. Clients remain responsible for payment for work completed prior to termination.</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-xl mb-3">8. Governing Law</h2>
                <p className="text-slate leading-relaxed">These terms are governed by the laws of the State of California, USA. Any disputes shall be resolved through arbitration in San Francisco, California.</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-xl mb-3">9. Contact</h2>
                <p className="text-slate leading-relaxed">For questions about these terms, contact us at <a href="mailto:support@LaunchNova.online" className="text-gold-500 hover:underline">support@LaunchNova.online</a>.</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-gold-500 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-navy-900 mb-4">Questions About Our Terms?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-900 text-gold-500 font-semibold rounded-full hover:bg-navy-800 transition-colors">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
