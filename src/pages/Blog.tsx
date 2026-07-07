import { useEffect, useRef } from 'react'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'

function SectionReveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { entry.target.classList.add('animate-fade-in-up'); observer.unobserve(entry.target) } },
      { threshold: 0.1 }
    )
    if (ref.current) { ref.current.style.opacity = '0'; observer.observe(ref.current) }
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={className}>{children}</div>
}

const blogPosts = [
  { title: 'How to Launch a Successful Kickstarter Campaign in 2026', excerpt: 'Learn the proven strategies that helped our clients raise over $50 million on crowdfunding platforms. From pre-launch to post-campaign, we cover everything.', category: 'Crowdfunding', date: 'Jun 15, 2026', readTime: '8 min', author: 'Atolagbe Abdulazeez', image: '/images/portfolio-cf-1.jpg' },
  { title: 'The Ultimate Guide to Marketing Your Self-Published Book', excerpt: 'From Amazon optimization to BookBub featured deals, discover the tactics that turn unknown authors into bestselling writers.', category: 'Book Marketing', date: 'Jun 10, 2026', readTime: '10 min', author: 'Matthew Ademola', image: '/images/book-marketing-visual.jpg' },
  { title: 'Resume Writing Secrets That Get You Hired in 2026', excerpt: 'ATS systems filter out 75% of resumes before a human sees them. Learn how to write a resume that passes the bots and impresses hiring managers.', category: 'Resume Writing', date: 'Jun 5, 2026', readTime: '6 min', author: 'Ashaolu Bukola', image: '/images/resume-visual.jpg' },
  { title: 'How to Get Your Music on Spotify Editorial Playlists', excerpt: 'Playlist placement can make or break a music career. Here is how we helped artists go from 1,000 to 500,000 monthly listeners.', category: 'Music Promotion', date: 'May 28, 2026', readTime: '7 min', author: 'Peace Olulakin', image: '/images/music-promo-visual.jpg' },
  { title: 'Website Localization: Why Translation Alone Is Not Enough', excerpt: 'Going global requires more than word-for-word translation. Learn about cultural adaptation, SEO, and UX considerations for international markets.', category: 'Translation', date: 'May 20, 2026', readTime: '9 min', author: 'Atolagbe Abdulazeez', image: '/images/translation-visual.jpg' },
  { title: 'Tracing Your African Roots: A Complete Guide to Genealogy', excerpt: 'Using DNA tests, oral histories, and archival records to reconnect with your African heritage. A step-by-step guide for beginners.', category: 'Genealogy', date: 'May 12, 2026', readTime: '12 min', author: 'Atolagbe Abdulazeez', image: '/images/genealogy-visual.jpg' },
]

export default function Blog() {
  return (
    <>
      <section className="bg-navy-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-cream-50 mb-4">LaunchNova Blog</h1>
          <p className="text-cream-100 max-w-xl mx-auto">Expert insights, strategies, and tips to help you succeed.</p>
        </div>
      </section>

      <section className="bg-cream-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Featured Post */}
          <SectionReveal className="mb-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-2">
              <img src={blogPosts[0].image} alt={blogPosts[0].title} className="w-full h-64 md:h-full object-cover" />
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-xs font-semibold text-gold-500 uppercase tracking-wider">{blogPosts[0].category}</span>
                <h2 className="font-heading font-bold text-2xl text-charcoal mt-2 mb-3">{blogPosts[0].title}</h2>
                <p className="text-slate mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-slate mb-6">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" />{blogPosts[0].author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{blogPosts[0].date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{blogPosts[0].readTime}</span>
                </div>
                <button className="inline-flex items-center gap-2 text-gold-500 font-semibold text-sm self-start">
                  Read Article <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </SectionReveal>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, i) => (
              <SectionReveal key={i} className={`stagger-${(i % 3) + 1}`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-semibold text-gold-500 uppercase tracking-wider">{post.category}</span>
                    <h3 className="font-heading font-semibold text-lg text-charcoal mt-2 mb-3">{post.title}</h3>
                    <p className="text-sm text-slate mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-slate pt-4 border-t border-cream-100">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
