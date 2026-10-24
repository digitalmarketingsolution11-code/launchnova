import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react'

const allFaqs = [
  { category: 'General', question: 'What services does LaunchNova offer?', answer: 'LaunchNova offers five core services: Crowdfunding campaign management, Book Marketing, Resume Writing, Music Promotion, and Translation Services. Each service is designed to help creators, professionals, and businesses achieve their goals.' },
  { category: 'General', question: 'How do I get started with LaunchNova?', answer: 'Simply click the "Get Started" button or visit our Contact page. Fill out the form with your project details, and our team will reach out within 24 hours to schedule a free consultation.' },
  { category: 'General', question: 'Do you offer payment plans?', answer: 'Yes! We offer flexible payment plans for all packages. Contact us to discuss a payment schedule that works for your budget.' },
  { category: 'General', question: 'What is your refund policy?', answer: 'We offer a satisfaction guarantee on all services. If you are not satisfied with the initial deliverables, we will revise them at no extra cost. Specific refund terms are outlined in each service agreement.' },
  { category: 'Crowdfunding', question: 'What is your crowdfunding success rate?', answer: 'We maintain a 94% success rate for campaigns we fully manage, compared to the industry average of 38%. Our clients raise an average of 340% of their funding goal.' },
  { category: 'Crowdfunding', question: 'Which platforms do you work with?', answer: 'We specialize in Kickstarter, Indiegogo, GoFundMe, and Wefunder. Our team understands the nuances of each platform and can recommend the best fit for your project.' },
  { category: 'Book Marketing', question: 'Do you work with self-published authors?', answer: 'Absolutely! About 70% of our book marketing clients are indie or self-published authors. Our strategies work regardless of your publishing path.' },
  { category: 'Book Marketing', question: 'Can you guarantee bestseller status?', answer: 'While we cannot guarantee specific rankings, our clients achieve bestseller status 87% of the time when following our full Bestseller Campaign package.' },
  { category: 'Resume Writing', question: 'What is your interview guarantee?', answer: 'If you do not receive an interview request within 60 days (90 days for Executive) of using your new resume, we will rewrite it for free.' },
  { category: 'Resume Writing', question: 'Do you cover my industry?', answer: 'Our writers cover 65+ industries including tech, healthcare, finance, marketing, legal, and more. We will match you with a writer who understands your field.' },
  { category: 'Music Promotion', question: 'What genres do you work with?', answer: 'We work with all genres — Afrobeats, Hip Hop, R&B, Pop, EDM, Gospel, Jazz, and more. Our team matches your music with curators who specialize in your sound.' },
  { category: 'Music Promotion', question: 'Do you guarantee playlist placements?', answer: 'While we cannot guarantee specific playlists, our pitching strategy achieves an average 60% placement rate. We pitch to curators who actively seek music in your genre.' },
  { category: 'Translation', question: 'What languages do you support?', answer: 'We support 50+ languages including major world languages (English, Spanish, French, German, Chinese, Japanese, Arabic, Portuguese, Russian, Hindi) and many regional languages.' },
  { category: 'Translation', question: 'Do you offer certified translations?', answer: 'Yes, we provide certified and notarized translations accepted by USCIS, universities, courts, and government agencies worldwide.' },
]

const categories = ['All', 'General', 'Crowdfunding', 'Book Marketing', 'Resume Writing', 'Music Promotion', 'Translation']

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filteredFaqs = activeCategory === 'All' ? allFaqs : allFaqs.filter(f => f.category === activeCategory)

  return (
    <>
      <section className="bg-navy-800 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <HelpCircle className="w-10 h-10 text-gold-500 mx-auto mb-4" />
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-cream-50 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-cream-100 max-w-2xl mx-auto">Everything you need to know about LaunchNova services. Can't find your answer? <Link to="/contact" className="text-gold-400 hover:underline">Contact us</Link>.</p>
        </div>
      </section>

      <section className="bg-navy-900 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-gold-500 text-navy-900' : 'bg-navy-800 text-cream-100 hover:bg-navy-700'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, i) => (
              <div key={i} className="bg-navy-800 rounded-xl overflow-hidden">
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left hover:bg-navy-700/50 transition-colors">
                  <div>
                    <span className="text-xs text-gold-500 uppercase tracking-wider">{faq.category}</span>
                    <h3 className="font-heading font-semibold text-cream-50 mt-1">{faq.question}</h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gold-500 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-6">
                    <p className="text-cream-100 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gold-500 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-heading font-semibold text-3xl text-navy-900 mb-4">Still Have Questions?</h2>
          <p className="text-navy-800 mb-8 max-w-xl mx-auto">Our team is here to help. Reach out and we'll get back to you within 24 hours.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-900 text-gold-500 font-semibold rounded-full hover:bg-navy-800 transition-colors">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
