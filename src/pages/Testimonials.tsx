import { Link } from 'react-router-dom'
import { Star, ArrowRight, Play, TrendingUp, Award, Users, Zap } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function SectionReveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) {
      ref.current.style.opacity = '0'
      observer.observe(ref.current)
    }
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={className}>{children}</div>
}

/* Animated counter hook */
function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const increment = end / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return { count, ref }
}

export default function Testimonials() {
  const crowdfundingTestimonials = [
    { quote: "I had a great product but zero marketing experience. LaunchNova handled everything — the video, the page, the ads. We hit our $50K goal in 8 hours and ended at $340K.", name: 'Alex R.', role: 'Founder, LumiSmart', result: '$340K Raised', image: '/images/real-client-1.jpg' },
    { quote: "The pre-launch strategy was a game-changer. We had 4,000 people on our waitlist before we even went live. Our campaign was funded in the first day.", name: 'Maya L.', role: 'Game Designer', result: '$1.2M Raised', image: '/images/real-client-2.jpg' },
    { quote: "I'd failed a campaign before. LaunchNova showed me exactly what went wrong and fixed it. This time we raised 400% of our goal.", name: 'Carlos M.', role: 'Inventor', result: '400% Funded', image: '/images/real-client-3.jpg' },
    { quote: "Their PR team got us featured on TechCrunch and The Verge. That coverage alone brought in $100K in pledges. Worth every penny.", name: 'Jennifer W.', role: 'CEO, EcoTech', result: 'Featured on TechCrunch', image: '/images/real-client-8.jpg' },
    { quote: "Professional, responsive, and incredibly knowledgeable. They treated my campaign like it was their own. Couldn't recommend them more.", name: 'David K.', role: 'Product Designer', result: '$180K Raised', image: '/images/real-client-9.jpg' },
    { quote: "The daily updates and optimization during the live campaign made all the difference. They caught a pricing issue early that could have cost us thousands.", name: 'Rachel S.', role: 'Co-founder', result: '$95K Raised', image: '/images/real-client-10.jpg' },
  ]

  const bookTestimonials = [
    { quote: "I spent two years writing my novel and was terrified no one would read it. LaunchNova's marketing got me 200 reviews in the first month and #1 in my category.", name: 'Elena V.', role: 'Author, The Last Librarian', result: '#1 Bestseller', image: '/images/real-client-5.jpg' },
    { quote: "The Amazon ads management alone was worth the investment. My book went from selling 2 copies a day to 200. I'm now writing full-time thanks to them.", name: 'David C.', role: 'Author, The Mindful Entrepreneur', result: '82K Copies Sold', image: '/images/real-client-4.jpg' },
    { quote: "As a first-time author, I had no idea how to market a book. LaunchNova held my hand through the entire process and delivered results beyond my wildest dreams.", name: 'Sophia L.', role: 'Romance Author', result: '50K Copies Sold', image: '/images/real-client-11.jpg' },
    { quote: "Their BookBub strategy got me a Featured Deal that sold 15,000 copies in a week. My publisher couldn't believe the numbers.", name: 'Marcus T.', role: 'Thriller Author', result: '15K in One Week', image: '/images/real-team-member-1.jpg' },
    { quote: "The PR team secured me interviews on 5 podcasts and a feature in Publishers Weekly. That visibility changed everything for my author career.", name: 'Amanda R.', role: 'Non-Fiction Author', result: '5 Podcast Features', image: '/images/real-team-member-2.jpg' },
    { quote: "I was skeptical about investing in marketing for my self-published book. Best decision I ever made. ROI was 10x within the first quarter.", name: 'Thomas H.', role: 'Fantasy Author', result: '10x ROI', image: '/images/real-team-member-3.jpg' },
  ]

  const resumeTestimonials = [
    { quote: "After 6 months of job searching with zero callbacks, I hired LaunchNova. Within two weeks of using my new resume, I had three interviews and a job offer.", name: 'Michael T.', role: 'Marketing Manager', result: '3 Interviews in 2 Weeks', image: '/images/real-client-4.jpg' },
    { quote: "I was switching from teaching to tech and had no idea how to frame my experience. LaunchNova made my transition look seamless. Landed a role at Google.", name: 'Aisha K.', role: 'Data Analyst', result: 'Google Offer', image: '/images/real-client-5.jpg' },
    { quote: "The executive resume they created for me was phenomenal. It captured 20 years of experience in two pages and positioned me as a strategic leader. Two board offers in a month.", name: 'Robert H.', role: 'CTO', result: '2 Board Offers', image: '/images/real-client-6.jpg' },
    { quote: "I was embarrassed by my old resume. The new one makes me look like the rockstar I am. My confidence in interviews skyrocketed too.", name: 'Lisa M.', role: 'Product Manager', result: 'Senior PM Role', image: '/images/real-client-7.jpg' },
    { quote: "The LinkedIn optimization combined with the resume was a powerful combo. Recruiters started reaching out to me instead of me chasing jobs.", name: 'James P.', role: 'Sales Director', result: 'Recruiters Reaching Out', image: '/images/real-client-8.jpg' },
    { quote: "Worth every penny. The ATS optimization actually works — I applied to the same companies that had rejected me before and got interviews this time.", name: 'Nina S.', role: 'HR Specialist', result: 'Multiple Interviews', image: '/images/real-client-9.jpg' },
  ]

  const videoTestimonials = [
    { name: 'Sarah Mitchell', role: 'Tech Entrepreneur', service: 'Crowdfunding', quote: 'From $0 to $250K in 30 days', image: '/images/real-client-8.jpg' },
    { name: 'James Torres', role: 'Published Author', service: 'Book Marketing', quote: 'Bestseller in 14 days', image: '/images/real-client-9.jpg' },
    { name: 'Ashaolu Bukola', role: 'Software Engineer', service: 'Resume Writing', quote: '3 interviews in my first week', image: '/images/real-client-11.jpg' },
  ]

  const trustBadges = [
    { icon: <TrendingUp className="w-6 h-6" />, label: '$50M+ Raised', desc: 'For crowdfunding clients' },
    { icon: <Award className="w-6 h-6" />, label: '500+ Bestsellers', desc: 'Books marketed to #1' },
    { icon: <Users className="w-6 h-6" />, label: '10,000+ Careers', desc: 'Resumes that get hired' },
    { icon: <Zap className="w-6 h-6" />, label: '2B+ Streams', desc: 'Music promotion results' },
    { icon: <Star className="w-6 h-6" />, label: '4.9★ Rating', desc: 'From verified clients' },
    { icon: <TrendingUp className="w-6 h-6" />, label: '50+ Languages', desc: 'Translation expertise' },
  ]

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-navy-800 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="section-label text-gold-400 mb-4 block animate-pulse">PROOF OF SUCCESS</span>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-cream-50 mb-4">
            Client Success Stories
          </h1>
          <p className="text-lg text-cream-100 max-w-2xl mx-auto">
            Real results from real clients. See how LaunchNova has transformed businesses, careers, and lives.
          </p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mt-10">
            <div className="hover:scale-110 transition-transform duration-300">
              <span className="font-heading font-bold text-3xl text-gold-500">500+</span>
              <p className="text-sm text-cream-100 mt-1">Happy Clients</p>
            </div>
            <div className="hover:scale-110 transition-transform duration-300">
              <span className="font-heading font-bold text-3xl text-gold-500">4.9★</span>
              <p className="text-sm text-cream-100 mt-1">Average Rating</p>
            </div>
            <div className="hover:scale-110 transition-transform duration-300">
              <span className="font-heading font-bold text-3xl text-gold-500">95%</span>
              <p className="text-sm text-cream-100 mt-1">Would Recommend</p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Trust Badges */}
      <section className="bg-navy-900 py-12 border-y border-navy-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {trustBadges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-navy-800/50 border border-navy-700 rounded-full px-5 py-3 hover:bg-navy-800 hover:border-gold-500/30 transition-all duration-300 hover:scale-105 cursor-default group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="text-gold-500 group-hover:scale-110 transition-transform">{badge.icon}</span>
                <div>
                  <p className="text-cream-50 font-semibold text-sm">{badge.label}</p>
                  <p className="text-cream-100/50 text-xs">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn className="text-center mb-16">
            <span className="section-label text-gold-400 mb-4 block">VIDEO STORIES</span>
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-cream-50">
              Hear From Our Clients
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {videoTestimonials.map((vt, i) => (
              <FadeIn key={i} className={`stagger-${i + 1}`}>
                <div className="bg-navy-800 rounded-2xl overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-500">
                  <div className="aspect-video bg-navy-700 relative flex items-center justify-center overflow-hidden">
                    <img
                      src={vt.image}
                      alt={vt.name}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/40 group-hover:scale-110 transition-all duration-300">
                        <Play className="w-6 h-6 text-gold-500 ml-1 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-cream-50 font-heading font-semibold text-sm drop-shadow-lg">"{vt.quote}"</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <img src={vt.image} alt={vt.name} className="w-10 h-10 rounded-full object-cover border-2 border-gold-500" />
                      <div>
                        <p className="font-heading font-semibold text-cream-50">{vt.name}</p>
                        <p className="text-sm text-cream-100">{vt.role}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gold-500 uppercase tracking-wider mt-3 block">{vt.service}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Crowdfunding Testimonials */}
      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn className="mb-12">
            <span className="section-label text-slate mb-4 block">CROWDFUNDING</span>
            <h2 className="font-heading font-semibold text-3xl text-charcoal">Campaigns That Soared</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crowdfundingTestimonials.map((t, i) => (
              <FadeIn key={i} className={`stagger-${(i % 3) + 1}`}>
                <div className="bg-white border border-cream-100 rounded-xl p-6 h-full hover:shadow-lg hover:border-gold-200 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold-500 text-gold-500 group-hover:scale-110 transition-transform" style={{ transitionDelay: `${j * 50}ms` }} />
                    ))}
                  </div>
                  <p className="text-charcoal italic mb-6 text-sm leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-gold-500 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-heading font-semibold text-charcoal text-sm">{t.name}</p>
                      <p className="text-xs text-slate">{t.role}</p>
                    </div>
                  </div>
                  <span className="inline-block mt-4 text-xs font-semibold text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full group-hover:bg-gold-500 group-hover:text-white transition-colors">
                    {t.result}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Book Marketing Testimonials */}
      <section className="bg-navy-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn className="mb-12">
            <span className="section-label text-gold-400 mb-4 block">BOOK MARKETING</span>
            <h2 className="font-heading font-semibold text-3xl text-cream-50">Books That Found Their Readers</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookTestimonials.map((t, i) => (
              <FadeIn key={i} className={`stagger-${(i % 3) + 1}`}>
                <div className="bg-navy-700 rounded-xl p-6 h-full hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold-500 text-gold-500 group-hover:scale-110 transition-transform" style={{ transitionDelay: `${j * 50}ms` }} />
                    ))}
                  </div>
                  <p className="text-cream-50 italic mb-6 text-sm leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-gold-500 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-heading font-semibold text-cream-50 text-sm">{t.name}</p>
                      <p className="text-xs text-cream-100">{t.role}</p>
                    </div>
                  </div>
                  <span className="inline-block mt-4 text-xs font-semibold text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                    {t.result}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Writing Testimonials */}
      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn className="mb-12">
            <span className="section-label text-slate mb-4 block">RESUME WRITING</span>
            <h2 className="font-heading font-semibold text-3xl text-charcoal">Careers Accelerated</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeTestimonials.map((t, i) => (
              <FadeIn key={i} className={`stagger-${(i % 3) + 1}`}>
                <div className="bg-white border border-cream-100 rounded-xl p-6 h-full hover:shadow-lg hover:border-gold-200 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold-500 text-gold-500 group-hover:scale-110 transition-transform" style={{ transitionDelay: `${j * 50}ms` }} />
                    ))}
                  </div>
                  <p className="text-charcoal italic mb-6 text-sm leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-gold-500 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-heading font-semibold text-charcoal text-sm">{t.name}</p>
                      <p className="text-xs text-slate">{t.role}</p>
                    </div>
                  </div>
                  <span className="inline-block mt-4 text-xs font-semibold text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full group-hover:bg-gold-500 group-hover:text-white transition-colors">
                    {t.result}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="bg-gold-500 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <FadeIn>
              <span className="font-heading font-bold text-5xl lg:text-6xl text-navy-900 block hover:scale-110 transition-transform inline-block">$50M+</span>
              <p className="text-navy-800 font-medium mt-2">Total Funds Raised</p>
            </FadeIn>
            <FadeIn className="stagger-1">
              <span className="font-heading font-bold text-5xl lg:text-6xl text-navy-900 block hover:scale-110 transition-transform inline-block">500+</span>
              <p className="text-navy-800 font-medium mt-2">Books Marketed</p>
            </FadeIn>
            <FadeIn className="stagger-2">
              <span className="font-heading font-bold text-5xl lg:text-6xl text-navy-900 block hover:scale-110 transition-transform inline-block">10,000+</span>
              <p className="text-navy-800 font-medium mt-2">Resumes Delivered</p>
            </FadeIn>
            <FadeIn className="stagger-3">
              <span className="font-heading font-bold text-5xl lg:text-6xl text-navy-900 block hover:scale-110 transition-transform inline-block">95%</span>
              <p className="text-navy-800 font-medium mt-2">Client Satisfaction</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-cream-50 mb-4">
              Join Our Success Stories
            </h2>
            <p className="text-lg text-cream-100 mb-8">
              Whether you're launching a product, marketing a book, or advancing your career — we're here to help you succeed.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold-500 text-navy-900 font-semibold rounded-full hover:bg-gold-400 hover:scale-105 transition-all duration-300"
            >
              Start Your Journey <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
