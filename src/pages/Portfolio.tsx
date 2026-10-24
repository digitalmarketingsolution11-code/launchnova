import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ArrowRight, TrendingUp, Music, Globe, Send, Rocket, BookOpen, FileText } from 'lucide-react'

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

const caseStudies = [
  { service: 'Crowdfunding', icon: <Rocket className="w-5 h-5" />, title: 'LumiSmart AI Desk Lamp', category: 'TECHNOLOGY', image: '/images/case-lumismart.jpg', result: '$485K raised (970% of goal)', testimonial: '"LaunchNova\'s pre-launch strategy built us a list of 8,000 eager backers. We hit our goal in 4 hours."', client: 'Alex R., Founder', clientImage: '/images/real-client-1.jpg' },
  { service: 'Book Marketing', icon: <BookOpen className="w-5 h-5" />, title: 'The Last Librarian', category: 'FICTION', image: '/images/portfolio-bm-1.jpg', result: '47,000 copies sold, #1 Amazon', testimonial: '"LaunchNova\'s marketing got me 200 reviews in the first month and #1 in my category."', client: 'Elena V., Author', clientImage: '/images/real-client-5.jpg' },
  { service: 'Resume Writing', icon: <FileText className="w-5 h-5" />, title: 'Fortune 500 Career Change', category: 'TECHNOLOGY', image: '/images/resume-client-2.jpg', result: '4 interviews, 2 offers in 3 weeks', testimonial: '"I went from zero callbacks to three interviews in one week. Life-changing."', client: 'James T., Marketing Manager', clientImage: '/images/real-client-4.jpg' },
  { service: 'Music Promotion', icon: <Music className="w-5 h-5" />, title: 'Tunde Vibes — "Elevation"', category: 'AFROBEATS', image: '/images/music-client-1.jpg', result: '15M streams, 45 playlist placements', testimonial: '"LaunchNova got my single on 3 major Spotify editorial playlists. I went from 1K to 500K listeners."', client: 'Tunde V., Artist', clientImage: '/images/real-client-10.jpg' },
  { service: 'Translation', icon: <Globe className="w-5 h-5" />, title: 'TechNova Solutions Localization', category: 'BUSINESS', image: '/images/trans-client-2.jpg', result: '12 languages, 200% traffic increase', testimonial: '"Localizing our website for 12 markets seemed impossible. LaunchNova handled everything."', client: 'James L., CEO', clientImage: '/images/real-client-9.jpg' },
  { service: 'Telegram / Crypto', icon: <Send className="w-5 h-5" />, title: 'NovaCoin DeFi Protocol Launch', category: 'WEB3', image: '/images/portfolio-cf-1.jpg', result: '85K members, $4.2M raised', testimonial: '"LaunchNova built our Telegram from zero to 85,000 members in 6 weeks. Our token sold out in 4 minutes."', client: 'Samuel T., CEO', clientImage: '/images/real-client-11.jpg' },
]

export default function Portfolio() {
  return (
    <>
      <section className="bg-navy-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <TrendingUp className="w-8 h-8 text-gold-500 mx-auto mb-4" />
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-cream-50 mb-4">Our Results</h1>
          <p className="text-cream-100 max-w-xl mx-auto">Real projects. Real clients. Real success stories across all our services.</p>
        </div>
      </section>

      <section className="bg-cream-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Stats */}
          <FadeIn className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {[
                { number: '$50M+', label: 'Funds Raised' },
                { number: '2B+', label: 'Streams' },
                { number: '500+', label: 'Books Sold' },
                { number: '10K+', label: 'Resumes' },
                { number: '50+', label: 'Languages' },
                { number: '2M+', label: 'Community Members' },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center border border-cream-100">
                  <span className="font-heading font-bold text-xl md:text-2xl text-gold-500">{stat.number}</span>
                  <p className="text-xs text-slate mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Case Studies */}
          <div className="space-y-8">
            {caseStudies.map((cs, i) => (
              <FadeIn key={i}>
                <div className={`bg-white rounded-2xl overflow-hidden shadow-sm ${i % 2 === 0 ? '' : 'md:flex-row-reverse'} flex flex-col md:flex-row`}>
                  <div className="md:w-2/5">
                    <img src={cs.image} alt={cs.title} className="w-full h-56 md:h-full object-cover" />
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-gold-500">{cs.icon}</span>
                      <span className="text-xs font-semibold text-gold-500 uppercase tracking-wider">{cs.service}</span>
                      <span className="text-xs text-slate ml-2">{cs.category}</span>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-charcoal mb-2">{cs.title}</h3>
                    <div className="inline-block bg-gold-500/10 text-gold-600 px-3 py-1 rounded-full text-sm font-semibold mb-3 self-start">{cs.result}</div>
                    <p className="text-charcoal italic mb-3">"{cs.testimonial}"</p>
                    <div className="flex items-center gap-3">
                      <img src={cs.clientImage} alt={cs.client} className="w-10 h-10 rounded-full object-cover border-2 border-gold-500" />
                      <p className="text-sm text-slate font-medium">— {cs.client}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-navy-800 rounded-2xl p-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-cream-50 mb-4">Ready to Be Our Next Success Story?</h2>
            <p className="text-cream-100 mb-6 max-w-lg mx-auto">Let us discuss how LaunchNova can help you achieve your goals — no matter which service you need.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold-500 text-navy-900 font-semibold rounded-full hover:bg-gold-400 transition-colors">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
