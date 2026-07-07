import { Link } from 'react-router-dom'
import { Rocket, Facebook, Instagram, Linkedin, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Rocket className="w-5 h-5 text-gold-500" />
              <span className="font-heading font-bold text-2xl text-cream-50">
                LaunchNova
              </span>
            </Link>
            <p className="text-sm text-slate mb-6">
              Turning dreams into launch-ready reality. We help creators, authors, and professionals achieve their goals.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=61582067811069" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-gold-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/abdulazeezexpert" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate hover:text-gold-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://wa.me/2348021458021" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-[#25D366] transition-colors" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-cream-50 mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/crowdfunding" className="text-sm text-slate hover:text-gold-400 transition-colors">
                  Crowdfunding
                </Link>
              </li>
              <li>
                <Link to="/services/book-marketing" className="text-sm text-slate hover:text-gold-400 transition-colors">
                  Book Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/resume-writing" className="text-sm text-slate hover:text-gold-400 transition-colors">
                  Resume Writing
                </Link>
              </li>
              <li>
                <Link to="/services/music-promotion" className="text-sm text-slate hover:text-gold-400 transition-colors">
                  Music Promotion
                </Link>
              </li>
              <li>
                <Link to="/services/translation" className="text-sm text-slate hover:text-gold-400 transition-colors">
                  Translation
                </Link>
              </li>
              <li>
                <Link to="/services/genealogy" className="text-sm text-slate hover:text-gold-400 transition-colors">
                  Genealogy
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-slate hover:text-gold-400 transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-cream-50 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-slate hover:text-gold-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm text-slate hover:text-gold-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-slate hover:text-gold-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-slate hover:text-gold-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-slate hover:text-gold-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-slate hover:text-gold-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-cream-50 mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-500" />
                <a href="mailto:support@LaunchNova.online" className="text-sm text-gold-400 hover:text-gold-300 transition-colors">
                  support@LaunchNova.online
                </a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate mt-0.5" />
                <span className="text-sm text-slate">Remote — We Work Worldwide</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate">
              &copy; 2026 LaunchNova. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-xs text-slate hover:text-gold-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-xs text-slate hover:text-gold-400 transition-colors">Terms of Service</Link>
              <Link to="/faq" className="text-xs text-slate hover:text-gold-400 transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
