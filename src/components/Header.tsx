import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Rocket, ChevronDown } from 'lucide-react'

const serviceLinks = [
  { label: 'Crowdfunding', href: '/services/crowdfunding', desc: 'Launch your campaign' },
  { label: 'Book Marketing', href: '/services/book-marketing', desc: 'Promote your book' },
  { label: 'Resume Writing', href: '/services/resume-writing', desc: 'Advance your career' },
  { label: 'Music Promotion', href: '/services/music-promotion', desc: 'Get your music heard' },
  { label: 'Translation', href: '/services/translation', desc: 'Go global' },
  { label: 'Genealogy', href: '/services/genealogy', desc: 'Discover your roots' },
]

const navLinks = [
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isServicePage = location.pathname.startsWith('/services/')
  const currentService = serviceLinks.find(s => s.href === location.pathname)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-navy-900/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
              <Rocket className="w-5 h-5 md:w-6 md:h-6 text-gold-500 transition-transform group-hover:scale-110" />
              <span className="font-heading font-bold text-lg md:text-xl text-cream-50 group-hover:text-gold-400 transition-colors">
                LaunchNova
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`text-sm font-medium transition-colors relative group flex items-center gap-1 py-2 ${
                    isServicePage ? 'text-gold-400' : 'text-cream-50 hover:text-gold-400'
                  }`}
                >
                  {currentService ? currentService.label : 'Services'}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gold-500" />
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-navy-800 border border-navy-700 rounded-xl shadow-2xl overflow-hidden py-2">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className={`flex flex-col px-4 py-3 transition-colors ${
                          location.pathname === service.href
                            ? 'bg-navy-700 text-gold-400'
                            : 'text-cream-50 hover:bg-navy-700 hover:text-gold-400'
                        }`}
                      >
                        <span className="text-sm font-semibold">{service.label}</span>
                        <span className="text-xs text-cream-100/70">{service.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors relative group py-2 ${
                    location.pathname === link.href ? 'text-gold-400' : 'text-cream-50 hover:text-gold-400'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-gold-500 transition-all ${
                    location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-gold-500 text-navy-900 text-sm font-semibold rounded-full hover:bg-gold-400 transition-colors"
              >
                Get Started
              </Link>
            </nav>

            {/* Mobile: Get Started + Hamburger */}
            <div className="flex md:hidden items-center gap-3">
              <Link
                to="/contact"
                className="px-4 py-2 bg-gold-500 text-navy-900 text-xs font-semibold rounded-full hover:bg-gold-400 transition-colors"
              >
                Get Started
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-cream-50 p-2 -mr-2"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-navy-900/90 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />
        
        {/* Menu Content */}
        <div 
          className={`absolute top-16 left-0 right-0 bottom-0 bg-navy-900 transition-transform duration-300 ${
            mobileOpen ? 'translate-y-0' : '-translate-y-8'
          }`}
        >
          <div className="flex flex-col px-6 py-8 gap-1 overflow-y-auto h-full">
            {/* Services Section */}
            <div className="mb-2">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full flex items-center justify-between py-3.5 border-b border-navy-800 ${
                  isServicePage ? 'text-gold-400' : 'text-cream-50'
                }`}
              >
                <span className="text-lg font-heading font-semibold">Services</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileServicesOpen && (
                <div className="pl-4 py-2 space-y-1">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className={`block py-3 px-3 rounded-lg ${
                        location.pathname === service.href 
                          ? 'bg-navy-800 text-gold-400' 
                          : 'text-cream-100'
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="font-medium">{service.label}</span>
                      <span className="block text-xs text-cream-100/50 mt-0.5">{service.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`py-3.5 border-b border-navy-800 text-lg font-heading font-semibold ${
                  location.pathname === link.href ? 'text-gold-400' : 'text-cream-50'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Contact CTA at bottom */}
            <div className="mt-auto pt-8 pb-12">
              <p className="text-cream-100/60 text-sm mb-4">Ready to launch your success story?</p>
              <Link
                to="/contact"
                className="block w-full py-4 bg-gold-500 text-navy-900 text-center font-semibold rounded-full hover:bg-gold-400 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
              <a 
                href="mailto:support@LaunchNova.online" 
                className="block text-center mt-4 text-gold-400 text-sm"
              >
                support@LaunchNova.online
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
