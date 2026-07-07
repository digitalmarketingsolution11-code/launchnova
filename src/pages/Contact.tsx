import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Share2, Twitter, Instagram, Linkedin, Facebook, ArrowRight, Send, CheckCircle } from 'lucide-react'

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', service: '', budget: '', message: '' })
    }, 3000)
  }

  const faqs = [
    { question: 'How quickly can you start?', answer: 'We can typically begin work within 3-5 business days of project confirmation. Rush projects can sometimes be accommodated — just ask!' },
    { question: 'Do you offer payment plans?', answer: 'Yes! We offer flexible payment plans for all packages. Contact us to discuss a payment schedule that works for your budget.' },
    { question: 'Can I see samples of your work?', answer: "Absolutely. We're happy to share case studies, resume samples, and campaign examples during our initial consultation." },
  ]

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-navy-800 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="section-label text-gold-400 mb-4 block">GET IN TOUCH</span>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-cream-50 mb-4">
            Let's Talk
          </h1>
          <p className="text-lg text-cream-100 max-w-xl mx-auto">
            Have a project in mind? We'd love to hear about it. Reach out and let's discuss how we can help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <SectionReveal>
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm">
                  <h2 className="font-heading font-semibold text-2xl text-charcoal mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-slate mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  {submitted ? (
                    <div className="flex items-center gap-3 py-12 text-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <span className="text-lg text-charcoal font-medium">
                        Message Sent! We'll be in touch soon.
                      </span>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Smith"
                          className="w-full border border-cream-100 rounded-lg px-4 py-3 text-charcoal placeholder-slate/50 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full border border-cream-100 rounded-lg px-4 py-3 text-charcoal placeholder-slate/50 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Service You're Interested In
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full border border-cream-100 rounded-lg px-4 py-3 text-charcoal focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 focus:outline-none transition-colors bg-white"
                        >
                          <option value="">Select a service</option>
                          <option value="crowdfunding">Crowdfunding</option>
                          <option value="book-marketing">Book Marketing</option>
                          <option value="resume-writing">Resume Writing</option>
                          <option value="multiple">Multiple Services</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Estimated Budget (Optional)
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full border border-cream-100 rounded-lg px-4 py-3 text-charcoal focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 focus:outline-none transition-colors bg-white"
                        >
                          <option value="">Select budget range</option>
                          <option value="500">$500 — Starter</option>
                          <option value="1k">$1,000 — Professional</option>
                          <option value="2k">$2,000 — Premium</option>
                          <option value="custom">Custom Budget</option>
                          <option value="not-sure">Not Sure Yet</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Tell Us About Your Project
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="I'm looking to launch a Kickstarter campaign for my new product..."
                          className="w-full border border-cream-100 rounded-lg px-4 py-3 text-charcoal placeholder-slate/50 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 focus:outline-none transition-colors resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gold-500 text-navy-900 font-semibold py-4 rounded-lg hover:bg-gold-400 transition-colors flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </SectionReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <SectionReveal>
                <div className="bg-white rounded-xl p-6">
                  <Mail className="w-8 h-8 text-gold-500 mb-3" />
                  <h3 className="font-heading font-semibold text-charcoal mb-1">Email Us</h3>
                  <a href="mailto:support@LaunchNova.online" className="text-gold-500 hover:text-gold-400 transition-colors">
                    support@LaunchNova.online
                  </a>
                  <p className="text-sm text-slate mt-1">We typically respond within 24 hours</p>
                </div>
              </SectionReveal>

              <SectionReveal className="stagger-1">
                <a
                  href="https://wa.me/2348021458021?text=Hi%20LaunchNova!%20I'm%20interested%20in%20your%20services%20and%20would%20like%20to%20learn%20more."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-6 hover:shadow-md transition-shadow group"
                >
                  <div className="w-8 h-8 bg-[#25D366] rounded-lg flex items-center justify-center mb-3">
                    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-charcoal mb-1 group-hover:text-[#25D366] transition-colors">WhatsApp</h3>
                  <p className="text-gold-500 group-hover:text-[#25D366] transition-colors">Chat with us</p>
                  <p className="text-sm text-slate mt-1">Instant replies, 24/7</p>
                </a>
              </SectionReveal>

              <SectionReveal className="stagger-3">
                <div className="bg-white rounded-xl p-6">
                  <MapPin className="w-8 h-8 text-gold-500 mb-3" />
                  <h3 className="font-heading font-semibold text-charcoal mb-1">Location</h3>
                  <p className="text-slate">Remote — We Work Worldwide</p>
                  <p className="text-sm text-slate mt-1">Serving clients in 15+ countries</p>
                </div>
              </SectionReveal>

              <SectionReveal className="stagger-4">
                <div className="bg-white rounded-xl p-6">
                  <Share2 className="w-8 h-8 text-gold-500 mb-3" />
                  <h3 className="font-heading font-semibold text-charcoal mb-3">Follow Us</h3>
                  <div className="flex items-center gap-4">
                    <a href="#" className="text-slate hover:text-gold-500 transition-colors" aria-label="Twitter">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/abdulazeezexpert" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-gold-500 transition-colors" aria-label="Instagram">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-slate hover:text-gold-500 transition-colors" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61582067811069" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-gold-500 transition-colors" aria-label="Facebook">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://wa.me/15028123654"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-[#25D366] transition-colors"
                      aria-label="WhatsApp"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-sm text-slate mt-3">Stay updated with our latest launches</p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-navy-800 h-80 lg:h-96 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        <div className="text-center relative z-10">
          <MapPin className="w-8 h-8 text-gold-500 mx-auto mb-4" />
          <h3 className="font-heading font-semibold text-2xl text-cream-50 mb-2">We Work Worldwide</h3>
          <p className="text-cream-100">Remote-first agency serving clients across the globe</p>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <SectionReveal className="text-center mb-12">
            <h2 className="font-heading font-semibold text-3xl text-cream-50 mb-4">
              Quick Answers
            </h2>
            <p className="text-cream-100">
              Common questions that might help you right away
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, i) => (
              <SectionReveal key={i} className={`stagger-${i + 1}`}>
                <div className="bg-navy-800 rounded-xl p-6 h-full">
                  <h3 className="font-heading font-semibold text-cream-50 mb-3">{faq.question}</h3>
                  <p className="text-sm text-cream-100 mb-4">{faq.answer}</p>
                  <Link to="/services/crowdfunding" className="text-sm text-gold-500 hover:underline inline-flex items-center gap-1">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-500 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <h2 className="font-heading font-semibold text-3xl text-navy-900 mb-4">
              Prefer to Schedule a Call?
            </h2>
            <p className="text-lg text-navy-800 mb-8">
              Book a free 30-minute consultation at a time that works for you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-900 text-gold-500 font-semibold rounded-full hover:bg-navy-800 transition-colors"
            >
              Book a Free Call <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}
