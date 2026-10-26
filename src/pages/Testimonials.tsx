import { Link } from 'react-router-dom'
import { Star, ArrowRight, Play } from 'lucide-react'
import { useEffect, useRef } from 'react'

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

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default function Testimonials() {
  const crowdfundingTestimonials = [
    { quote: "I had a great product but zero marketing experience. LaunchNova handled everything — the video, the page, the ads. We hit our $50K goal in 8 hours and ended at $340K.", name: 'Alex R.', role: 'Founder, LumiSmart', result: '$340K Raised' },
    { quote: "The pre-launch strategy was a game-changer. We had 4,000 people on our waitlist before we even went live. Our campaign was funded in the first day.", name: 'Maya L.', role: 'Game Designer', result: '$1.2M Raised' },
    { quote: "I'd failed a campaign before. LaunchNova showed me exactly what went wrong and fixed it. This time we raised 400% of our goal.", name: 'Carlos M.', role: 'Inventor', result: '400% Funded' },
    { quote: "Their PR team got us featured on TechCrunch and The Verge. That coverage alone brought in $100K in pledges. Worth every penny.", name: 'Jennifer W.', role: 'CEO, EcoTech', result: 'Featured on TechCrunch' },
    { quote: "Professional, responsive, and incredibly knowledgeable. They treated my campaign like it was their own. Couldn't recommend them more.", name: 'David K.', role: 'Product Designer', result: '$180K Raised' },
    { quote: "The daily updates and optimization during the live campaign made all the difference. They caught a pricing issue early that could have cost us thousands.", name: 'Rachel S.', role: 'Co-founder', result: '$95K Raised' },
  ]

  const bookTestimonials = [
    { quote: "I spent two years writing my novel and was terrified no one would read it. LaunchNova's marketing got me 200 reviews in the first month and #1 in my category.", name: 'Elena V.', role: 'Author, "The Last Librarian"', result: '#1 Bestseller' },
    { quote: "The Amazon ads management alone was worth the investment. My book went from selling 2 copies a day to 200. I'm now writing full-time thanks to them.", name: 'David C.', role: 'Author, "The Mindful Entrepreneur"', result: '82K Copies Sold' },
    { quote: "As a first-time author, I had no idea how to market a book. LaunchNova held my hand through the entire process and delivered results beyond my wildest dreams.", name: 'Sophia L.', role: 'Romance Author', result: '50K Copies Sold' },
    { quote: "Their BookBub strategy got me a Featured Deal that sold 15,000 copies in a week. My publisher couldn't believe the numbers.", name: 'Marcus T.', role: 'Thriller Author', result: '15K in One Week' },
    { quote: "The PR team secured me interviews on 5 podcasts and a feature in Publishers Weekly. That visibility changed everything for my author career.", name: 'Amanda R.', role: 'Non-Fiction Author', result: '5 Podcast Features' },
    { quote: "I was skeptical about investing in marketing for my self-published book. Best decision I ever made. ROI was 10x within the first quarter.", name: 'Thomas H.', role: 'Fantasy Author', result: '10x ROI' },
  ]

  const resumeTestimonials = [
    { quote: "After 6 months of job searching with zero callbacks, I hired LaunchNova. Within two weeks of using my new resume, I had three interviews and a job offer.", name: 'Michael T.', role: 'Marketing Manager', result: '3 Interviews in 2 Weeks' },
    { quote: "I was switching from teaching to tech and had no idea how to frame my experience. LaunchNova made my transition look seamless. Landed a role at Google.", name: 'Aisha K.', role: 'Data Analyst', result: 'Google Offer' },
    { quote: "The executive resume they created for me was phenomenal. It captured 20 years of experience in two pages and positioned me as a strategic leader. Two board offers in a month.", name: 'Robert H.', role: 'CTO', result: '2 Board Offers' },
    { quote: "I was embarrassed by my old resume. The new one makes me look like the rockstar I am. My confidence in interviews skyrocketed too.", name: 'Lisa M.', role: 'Product Manager', result: 'Senior PM Role' },
    { quote: "The LinkedIn optimization combined with the resume was a powerful combo. Recruiters started reaching out to me instead of me chasing jobs.", name: 'James P.', role: 'Sales Director', result: 'Recruiters Reaching Out' },
    { quote: "Worth every penny. The ATS optimization actually works — I applied to the same companies that had rejected me before and got interviews this time.", name: 'Nina S.', role: 'HR Specialist', result: 'Multiple Interviews' },
  ]

  const videoTestimonials = [
    { name: 'Sarah Mitchell', role: 'Tech Entrepreneur', service: 'Crowdfunding', quote: 'From $0 to $250K in 30 days' },
    { name: 'James Torres', role: 'Published Author', service: 'Book Marketing', quote: 'Bestseller in 14 days' },
    { name: 'Ashaolu Bukola', role: 'Software Engineer', service: 'Resume Writing', quote: '3 interviews in my first week' },
  ]

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-navy-800 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="section-label text-gold-400 mb-4 block">PROOF OF SUCCESS</span>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-cream-50 mb-4">
            Client Success Stories
          </h1>
          <p className="text-lg text-cream-100 max-w-2xl mx-auto">
            Real results from real clients. See how LaunchNova has transformed businesses, careers, and lives.
          </p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mt-10">
            <div>
              <span className="font-heading font-bold text-3xl text-gold-500">500+</span>
              <p className="text-sm text-cream-100 mt-1">Happy Clients</p>
            </div>
            <div>
              <span className="font-heading font-bold text-3xl text-gold-500">4.9★</span>
              <p className="text-sm text-cream-100 mt-1">Average Rating</p>
            </div>
            <div>
              <span className="font-heading font-bold text-3xl text-gold-500">95%</span>
              <p className="text-sm text-cream-100 mt-1">Would Recommend</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal className="text-center mb-16">
            <span className="section-label text-gold-400 mb-4 block">VIDEO STORIES</span>
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-cream-50">
              Hear From Our Clients
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {videoTestimonials.map((vt, i) => (
              <SectionReveal key={i} className={`stagger-${i + 1}`}>
                <div className="bg-navy-800 rounded-2xl overflow-hidden group cursor-pointer">
                  <div className="aspect-video bg-navy-700 relative flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/30 transition-colors">
                      <Play className="w-6 h-6 text-gold-500 ml-1" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-cream-50 font-heading font-semibold text-sm">"{vt.quote}"</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-heading font-semibold text-cream-50">{vt.name}</p>
                    <p className="text-sm text-cream-100">{vt.role}</p>
                    <span className="text-xs text-gold-500 uppercase tracking-wider mt-2 block">{vt.service}</span>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Crowdfunding Testimonials */}
      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal className="mb-12">
            <span className="section-label text-slate mb-4 block">CROWDFUNDING</span>
            <h2 className="font-heading font-semibold text-3xl text-charcoal">Campaigns That Soared</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crowdfundingTestimonials.map((t, i) => (
              <SectionReveal key={i} className={`stagger-${(i % 3) + 1}`}>
                <div className="bg-white border border-cream-100 rounded-xl p-6 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <p className="text-charcoal italic mb-6 text-sm leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center">
                      <span className="text-gold-500 font-heading font-bold text-sm">
                        {t.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-charcoal text-sm">{t.name}</p>
                      <p className="text-xs text-slate">{t.role}</p>
                    </div>
                  </div>
                  <span className="inline-block mt-4 text-xs font-semibold text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full">
                    {t.result}
                  </span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Book Marketing Testimonials */}
      <section className="bg-navy-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal className="mb-12">
            <span className="section-label text-gold-400 mb-4 block">BOOK MARKETING</span>
            <h2 className="font-heading font-semibold text-3xl text-cream-50">Books That Found Their Readers</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookTestimonials.map((t, i) => (
              <SectionReveal key={i} className={`stagger-${(i % 3) + 1}`}>
                <div className="bg-navy-700 rounded-xl p-6 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <p className="text-cream-50 italic mb-6 text-sm leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center">
                      <span className="text-navy-900 font-heading font-bold text-sm">
                        {t.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-cream-50 text-sm">{t.name}</p>
                      <p className="text-xs text-cream-100">{t.role}</p>
                    </div>
                  </div>
                  <span className="inline-block mt-4 text-xs font-semibold text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full">
                    {t.result}
                  </span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Writing Testimonials */}
      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal className="mb-12">
            <span className="section-label text-slate mb-4 block">RESUME WRITING</span>
            <h2 className="font-heading font-semibold text-3xl text-charcoal">Careers Accelerated</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeTestimonials.map((t, i) => (
              <SectionReveal key={i} className={`stagger-${(i % 3) + 1}`}>
                <div className="bg-white border border-cream-100 rounded-xl p-6 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <p className="text-charcoal italic mb-6 text-sm leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center">
                      <span className="text-gold-500 font-heading font-bold text-sm">
                        {t.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-charcoal text-sm">{t.name}</p>
                      <p className="text-xs text-slate">{t.role}</p>
                    </div>
                  </div>
                  <span className="inline-block mt-4 text-xs font-semibold text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full">
                    {t.result}
                  </span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="bg-gold-500 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <SectionReveal>
              <span className="font-heading font-bold text-5xl lg:text-6xl text-navy-900 block">$50M+</span>
              <p className="text-navy-800 font-medium mt-2">Total Funds Raised</p>
            </SectionReveal>
            <SectionReveal className="stagger-1">
              <span className="font-heading font-bold text-5xl lg:text-6xl text-navy-900 block">500+</span>
              <p className="text-navy-800 font-medium mt-2">Books Marketed</p>
            </SectionReveal>
            <SectionReveal className="stagger-2">
              <span className="font-heading font-bold text-5xl lg:text-6xl text-navy-900 block">10,000+</span>
              <p className="text-navy-800 font-medium mt-2">Resumes Delivered</p>
            </SectionReveal>
            <SectionReveal className="stagger-3">
              <span className="font-heading font-bold text-5xl lg:text-6xl text-navy-900 block">95%</span>
              <p className="text-navy-800 font-medium mt-2">Client Satisfaction</p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-cream-50 mb-4">
              Join Our Success Stories
            </h2>
            <p className="text-lg text-cream-100 mb-8">
              Whether you're launching a product, marketing a book, or advancing your career — we're here to help you succeed.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold-500 text-navy-900 font-semibold rounded-full hover:bg-gold-400 transition-colors"
            >
              Start Your Journey <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
