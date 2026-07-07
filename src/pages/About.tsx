import { Link } from 'react-router-dom'
import { Trophy, Heart, BookOpen, ArrowRight, CheckCircle, Rocket, Target, Zap, Globe, Quote } from 'lucide-react'
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

export default function About() {
  const values = [
    {
      icon: <Trophy className="w-12 h-12" />,
      title: 'Results-Driven',
      description: "We measure our success by your success. Every strategy, every campaign, every resume is crafted with one goal in mind: delivering measurable results that exceed expectations.",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Client-First',
      description: "Your goals are our goals. We take the time to understand your unique situation, challenges, and aspirations. There's no one-size-fits-all at LaunchNova — every client gets a tailored approach.",
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Always Learning',
      description: "The digital landscape changes daily. We stay ahead of algorithm updates, platform changes, and industry trends so you don't have to. Continuous improvement isn't just a value — it's our operating system.",
    },
  ]

  const team = [
    { name: 'Atolagbe Abdulazeez', role: 'CEO & Founder', image: '/images/ceo-atolagbe.png', bio: 'Visionary entrepreneur and digital marketing strategist. Founded LaunchNova with a mission to help creators, authors, and professionals turn their dreams into reality. Leads the team with passion and a results-driven approach.', featured: true },
    { name: 'Matthew Ademola', role: 'Head of Book Marketing', image: '/images/team-matthew.jpg', bio: 'Published author and former publishing house marketing director. Has helped 500+ authors achieve bestseller status. Book marketing is his passion and expertise.', featured: false },
    { name: 'Ashaolu Bukola', role: 'Lead Resume Writer', image: '/images/team-bukola.jpg', bio: 'Certified professional resume writer with 15+ years in HR and career coaching. Has reviewed 50,000+ resumes and knows exactly what hiring managers want to see.', featured: false },
    { name: 'Peace Olulakin', role: 'Creative Director', image: '/images/team-peace.jpg', bio: 'Award-winning creative who has produced campaign videos with millions of views. Leads our creative team in crafting compelling visual stories that convert.', featured: false },
  ]

  const benefits = [
    'Remote-first culture',
    'Competitive salary + bonuses',
    'Professional development budget',
    'Flexible PTO',
    'Equity options',
  ]

  const openings = [
    { title: 'Senior Crowdfunding Strategist', type: 'Remote', schedule: 'Full-time' },
    { title: 'Book Marketing Specialist', type: 'Remote', schedule: 'Full-time' },
    { title: 'Executive Resume Writer', type: 'Remote', schedule: 'Contract' },
    { title: 'Content Marketing Manager', type: 'Remote', schedule: 'Full-time' },
  ]

  const milestones = [
    { year: '2018', title: 'Founded', desc: 'LaunchNova started with a simple mission' },
    { year: '2019', title: 'First $1M', desc: 'Raised our first million for clients' },
    { year: '2020', title: 'Team Growth', desc: 'Expanded to 20+ team members' },
    { year: '2021', title: '3 Services', desc: 'Added Resume Writing to our offerings' },
    { year: '2022', title: 'Global Reach', desc: 'Serving clients in 15+ countries' },
    { year: '2023', title: '$50M Milestone', desc: 'Total funds raised for clients' },
  ]

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-navy-900 pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-[10%] w-3 h-3 rounded-full bg-gold-500/30 animate-pulse" />
        <div className="absolute top-40 right-[25%] w-2 h-2 rounded-full bg-gold-400/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-20 right-[15%] w-2.5 h-2.5 rounded-full bg-gold-300/25 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-[5%] w-32 h-32 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-[5%] w-40 h-40 rounded-full bg-gold-500/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <span className="section-label text-gold-400 mb-4 block">ABOUT US</span>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-cream-50 mb-4">
            Our Story
          </h1>
          <p className="text-lg text-cream-100 max-w-xl mx-auto">
            We believe everyone deserves a launchpad for their dreams
          </p>
        </div>
      </section>

      {/* CEO Spotlight Section */}
      <section className="bg-navy-800 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* CEO Image */}
            <SectionReveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-gold-500/10 rounded-3xl blur-xl" />
                <div className="relative">
                  <img
                    src="/images/ceo-atolagbe.png"
                    alt="Atolagbe Abdulazeez - CEO & Founder"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover aspect-[3/4]"
                  />
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 lg:right-8 bg-gold-500 rounded-xl px-5 py-3 shadow-lg">
                    <p className="font-heading font-bold text-navy-900 text-lg">8+ Years</p>
                    <p className="text-navy-800 text-xs">Industry Experience</p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* CEO Info */}
            <SectionReveal>
              <span className="section-label text-gold-400 mb-4 block">MEET THE FOUNDER</span>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-cream-50 mb-2">
                Atolagbe Abdulazeez
              </h2>
              <p className="text-gold-400 font-medium mb-6">CEO & Founder, LaunchNova</p>
              <div className="space-y-4 text-cream-100 leading-relaxed">
                <p>
                  I founded LaunchNova because I believe every great idea deserves a great launch. 
                  After years in the digital marketing industry, I saw too many brilliant creators, 
                  talented authors, and ambitious professionals struggle to get their work noticed.
                </p>
                <p>
                  Our mission is simple: to be the launchpad that turns dreams into reality. Whether 
                  you're crowdfunding a groundbreaking product, marketing a book that needs readers, 
                  or crafting a resume that opens doors — we're here to make it happen.
                </p>
                <p>
                  With over $50 million raised for crowdfunding clients, 500+ books launched, and 
                  10,000+ resumes delivered, LaunchNova has become the trusted partner for creators 
                  worldwide. And we're just getting started.
                </p>
              </div>
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-gold-500" />
                  <span className="text-cream-50 font-medium">Visionary Leader</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-gold-500" />
                  <span className="text-cream-50 font-medium">Results-Driven</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-gold-500" />
                  <span className="text-cream-50 font-medium">Global Reach</span>
                </div>
              </div>
              {/* Quote */}
              <div className="mt-8 bg-navy-700/50 border-l-4 border-gold-500 rounded-r-xl p-6">
                <Quote className="w-6 h-6 text-gold-500 mb-2" />
                <p className="text-cream-50 italic text-lg leading-relaxed">
                  "Your success is our success. Every launch we manage is a step toward building 
                  a world where great ideas never go unnoticed."
                </p>
                <p className="text-gold-400 mt-3 font-medium">— Atolagbe Abdulazeez</p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SectionReveal>
              <span className="section-label text-slate mb-4 block">OUR MISSION</span>
              <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-charcoal mb-6">
                Empowering Dreams, One Launch at a Time
              </h2>
              <p className="text-lg text-charcoal mb-4 leading-relaxed">
                LaunchNova was founded on a simple belief: great ideas deserve great launches. Whether you're an inventor with a groundbreaking product, an author with a story to tell, or a professional ready for the next step — we're here to make your launch extraordinary.
              </p>
              <p className="text-slate">
                We've built a team of specialists who are passionate about what they do. Our crowdfunding experts have raised millions, our book marketers have created bestsellers, and our resume writers have opened doors to dream careers.
              </p>
              {/* Decorative stats */}
              <div className="flex gap-8 mt-8 pt-8 border-t border-cream-200">
                <div>
                  <p className="font-heading font-bold text-3xl text-gold-500">$50M+</p>
                  <p className="text-sm text-slate">Funds Raised</p>
                </div>
                <div>
                  <p className="font-heading font-bold text-3xl text-gold-500">500+</p>
                  <p className="text-sm text-slate">Books Launched</p>
                </div>
                <div>
                  <p className="font-heading font-bold text-3xl text-gold-500">10K+</p>
                  <p className="text-sm text-slate">Resumes Delivered</p>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal>
              <div className="bg-navy-800 rounded-2xl p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl" />
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-400 mb-4 block">OUR VISION</span>
                <p className="font-heading font-semibold text-xl lg:text-2xl text-cream-50 leading-relaxed">
                  To be the world's most trusted launch partner for creators, authors, and professionals.
                </p>
                <div className="w-16 h-0.5 bg-gold-500 my-6" />
                <p className="text-cream-100">
                  By 2028, we aim to help 10,000 creators successfully launch their projects, establish 1,000 bestselling authors, and accelerate 50,000 careers.
                </p>
                {/* Decorative icon row */}
                <div className="flex gap-4 mt-8">
                  <div className="w-12 h-12 rounded-xl bg-navy-700 flex items-center justify-center text-gold-500">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-navy-700 flex items-center justify-center text-gold-500">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-navy-700 flex items-center justify-center text-gold-500">
                    <Globe className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="bg-navy-900 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-navy-800" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <SectionReveal className="text-center mb-16">
            <span className="section-label text-gold-400 mb-4 block">OUR JOURNEY</span>
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-cream-50">
              Milestones That Matter
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {milestones.map((m, i) => (
              <SectionReveal key={m.year} className={`stagger-${(i % 6) + 1}`}>
                <div className="text-center group">
                  <div className="w-14 h-14 rounded-full bg-navy-800 border-2 border-gold-500/40 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all">
                    <span className="font-heading font-bold text-sm text-gold-500 group-hover:text-navy-900 transition-colors">{m.year}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-cream-50 text-sm mb-1">{m.title}</h3>
                  <p className="text-cream-100/60 text-xs">{m.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-800 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <SectionReveal className="text-center mb-16">
            <span className="section-label text-gold-400 mb-4 block">WHAT DRIVES US</span>
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-cream-50">
              Our Core Values
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, i) => (
              <SectionReveal key={value.title} className={`stagger-${i + 1}`}>
                <div className="bg-navy-700 rounded-2xl p-8 h-full hover:-translate-y-1 transition-transform">
                  <div className="text-gold-500 mb-4">{value.icon}</div>
                  <h3 className="font-heading font-semibold text-xl text-cream-50 mb-3">{value.title}</h3>
                  <p className="text-cream-100 text-sm leading-relaxed">{value.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal className="text-center mb-16">
            <span className="section-label text-slate mb-4 block">THE PEOPLE BEHIND THE LAUNCHES</span>
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-charcoal">
              Meet Our Team
            </h2>
          </SectionReveal>

          {/* Featured CEO */}
          <SectionReveal className="mb-12">
            <div className="bg-navy-800 rounded-2xl overflow-hidden shadow-lg max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative">
                  <img
                    src="/images/ceo-atolagbe.png"
                    alt="Atolagbe Abdulazeez"
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">Founder</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="font-heading font-bold text-2xl text-cream-50">Atolagbe Abdulazeez</h3>
                  <p className="text-gold-400 font-medium mb-4">CEO & Founder</p>
                  <p className="text-cream-100 text-sm leading-relaxed mb-6">
                    Visionary entrepreneur and digital marketing strategist who founded LaunchNova 
                    to help creators, authors, and professionals turn their dreams into reality.
                  </p>
                  <div className="flex gap-3">
                    <div className="bg-navy-700 rounded-lg px-3 py-2 text-center">
                      <p className="font-heading font-bold text-gold-500 text-lg">$50M+</p>
                      <p className="text-cream-100/60 text-[10px]">Raised</p>
                    </div>
                    <div className="bg-navy-700 rounded-lg px-3 py-2 text-center">
                      <p className="font-heading font-bold text-gold-500 text-lg">500+</p>
                      <p className="text-cream-100/60 text-[10px]">Books</p>
                    </div>
                    <div className="bg-navy-700 rounded-lg px-3 py-2 text-center">
                      <p className="font-heading font-bold text-gold-500 text-lg">10K+</p>
                      <p className="text-cream-100/60 text-[10px]">Resumes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Other Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {team.filter(t => !t.featured).map((member, i) => (
              <SectionReveal key={member.name} className={`stagger-${i + 1}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-charcoal">{member.name}</h3>
                    <p className="text-xs font-semibold text-gold-500 uppercase tracking-wider mb-2">{member.role}</p>
                    <p className="text-sm text-slate leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="bg-gold-500 py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-navy-900/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-navy-900/5 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <SectionReveal>
              <span className="font-heading font-bold text-5xl text-navy-900 block">2018</span>
              <p className="text-navy-800 font-medium mt-2">Founded</p>
            </SectionReveal>
            <SectionReveal className="stagger-1">
              <span className="font-heading font-bold text-5xl text-navy-900 block">50+</span>
              <p className="text-navy-800 font-medium mt-2">Team Members</p>
            </SectionReveal>
            <SectionReveal className="stagger-2">
              <span className="font-heading font-bold text-5xl text-navy-900 block">3</span>
              <p className="text-navy-800 font-medium mt-2">Core Services</p>
            </SectionReveal>
            <SectionReveal className="stagger-3">
              <span className="font-heading font-bold text-5xl text-navy-900 block">15+</span>
              <p className="text-navy-800 font-medium mt-2">Countries Served</p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="bg-navy-900 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <SectionReveal>
                <span className="section-label text-gold-400 mb-4 block">CAREERS</span>
                <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-cream-50 mb-6">
                  Want to Join LaunchNova?
                </h2>
                <p className="text-lg text-cream-100 mb-8 leading-relaxed">
                  We're always looking for talented people who are passionate about helping others succeed. If you're a strategist, creative, writer, or marketer who wants to make a real impact — we want to hear from you.
                </p>
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-cream-100">
                      <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center gap-2 text-gold-500 font-semibold hover:gap-3 transition-all">
                  View Open Positions <ArrowRight className="w-4 h-4" />
                </Link>
              </SectionReveal>
            </div>
            <div className="lg:col-span-2">
              <SectionReveal>
                <div className="bg-navy-800 rounded-2xl p-6 lg:p-8">
                  <h3 className="font-heading font-semibold text-lg text-cream-50 mb-6">Current Openings</h3>
                  <div className="space-y-4">
                    {openings.map((job, i) => (
                      <div key={i} className="flex items-start justify-between pb-4 border-b border-navy-700 last:border-0 last:pb-0">
                        <div>
                          <p className="font-heading font-medium text-cream-50">{job.title}</p>
                          <p className="text-sm text-cream-100">{job.type} · {job.schedule}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gold-500 flex-shrink-0 mt-1" />
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-500 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-navy-900 mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-navy-800 mb-8">
              Let's discuss how LaunchNova can help you achieve your goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-900 text-gold-500 font-semibold rounded-full hover:bg-navy-800 transition-colors"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
