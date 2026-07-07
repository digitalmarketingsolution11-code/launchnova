import { Link } from 'react-router-dom'
import {
  Rocket,
  BookOpen,
  FileText,
  Music,
  Globe,
  GitBranch,
  ArrowRight,
  Star,
  CheckCircle,
} from 'lucide-react'
import StarfieldHero from '../components/StarfieldHero'
import HeroTrustBadges from '../components/HeroTrustBadges'
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

export default function Home() {
  const services = [
    {
      icon: <Rocket className="w-12 h-12" />,
      title: 'Crowdfunding',
      description:
        'We craft compelling campaigns that captivate backers and exceed funding goals. From Kickstarter to Indiegogo, we handle it all.',
      cta: 'Learn More',
      href: '/services/crowdfunding',
      bg: 'bg-navy-800',
      textColor: 'text-cream-50',
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Book Marketing',
      description:
        'Transform your manuscript into a bestseller. Our marketing strategies put your book in front of the right readers at the right time.',
      cta: 'Learn More',
      href: '/services/book-marketing',
      bg: 'bg-gold-500',
      textColor: 'text-navy-900',
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Resume Writing',
      description:
        'Stand out in a competitive job market. Professional resumes that pass ATS systems and impress hiring managers.',
      cta: 'Learn More',
      href: '/services/resume-writing',
      bg: 'bg-navy-700',
      textColor: 'text-cream-50',
    },
    {
      icon: <Music className="w-12 h-12" />,
      title: 'Music Promotion',
      description:
        'Get your music heard by millions. From playlist placements to viral TikTok campaigns, we build your fanbase and grow your streams.',
      cta: 'Learn More',
      href: '/services/music-promotion',
      bg: 'bg-navy-800',
      textColor: 'text-cream-50',
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Translation',
      description:
        'Break language barriers and connect with the world. Professional translation in 50+ languages with certified accuracy.',
      cta: 'Learn More',
      href: '/services/translation',
      bg: 'bg-navy-700',
      textColor: 'text-cream-50',
    },
    {
      icon: <GitBranch className="w-12 h-12" />,
      title: 'Genealogy',
      description:
        'Discover your roots and preserve your legacy. We trace your family tree, recover historical records, and connect you with your heritage.',
      cta: 'Learn More',
      href: '/services/genealogy',
      bg: 'bg-gold-500',
      textColor: 'text-navy-900',
    },
  ]

  const testimonials = [
    {
      quote:
        "LaunchNova took my Kickstarter campaign from concept to $250K funded. Their strategy was flawless.",
      name: 'Sarah M.',
      role: 'Crowdfunding Client',
    },
    {
      quote:
        "My book hit the Amazon bestseller list within two weeks. The marketing team knows exactly what they're doing.",
      name: 'James T.',
      role: 'Author',
    },
    {
      quote:
        "I went from zero callbacks to three interviews in one week after using their resume service. Life-changing.",
      name: 'Priya K.',
      role: 'Job Seeker',
    },
  ]

  const stats = [
    { number: '$50M+', label: 'Total Funds Raised for Clients' },
    { number: '500+', label: 'Books Launched & Marketed' },
    { number: '10,000+', label: 'Resumes Delivered' },
    { number: '95%', label: 'Client Satisfaction Rate' },
  ]

  const process = [
    {
      number: '01',
      title: 'Discover',
      description: 'We analyze your goals, audience, and competitive landscape.',
    },
    {
      number: '02',
      title: 'Strategize',
      description: 'Our team crafts a tailored roadmap for your success.',
    },
    {
      number: '03',
      title: 'Execute',
      description: 'We implement with precision, creativity, and constant optimization.',
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Your project goes live with full support until you reach your goals.',
    },
  ]

  const whyChoose = [
    'Proven track record with $50M+ raised',
    'Dedicated team for every project',
    'Results-backed money-back guarantee',
    '24/7 support throughout your journey',
  ]

  return (
    <>
      {/* Hero Section */}
      <StarfieldHero>
        <HeroTrustBadges />
        <div className="relative z-10 px-5 md:px-6 lg:px-20 pb-6 pt-20 md:pt-32">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-cream-50 leading-tight mb-4 md:mb-6 hero-headline">
              Launch Your
              <br />
              <span className="text-gold-500 hero-subheadline">Success Story</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-cream-100 max-w-xl mb-6 md:mb-8 leading-relaxed hero-body">
              We help creators, artists, authors, and professionals turn their dreams into reality
              through crowdfunding, book marketing, resume writing, music promotion,
              translation services, and genealogy research.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-10 hero-buttons">
              <Link
                to="/contact"
                className="px-6 md:px-8 py-3 md:py-3.5 bg-gold-500 text-navy-900 font-semibold rounded-full hover:bg-gold-400 transition-colors inline-flex items-center justify-center gap-2 text-sm md:text-base"
              >
                Start Your Launch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/testimonials"
                className="px-6 md:px-8 py-3 md:py-3.5 border border-gold-500 text-gold-400 font-semibold rounded-full hover:bg-gold-500 hover:text-navy-900 transition-colors inline-flex items-center justify-center text-sm md:text-base"
              >
                View Our Results
              </Link>
            </div>
            <div className="grid grid-cols-3 md:flex md:flex-wrap gap-4 md:gap-8 lg:gap-12 hero-stats">
              <div>
                <span className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-gold-500 stat-number">$50M+</span>
                <p className="text-[10px] md:text-sm text-cream-100 mt-1 stat-label">Funds Raised</p>
              </div>
              <div>
                <span className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-gold-500 stat-number">2B+</span>
                <p className="text-[10px] md:text-sm text-cream-100 mt-1 stat-label">Streams</p>
              </div>
              <div>
                <span className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-gold-500 stat-number">500+</span>
                <p className="text-[10px] md:text-sm text-cream-100 mt-1 stat-label">Books Launched</p>
              </div>
              <div className="col-span-3 flex gap-4 md:gap-8 lg:gap-12 mt-2 md:mt-0">
                <div>
                  <span className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-gold-500 stat-number">10K+</span>
                  <p className="text-[10px] md:text-sm text-cream-100 mt-1 stat-label">Resumes</p>
                </div>
                <div>
                  <span className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-gold-500 stat-number">50+</span>
                  <p className="text-[10px] md:text-sm text-cream-100 mt-1 stat-label">Languages</p>
                </div>
                <div>
                  <span className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-gold-500 stat-number">5K+</span>
                  <p className="text-[10px] md:text-sm text-cream-100 mt-1 stat-label">Family Trees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StarfieldHero>

      {/* Trusted By Section */}
      <section className="bg-navy-800 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-center text-xs font-semibold tracking-[0.15em] uppercase text-gold-400 mb-8">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60 trusted-logos">
            <span className="text-cream-50 font-heading font-semibold text-sm tracking-wider">KICKSTARTER</span>
            <span className="text-cream-50 font-heading font-semibold text-sm tracking-wider">INDIEGOGO</span>
            <span className="text-cream-50 font-heading font-semibold text-sm tracking-wider">amazon</span>
            <span className="text-cream-50 font-heading font-semibold text-sm tracking-wider">BARNES & NOBLE</span>
            <span className="text-cream-50 font-heading font-semibold text-sm tracking-wider">LinkedIn</span>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="bg-cream-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal className="text-center mb-16">
            <span className="section-label text-slate mb-4 block">WHAT WE DO</span>
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-charcoal mb-4">
              Six Paths to Success
            </h2>
            <p className="text-lg text-slate max-w-xl mx-auto">
              Choose your journey. Every service is crafted to deliver measurable results and lasting
              impact.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 card-grid-3">
            {services.map((service, i) => (
              <SectionReveal key={service.title} className={`stagger-${(i % 3) + 1}`}>
                <div
                  className={`${service.bg} ${service.textColor} rounded-2xl p-6 md:p-8 lg:p-10 h-full flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 shadow-lg service-card`}
                >
                  <div>
                    <div className="mb-6">{service.icon}</div>
                    <h3 className="font-heading font-semibold text-2xl mb-4">{service.title}</h3>
                    <p className="text-base opacity-90 mb-6 leading-relaxed">{service.description}</p>
                  </div>
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                  >
                    {service.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose LaunchNova */}
      <section className="bg-navy-900 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 why-choose-grid">
            <div className="lg:col-span-3">
              <SectionReveal>
                <span className="section-label text-gold-400 mb-4 block">WHY LAUNCHNOVA</span>
                <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-cream-50 mb-6">
                  We're Not Just Another Agency
                </h2>
                <p className="text-lg text-cream-100 mb-8 leading-relaxed">
                  We combine data-driven strategy with creative excellence. Every campaign is
                  tailored, every book gets personalized attention, and every resume is crafted to
                  open doors.
                </p>
                <ul className="space-y-4">
                  {whyChoose.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                      <span className="text-cream-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </SectionReveal>
            </div>
            <div className="lg:col-span-2">
              <SectionReveal>
                <div className="bg-navy-800 rounded-2xl p-8 lg:p-10">
                  <div className="mb-8">
                    <p className="text-sm text-slate mb-2">Client Success Rate</p>
                    <span className="font-heading font-bold text-6xl lg:text-7xl text-gold-500">95%</span>
                  </div>
                  <div className="h-px bg-navy-700 mb-8" />
                  <div className="mb-8">
                    <p className="text-sm text-slate mb-2">Average Funding Exceedance</p>
                    <span className="font-heading font-bold text-6xl lg:text-7xl text-gold-500">340%</span>
                  </div>
                  <div className="h-px bg-navy-700 mb-8" />
                  <div>
                    <p className="text-sm text-slate mb-2">Projects Delivered</p>
                    <span className="font-heading font-bold text-6xl lg:text-7xl text-gold-500">1,200+</span>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-navy-900 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal className="text-center mb-16">
            <span className="section-label text-gold-400 mb-4 block">OUR TRACK RECORD</span>
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-cream-50">
              Numbers That Speak
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 stats-grid-4">
            {stats.map((stat, i) => (
              <SectionReveal key={stat.label} className={`text-center stagger-${i + 1}`}>
                <span className="font-heading font-bold text-4xl lg:text-5xl text-gold-500 block mb-2 stat-number">
                  {stat.number}
                </span>
                <p className="text-cream-100 text-sm lg:text-base stat-label">{stat.label}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal className="text-center mb-16">
            <span className="section-label text-slate mb-4 block">CLIENT STORIES</span>
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-charcoal mb-4">
              What Our Clients Say
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 card-grid-3">
            {testimonials.map((t, i) => (
              <SectionReveal key={i} className={`stagger-${i + 1}`}>
                <div className="bg-white border border-cream-100 rounded-xl p-8 h-full testimonial-card">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <p className="text-charcoal italic mb-6 leading-relaxed">"{t.quote}"</p>
                  <div>
                    <p className="font-heading font-semibold text-charcoal">{t.name}</p>
                    <p className="text-sm text-slate">{t.role}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-gold-500 font-semibold hover:gap-3 transition-all"
            >
              View All Testimonials <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy-800 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal className="text-center mb-16">
            <span className="section-label text-gold-400 mb-4 block">HOW IT WORKS</span>
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-cream-50">
              Your Launch Sequence
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative process-grid">
            {/* Connecting line - desktop only */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-navy-700 process-connector" />

            {process.map((step, i) => (
              <SectionReveal key={step.number} className={`text-center stagger-${i + 1} relative`}>
                <div className="w-20 h-20 rounded-full border-2 border-gold-500 flex items-center justify-center mx-auto mb-6 bg-navy-800 process-step-circle">
                  <span className="font-heading font-bold text-2xl text-gold-500 process-step-number">{step.number}</span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-cream-50 mb-3">{step.title}</h3>
                <p className="text-cream-100 text-sm leading-relaxed">{step.description}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gold-500 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-navy-900 mb-4 cta-headline">
              Ready to Launch?
            </h2>
            <p className="text-lg text-navy-800 mb-8 cta-body">
              Let's discuss how LaunchNova can accelerate your success. Free consultation, no
              obligations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-900 text-gold-500 font-semibold rounded-full hover:bg-navy-800 transition-colors"
            >
              Get Your Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
