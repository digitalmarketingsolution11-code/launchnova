import { Link } from 'react-router-dom'
import {
  Rocket,
  BookOpen,
  FileText,
  Music,
  Globe,
  Send,
  ArrowRight,
  Star,
  CheckCircle,
} from 'lucide-react'
import StarfieldHero from '../components/StarfieldHero'
import HeroTrustBadges from '../components/HeroTrustBadges'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

// ─── Animated Counter ───────────────────────────────────────────
function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2 }: {
  value: number; suffix?: string; prefix?: string; duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (c) => Math.floor(c).toLocaleString());
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (isInView && !hasAnimated) { setHasAnimated(true); spring.set(value); }
  }, [isInView, hasAnimated, spring, value]);

  useEffect(() => { const unsub = display.on('change', setDisplayValue); return () => unsub(); }, [display]);

  return <span ref={ref}>{prefix}{displayValue}{suffix}</span>;
}

// ─── Reusable Scroll-Reveal ─────────────────────────────────────
function FadeIn({ children, className = '', delay = 0, direction = 'up' }: {
  children: React.ReactNode; className?: string; delay?: number; direction?: 'up' | 'left' | 'right';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const offset = direction === 'up' ? { y: 50, x: 0 } : direction === 'left' ? { x: -60, y: 0 } : { x: 60, y: 0 };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerContainer({ children, className = '', stagger = 0.1 }: {
  children: React.ReactNode; className?: string; stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: stagger, delayChildren: 0.1 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className = '', direction = 'up' }: {
  children: React.ReactNode; className?: string; direction?: 'up' | 'left' | 'right';
}) {
  const offset = direction === 'up' ? { y: 40, x: 0 } : direction === 'left' ? { x: -40, y: 0 } : { x: 40, y: 0 };
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, ...offset }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ScaleIn({ children, className = '', delay = 0 }: {
  children: React.ReactNode; className?: string; delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.88 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
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
      bg: 'bg-gold-500',
      textColor: 'text-navy-900',
    },
    {
      icon: <Send className="w-12 h-12" />,
      title: 'Telegram / Crypto',
      description:
        'Build and grow your Web3 community. From Telegram group management to crypto project marketing, we help you thrive in the digital economy.',
      cta: 'Learn More',
      href: '/services/telegram-crypto',
      bg: 'bg-navy-800',
      textColor: 'text-cream-50',
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
            {/* Logo floats in */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-4 md:mb-6"
            >
              <img
                src="/images/launchnova-logo.png"
                alt="LaunchNova"
                className="w-16 h-16 md:w-20 md:h-20 drop-shadow-2xl animate-logo-float"
              />
            </motion.div>

            {/* Headline types in with stagger */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-cream-50 leading-tight mb-4 md:mb-6"
            >
              Launch Your
              <br />
              <span className="text-gold-500">Success Story</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-sm sm:text-base md:text-lg text-cream-100 max-w-xl mb-6 md:mb-8 leading-relaxed"
            >
              We help creators, artists, authors, and professionals turn their dreams into reality
              through crowdfunding, book marketing, resume writing, music promotion,
              translation, and Telegram / crypto community growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-10"
            >
              <Link
                to="/contact"
                className="px-6 md:px-8 py-3 md:py-3.5 bg-gold-500 text-navy-900 font-semibold rounded-full hover:bg-gold-400 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base animate-pulse-glow"
              >
                Start Your Launch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/testimonials"
                className="px-6 md:px-8 py-3 md:py-3.5 border border-gold-500 text-gold-400 font-semibold rounded-full hover:bg-gold-500 hover:text-navy-900 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center text-sm md:text-base"
              >
                View Our Results
              </Link>
            </motion.div>

            {/* Hero stats with animated counters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid grid-cols-3 md:flex md:flex-wrap gap-4 md:gap-8 lg:gap-12"
            >
              <div>
                <span className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-gold-500">
                  <AnimatedCounter value={50} suffix="M+" />
                </span>
                <p className="text-[10px] md:text-sm text-cream-100 mt-1">Funds Raised</p>
              </div>
              <div>
                <span className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-gold-500">
                  <AnimatedCounter value={2} suffix="B+" />
                </span>
                <p className="text-[10px] md:text-sm text-cream-100 mt-1">Streams</p>
              </div>
              <div>
                <span className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-gold-500">
                  <AnimatedCounter value={500} suffix="+" />
                </span>
                <p className="text-[10px] md:text-sm text-cream-100 mt-1">Books Launched</p>
              </div>
              <div className="col-span-3 flex gap-4 md:gap-8 lg:gap-12 mt-2 md:mt-0">
                <div>
                  <span className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-gold-500">
                    <AnimatedCounter value={10} suffix="K+" />
                  </span>
                  <p className="text-[10px] md:text-sm text-cream-100 mt-1">Resumes</p>
                </div>
                <div>
                  <span className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-gold-500">
                    <AnimatedCounter value={50} suffix="+" />
                  </span>
                  <p className="text-[10px] md:text-sm text-cream-100 mt-1">Languages</p>
                </div>
                <div>
                  <span className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-gold-500">
                    <AnimatedCounter value={200} suffix="+" />
                  </span>
                  <p className="text-[10px] md:text-sm text-cream-100 mt-1">Playlists</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </StarfieldHero>

      {/* Trusted By Section - Infinite Marquee */}
      <section className="bg-navy-800 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
          <FadeIn>
            <p className="text-center text-xs font-semibold tracking-[0.15em] uppercase text-gold-400">
              TRUSTED BY INDUSTRY LEADERS
            </p>
          </FadeIn>
        </div>
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-16 px-8">
                {['KICKSTARTER', 'INDIEGOGO', 'AMAZON', 'BARNES & NOBLE', 'LINKEDIN', 'SPOTIFY', 'APPLE MUSIC', 'BOOKBUB', 'GOOGLE ADS', 'META'].map((name, i) => (
                  <span key={i} className="text-cream-50/40 font-heading font-bold text-sm tracking-[0.2em] uppercase hover:text-gold-400 transition-colors duration-300 cursor-default">
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="bg-cream-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn className="text-center mb-16">
            <span className="section-label text-slate mb-4 block">WHAT WE DO</span>
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-charcoal mb-4">
              Six Paths to Success
            </h2>
            <p className="text-lg text-slate max-w-xl mx-auto">
              Choose your journey. Every service is crafted to deliver measurable results and lasting
              impact.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" stagger={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className={`${service.bg} ${service.textColor} rounded-2xl p-6 md:p-8 lg:p-10 h-full flex flex-col justify-between shadow-lg group relative overflow-hidden cursor-pointer`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div>
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="mb-6 inline-block"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="font-heading font-semibold text-2xl mb-4">{service.title}</h3>
                    <p className="text-base opacity-90 mb-6 leading-relaxed">{service.description}</p>
                  </div>
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                  >
                    {service.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose LaunchNova */}
      <section className="bg-navy-900 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <FadeIn direction="left">
                <span className="section-label text-gold-400 mb-4 block">WHY LAUNCHNOVA</span>
                <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-cream-50 mb-6">
                  We're Not Just Another Agency
                </h2>
                <p className="text-lg text-cream-100 mb-8 leading-relaxed">
                  We combine data-driven strategy with creative excellence. Every campaign is
                  tailored, every book gets personalized attention, and every resume is crafted to
                  open doors.
                </p>
              </FadeIn>
              <StaggerContainer className="space-y-4" stagger={0.12}>
                {whyChoose.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                      </motion.div>
                      <span className="text-cream-100">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
            <div className="lg:col-span-2">
              <FadeIn direction="right" delay={0.2}>
                <div className="bg-navy-800 rounded-2xl p-8 lg:p-10">
                  <div className="mb-8">
                    <p className="text-sm text-slate mb-2">Client Success Rate</p>
                    <span className="font-heading font-bold text-6xl lg:text-7xl text-gold-500">
                      <AnimatedCounter value={95} suffix="%" />
                    </span>
                  </div>
                  <div className="h-px bg-navy-700 mb-8" />
                  <div className="mb-8">
                    <p className="text-sm text-slate mb-2">Average Funding Exceedance</p>
                    <span className="font-heading font-bold text-6xl lg:text-7xl text-gold-500">
                      <AnimatedCounter value={340} suffix="%" />
                    </span>
                  </div>
                  <div className="h-px bg-navy-700 mb-8" />
                  <div>
                    <p className="text-sm text-slate mb-2">Projects Delivered</p>
                    <span className="font-heading font-bold text-6xl lg:text-7xl text-gold-500">
                      <AnimatedCounter value={1200} suffix="+" />
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-navy-900 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn className="text-center mb-16">
            <span className="section-label text-gold-400 mb-4 block">OUR TRACK RECORD</span>
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-cream-50">
              Numbers That Speak
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12" stagger={0.15}>
            {stats.map((stat) => {
              const numMatch = stat.number.match(/^([\d.]+)(.*)$/);
              const numVal = numMatch ? parseFloat(numMatch[1]) : 0;
              const suffix = numMatch ? numMatch[2] : stat.number;
              return (
                <StaggerItem key={stat.label}>
                  <div className="text-center p-6 rounded-2xl bg-navy-800/50 hover:bg-navy-800 transition-colors duration-300 group">
                    <span className="font-heading font-bold text-4xl lg:text-5xl text-gold-500 block mb-2 group-hover:scale-110 transition-transform duration-300">
                      <AnimatedCounter value={numVal} suffix={suffix} />
                    </span>
                    <p className="text-cream-100 text-sm lg:text-base">{stat.label}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn className="text-center mb-16">
            <span className="section-label text-slate mb-4 block">CLIENT STORIES</span>
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-charcoal mb-4">
              What Our Clients Say
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" stagger={0.12}>
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-cream-100 rounded-xl p-8 h-full shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: j * 0.08, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-charcoal italic mb-6 leading-relaxed">"{t.quote}"</p>
                  <div>
                    <p className="font-heading font-semibold text-charcoal">{t.name}</p>
                    <p className="text-sm text-slate">{t.role}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4} className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-gold-500 font-semibold hover:gap-3 transition-all"
            >
              View All Testimonials <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy-800 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn className="text-center mb-16">
            <span className="section-label text-gold-400 mb-4 block">HOW IT WORKS</span>
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-cream-50">
              Your Launch Sequence
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Animated connecting line */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-transparent via-gold-500/50 to-transparent origin-left"
              />
            </div>

            <StaggerContainer className="contents" stagger={0.18}>
              {process.map((step) => (
                <StaggerItem key={step.number}>
                  <div className="text-center relative group">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-20 h-20 rounded-full border-2 border-gold-500 flex items-center justify-center mx-auto mb-6 bg-navy-800 group-hover:bg-gold-500/10 transition-colors duration-300"
                    >
                      <span className="font-heading font-bold text-2xl text-gold-500">{step.number}</span>
                    </motion.div>
                    <h3 className="font-heading font-semibold text-xl text-cream-50 mb-3">{step.title}</h3>
                    <p className="text-cream-100 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gold-500 py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <ScaleIn>
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-navy-900 mb-4">
              Ready to Launch?
            </h2>
            <p className="text-lg text-navy-800 mb-8">
              Let's discuss how LaunchNova can accelerate your success. Free consultation, no
              obligations.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-900 text-gold-500 font-semibold rounded-full hover:bg-navy-800 transition-colors"
              >
                Get Your Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </ScaleIn>
        </div>
      </section>
    </>
  )
}
