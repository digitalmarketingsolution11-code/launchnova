import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import CookieConsent from './CookieConsent'
import BackToTop from './BackToTop'
import ExitIntent from './ExitIntent'
import Newsletter from './Newsletter'

export default function Layout() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <main>
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <CookieConsent />
      <ExitIntent />
    </div>
  )
}
