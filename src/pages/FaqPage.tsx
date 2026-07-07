import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react'

const allFaqs = [
  { category: 'General', question: 'What services does LaunchNova offer?', answer: 'LaunchNova offers six core services: Crowdfunding campaign management, Book Marketing, Resume Writing, Music Promotion, Translation Services, and Genealogy Research. Each service is designed to help creators, professionals, and businesses achieve their goals.' },
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
  { category: 'Genealogy', question: 'How far back can you trace my family?', answer: 'Most families can be traced 5-7 generations. For families with African or Caribbean roots, we typically trace back to the mid-1800s.' },
  { category: 'Genealogy', question: 'Do I need a DNA test?', answer: 'A DNA test is helpful but not required. We can build your family tree using historical records alone. However, DNA testing can confirm connections and reveal ethnic origins.' },
]

const categories = ['All', 'General', 'Crowdfunding', 'Book Marketing', 'Resume Writing', 'Music Promotion', 'Translation', 'Genealogy']

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filteredFaqs = activeCategory === 'All' ? allFaqs : allFaqs.filter(f => f.category === activeCategory)

  return (
    <>
      <section className="bg-navy-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <HelpCircle className="w-8 h-8 text-gold-500 mx-auto mb-4" />
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-cream-50 mb-4">Frequently Asked Questions</h1>
          <p className="text-cream-100 max-w-xl mx-auto">Find answers to common questions about our services, process, and policies.</p>
        </div>
      </section>

      <section className="bg-cream-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(null) }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-navy-900 text-gold-500'
                    : 'bg-white text-slate hover:bg-navy-800 hover:text-cream-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-0">
            {filteredFaqs.map((faq, i) => (
              <div key={i} className="border-b border-cream-200">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <div className="pr-4">
                    <span className="text-xs font-semibold text-gold-500 uppercase tracking-wider">{faq.category}</span>
                    <p className="font-heading font-semibold text-lg text-charcoal mt-0.5 group-hover:text-navy-800 transition-colors">{faq.question}</p>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === i && (
                  <p className="pb-5 text-slate leading-relaxed">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 bg-navy-800 rounded-2xl p-8 text-center">
            <h3 className="font-heading font-semibold text-xl text-cream-50 mb-2">Still have questions?</h3>
            <p className="text-cream-100 mb-6">Our team is happy to help. Reach out and we will get back to you within 24 hours.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold-500 text-navy-900 font-semibold rounded-full hover:bg-gold-400 transition-colors">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
