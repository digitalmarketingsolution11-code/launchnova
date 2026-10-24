import { useParams, Link } from 'react-router-dom'
import {
  Target,
  Video,
  Megaphone,
  TrendingUp,
  Newspaper,
  Package,
  ArrowRight,
  CheckCircle,
  Star,
  Calendar,
  Search,
  Share2,
  Mail,
  Edit3,
  Briefcase,
  ArrowRightLeft,
  User,
  FileCheck,
  FileText,
  Music,
  Headphones,
  Mic,
  Radio,
  Play,
  Globe,
  MessageCircle,
  BookOpen,
  Users,
  Send,
  Coins,
  Shield,
  Smartphone,
  Lock,
} from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

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

const servicesData: Record<string, {
  title: string
  tagline: string
  bgColor: string
  textColor: string
  labelColor: string
  image: string
  overview: { headline: string; body: string; secondary: string; stats: { number: string; label: string }[] }
  features: { icon: React.ReactNode; title: string; description: string }[]
  platforms?: { name: string; description: string; metric: string }[]
  caseStudies: { category: string; title: string; author?: string; stats: { number: string; label: string }[]; quote: string; quotee: string; image: string }[]
  faq: { question: string; answer: string }[]
  portfolio: { image: string; title: string; category: string; description: string; metrics: { label: string; value: string }[] }[]
}> = {
  crowdfunding: {
    title: 'Crowdfunding',
    tagline: 'Turn your innovative idea into a fully funded reality',
    bgColor: 'bg-navy-800',
    textColor: 'text-cream-50',
    labelColor: 'text-gold-400',
    image: '/images/crowdfunding-visual.jpg',
    overview: {
      headline: 'Why Crowdfunding Matters',
      body: "Crowdfunding isn't just about raising money — it's about validating your idea, building a community, and launching with momentum. The right strategy can mean the difference between a campaign that fizzles and one that soars past its goal.",
      secondary: "At LaunchNova, we've helped creators raise over $50 million across Kickstarter, Indiegogo, and other platforms. We know what works.",
      stats: [
        { number: '94%', label: 'Success Rate' },
        { number: '340%', label: 'Avg. of Goal' },
        { number: '$50M+', label: 'Total Raised' },
      ],
    },
    features: [
      { icon: <Target className="w-12 h-12" />, title: 'Campaign Strategy', description: 'We develop a comprehensive strategy tailored to your product, audience, and funding goals. From timeline planning to reward tier optimization, every detail is calculated for maximum impact.' },
      { icon: <Video className="w-12 h-12" />, title: 'Creative Production', description: "High-quality campaign videos, stunning imagery, and compelling copy that captures attention and converts viewers into backers. Our creative team knows what makes people click 'pledge.'" },
      { icon: <Megaphone className="w-12 h-12" />, title: 'Pre-Launch Marketing', description: "Build your audience before you launch. We create landing pages, run targeted ads, and grow your email list to ensure you have a crowd ready to back you on day one." },
      { icon: <TrendingUp className="w-12 h-12" />, title: 'Campaign Management', description: "Day-to-day management of your live campaign including backer communication, reward updates, stretch goal strategy, and real-time optimization to keep momentum building." },
      { icon: <Newspaper className="w-12 h-12" />, title: 'PR & Media Outreach', description: "We pitch your story to journalists, bloggers, and influencers in your niche. Earned media coverage can be the catalyst that takes your campaign viral." },
      { icon: <Package className="w-12 h-12" />, title: 'Post-Campaign Fulfillment', description: "Our support doesn't end when funding closes. We help with backer surveys, fulfillment coordination, and transitioning backers into long-term customers." },
    ],
    platforms: [
      { name: 'Kickstarter', description: "The world's largest creative crowdfunding platform.", metric: '$30M+ Raised' },
      { name: 'Indiegogo', description: 'Flexible funding for tech, innovation, and creative projects.', metric: '$15M+ Raised' },
      { name: 'GoFundMe', description: 'Personal and cause-based crowdfunding campaigns.', metric: '$3M+ Raised' },
      { name: 'Wefunder', description: 'Equity crowdfunding for startups and small businesses.', metric: '$2M+ Raised' },
    ],
    caseStudies: [
      { category: 'TECHNOLOGY', title: 'LumiSmart: The AI Desk Lamp', stats: [{ number: '$485K', label: 'Raised' }, { number: '970%', label: 'of Goal' }, { number: '12,400', label: 'Backers' }], quote: "LaunchNova's pre-launch strategy built us a list of 8,000 eager backers. We hit our goal in 4 hours.", quotee: 'Alex R., Founder', image: '/images/real-client-1.jpg' },
      { category: 'TABLETOP GAMES', title: 'Kingdoms of Aetheria', stats: [{ number: '$1.2M', label: 'Raised' }, { number: '2,400%', label: 'of Goal' }, { number: '28,700', label: 'Backers' }], quote: "The campaign video LaunchNova produced got 2 million views. Our biggest problem was keeping up with demand!", quotee: 'Maya L., Game Designer', image: '/images/real-client-2.jpg' },
    ],
    faq: [
      { question: 'How long does a typical crowdfunding campaign take?', answer: 'From initial strategy to campaign close, most projects run 60-90 days. We recommend 30 days of pre-launch preparation followed by a 30-45 day live campaign.' },
      { question: "What's your success rate?", answer: "We maintain a 94% success rate for campaigns we fully manage, compared to the industry average of 38%. Our clients raise an average of 340% of their goal." },
      { question: 'Do you work with international creators?', answer: "Absolutely! We've managed campaigns for creators in 15+ countries. Our team understands the nuances of different platforms and markets worldwide." },
      { question: "What if we don't reach our funding goal?", answer: "With our pre-launch strategy, we typically have 60-80% of funding committed before launch day. However, we also offer performance-based pricing options to align our incentives with your success." },
      { question: 'Can you help with fulfillment after the campaign?', answer: 'Yes, our Enterprise package includes post-campaign fulfillment support. We help coordinate with manufacturers, manage backer surveys, and ensure smooth delivery.' },
    ],
    portfolio: [
      { image: '/images/portfolio-cf-1.jpg', title: 'EcoSense Air Monitor', category: 'TECHNOLOGY', description: 'A smart indoor air quality monitor that raised 980% of its goal in just 48 hours. Our pre-launch strategy built a waitlist of 12,000 subscribers.', metrics: [{ label: 'Raised', value: '$485K' }, { label: 'Goal', value: '$50K' }, { label: 'Backers', value: '8,400' }] },
      { image: '/images/portfolio-cf-2.jpg', title: 'BrewCraft Pour-Over Kit', category: 'LIFESTYLE', description: 'An artisan coffee brewing system that became a Kickstarter Staff Pick. Our campaign video reached 1.2M views in the first week.', metrics: [{ label: 'Raised', value: '$320K' }, { label: 'Goal', value: '$25K' }, { label: 'Backers', value: '6,200' }] },
      { image: '/images/portfolio-cf-3.jpg', title: 'TypeVault Mechanical Keyboard', category: 'GAMING', description: 'A customizable mechanical keyboard with hot-swappable switches. We secured features on The Verge and Wired that drove massive traffic.', metrics: [{ label: 'Raised', value: '$1.1M' }, { label: 'Goal', value: '$75K' }, { label: 'Backers', value: '14,800' }] },
      { image: '/images/case-lumismart.jpg', title: 'LumiSmart AI Desk Lamp', category: 'TECHNOLOGY', description: 'An AI-powered desk lamp with adaptive lighting. Our PR outreach secured coverage on TechCrunch and CNET, driving pledges past $400K.', metrics: [{ label: 'Raised', value: '$485K' }, { label: 'Goal', value: '$50K' }, { label: 'Backers', value: '12,400' }] },
      { image: '/images/portfolio-cf-4.jpg', title: 'PrintNest Mini 3D Printer', category: 'TECHNOLOGY', description: 'A compact, affordable 3D printer for creators. Our influencer partnerships with YouTube makers generated 3M+ impressions.', metrics: [{ label: 'Raised', value: '$890K' }, { label: 'Goal', value: '$100K' }, { label: 'Backers', value: '9,600' }] },
      { image: '/images/portfolio-cf-5.jpg', title: 'Aurum Wireless Earbuds', category: 'AUDIO', description: 'Premium wireless earbuds with studio-quality sound. We crafted a campaign that positioned them as the AirPods alternative for audiophiles.', metrics: [{ label: 'Raised', value: '$650K' }, { label: 'Goal', value: '$60K' }, { label: 'Backers', value: '11,200' }] },
    ],
  },
  'book-marketing': {
    title: 'Book Marketing',
    tagline: 'Transform your manuscript into a bestselling phenomenon',
    bgColor: 'bg-gold-500',
    textColor: 'text-navy-900',
    labelColor: 'text-navy-900',
    image: '/images/book-marketing-visual.jpg',
    overview: {
      headline: 'Every Book Deserves Readers',
      body: "Writing a book is an incredible achievement. But without strategic marketing, even brilliant books can go unread. Our book marketing services ensure your work finds its audience and achieves the success it deserves.",
      secondary: "From pre-launch buzz to post-launch momentum, we handle every aspect of book promotion so you can focus on what you do best — writing.",
      stats: [
        { number: '500+', label: 'Books Launched' },
        { number: '87%', label: 'Bestseller Rate' },
        { number: '2M+', label: 'Books Sold' },
      ],
    },
    features: [
      { icon: <Calendar className="w-12 h-12" />, title: 'Pre-Launch Strategy', description: "Build anticipation before your book hits the shelves. We create a comprehensive launch timeline including ARC distribution, early reviewer outreach, and strategic pre-orders to maximize your launch day impact." },
      { icon: <Search className="w-12 h-12" />, title: 'Amazon Optimization', description: "Master the world's largest bookstore. We optimize your Amazon listing with keyword-rich descriptions, compelling A+ content, and strategic category selection to maximize discoverability and conversions." },
      { icon: <Star className="w-12 h-12" />, title: 'Book Reviews & PR', description: "Get your book in front of the right reviewers and media outlets. We pitch to book bloggers, literary magazines, podcasts, and mainstream media to generate buzz and credible third-party endorsements." },
      { icon: <Share2 className="w-12 h-12" />, title: 'Social Media Marketing', description: "Build your author brand and engage readers where they spend their time. We create platform-specific content strategies for Instagram, TikTok, Facebook, and Twitter/X that grow your following and drive book sales." },
      { icon: <Target className="w-12 h-12" />, title: 'Paid Advertising', description: "Strategic Amazon Ads, Facebook Ads, and BookBub campaigns that put your book in front of readers who are actively looking for their next read. Every dollar is optimized for maximum ROI." },
      { icon: <Mail className="w-12 h-12" />, title: 'Email Marketing', description: "Build and nurture your reader list with compelling newsletters, launch announcements, and automated sequences that turn casual browsers into loyal fans and repeat buyers." },
    ],
    caseStudies: [
      { category: 'FICTION', title: 'The Last Librarian', author: 'By Elena Vasquez', stats: [{ number: '47,000', label: 'Copies' }, { number: '#1 Amazon', label: 'Bestseller' }, { number: '4.8★', label: 'Rating' }], quote: "I was ready to give up on my novel. LaunchNova not only got it noticed — they made it a bestseller. I'm now a full-time author.", quotee: 'Elena V.', image: '/images/real-client-5.jpg' },
      { category: 'NON-FICTION', title: 'The Mindful Entrepreneur', author: 'By David Chen', stats: [{ number: '82,000', label: 'Copies' }, { number: 'WSJ Bestseller', label: 'Status' }, { number: '4.6★', label: 'Rating' }], quote: "The Amazon optimization alone tripled my daily sales. The PR campaign got me on three podcasts and a Forbes feature.", quotee: 'David C.', image: '/images/real-client-3.jpg' },
    ],
    faq: [
      { question: 'When should I start marketing my book?', answer: 'Ideally, 3-6 months before your launch date. This gives us time to build your audience, secure reviews, and create pre-launch momentum. For backlist titles, we can start immediately.' },
      { question: 'Do you work with self-published authors?', answer: "Absolutely! About 70% of our clients are indie or self-published authors. Our strategies work regardless of your publishing path." },
      { question: 'How do I get started?', answer: 'Simply contact us through the form below or email us directly. We will schedule a free consultation to understand your goals and provide a custom proposal tailored to your needs.' },
      { question: 'How do you measure success?', answer: "We track sales, Amazon ranking, reviews, media mentions, email list growth, and ROI on ad spend. You'll receive regular reports showing exactly how your investment is performing." },
      { question: 'Can you guarantee bestseller status?', answer: "While we can't guarantee specific rankings (no ethical marketer can), our clients achieve bestseller status 87% of the time when following our full Bestseller Campaign." },
    ],
    portfolio: [
      { image: '/images/portfolio-bm-1.jpg', title: 'The Silent Beacon', category: 'FICTION', description: 'A gripping mystery novel that reached #1 in its Amazon category within 14 days of launch. Our targeted Amazon Ads and BookBub campaign drove 15,000 copies sold in the first month.', metrics: [{ label: 'Copies Sold', value: '47K' }, { label: 'Amazon Rank', value: '#1' }, { label: 'Reviews', value: '1,200+' }] },
      { image: '/images/portfolio-bm-2.jpg', title: 'The Innovation Handbook', category: 'NON-FICTION', description: 'A business strategy book that became a Wall Street Journal bestseller. Our PR campaign secured features in Forbes, Inc., and Entrepreneur magazine.', metrics: [{ label: 'Copies Sold', value: '82K' }, { label: 'Bestseller', value: 'WSJ' }, { label: 'Rating', value: '4.6★' }] },
      { image: '/images/portfolio-bm-3.jpg', title: 'The Dawning Within', category: 'SELF-HELP', description: 'A mindfulness guide that built a loyal following through our social media strategy. Instagram BookTok videos reached 2M+ views, driving consistent sales.', metrics: [{ label: 'Copies Sold', value: '35K' }, { label: 'Following', value: '50K+' }, { label: 'Rating', value: '4.8★' }] },
      { image: '/images/portfolio-bm-4.jpg', title: 'Parisian Twilight', category: 'ROMANCE', description: 'A romance novel that dominated the Amazon Top 100 for 6 weeks. Our email marketing sequence to 25,000 subscribers achieved a 40% open rate.', metrics: [{ label: 'Copies Sold', value: '62K' }, { label: 'Newsletter', value: '25K' }, { label: 'Rating', value: '4.7★' }] },
      { image: '/images/portfolio-bm-5.jpg', title: 'Nightfall Chronicles', category: 'THRILLER', description: 'A crime thriller that gained traction through podcast advertising. Our targeted approach on true crime podcasts resulted in a 5x ROAS.', metrics: [{ label: 'Copies Sold', value: '28K' }, { label: 'ROAS', value: '5x' }, { label: 'Rating', value: '4.5★' }] },
      { image: '/images/book-marketing-visual.jpg', title: 'The Mindful Entrepreneur', category: 'BUSINESS', description: 'A leadership book that tripled its daily sales through our Amazon optimization. The PR campaign landed the author on 3 podcasts and a Forbes feature.', metrics: [{ label: 'Copies Sold', value: '82K' }, { label: 'Podcasts', value: '3' }, { label: 'Rating', value: '4.6★' }] },
    ],
  },
  'resume-writing': {
    title: 'Resume Writing',
    tagline: 'Open doors to your dream career with a resume that stands out',
    bgColor: 'bg-navy-700',
    textColor: 'text-cream-50',
    labelColor: 'text-gold-400',
    image: '/images/resume-visual.jpg',
    overview: {
      headline: 'Your Resume Is Your First Impression',
      body: "In today's competitive job market, a generic resume gets lost in the shuffle. ATS systems filter out 75% of applications before a human ever sees them. Our expert resume writers craft documents that pass the bots and impress the hiring managers.",
      secondary: "With over 10,000 resumes delivered and a 92% interview success rate, we know what it takes to get you noticed.",
      stats: [
        { number: '10,000+', label: 'Resumes Delivered' },
        { number: '92%', label: 'Interview Success' },
        { number: '3x', label: 'More Callbacks' },
      ],
    },
    features: [
      { icon: <FileCheck className="w-12 h-12" />, title: 'ATS-Optimized Resumes', description: "We write resumes that pass Applicant Tracking Systems using keyword-rich content, proper formatting, and industry-specific language. Your resume will make it to human eyes every time." },
      { icon: <Edit3 className="w-12 h-12" />, title: 'Professional Rewrite', description: "Transform your existing resume into a compelling career story. We restructure, rewrite, and redesign to highlight your achievements, quantify your impact, and position you as the ideal candidate." },
      { icon: <Briefcase className="w-12 h-12" />, title: 'Executive Resumes', description: "For senior professionals and C-suite candidates. We craft executive-level resumes that demonstrate strategic vision, leadership impact, and board-level value. Position yourself for the corner office." },
      { icon: <ArrowRightLeft className="w-12 h-12" />, title: 'Career Change Resumes', description: "Changing industries? We identify and highlight your transferable skills, reframing your experience to resonate with your target field. Make your pivot look like a natural evolution." },
      { icon: <User className="w-12 h-12" />, title: 'LinkedIn Optimization', description: "Your LinkedIn profile is your digital resume. We optimize your headline, summary, experience sections, and skills to attract recruiters and complement your resume strategy." },
      { icon: <FileText className="w-12 h-12" />, title: 'Cover Letters', description: "A great cover letter can be the difference between an interview and a rejection. We craft compelling, personalized cover letters that tell your story and demonstrate your fit for the role." },
    ],
    caseStudies: [
      { category: 'CAREER CHANGE', title: 'Michael T., Marketing Manager', stats: [{ number: '5', label: 'Interviews' }, { number: '2', label: 'Weeks' }, { number: 'Senior', label: 'Role' }], quote: "I applied to 50 jobs with my old resume and got zero responses. After LaunchNova rewrote it, I got 5 interviews in the first two weeks.", quotee: 'Michael T.', image: '/images/real-client-4.jpg' },
      { category: 'EXECUTIVE', title: 'Robert H., CTO', stats: [{ number: '2', label: 'C-Level Offers' }, { number: '30', label: 'Days' }, { number: 'Fortune 500', label: 'Company' }], quote: "The executive resume they created positioned me as a strategic leader, not just a manager. I received two C-level offers within a month.", quotee: 'Robert H.', image: '/images/real-client-6.jpg' },
    ],
    faq: [
      { question: 'How long does the resume writing process take?', answer: 'Standard delivery is 5 business days for the Professional package, 3 days for Career Accelerator, and 2 days for Executive Suite. Rush delivery is available for an additional fee.' },
      { question: 'What is the interview guarantee?', answer: "If you don't receive an interview request within 60 days (90 days for Executive) of using your new resume, we'll rewrite it for free. This shows our confidence in our work." },
      { question: 'Do you specialize in specific industries?', answer: "Our writers cover 65+ industries including tech, healthcare, finance, marketing, legal, and more. We'll match you with a writer who understands your field." },
      { question: 'Can you help with federal or government resumes?', answer: 'Yes, our Executive Suite includes federal resume formatting. We understand USAJOBS requirements and can create resumes that meet federal application standards.' },
      { question: "What's included in the LinkedIn optimization?", answer: "We rewrite your headline, summary, experience sections, and skills. We also provide recommendations for your profile photo, banner image, and networking strategy." },
    ],
    portfolio: [
      { image: '/images/resume-client-1.jpg', title: 'Marcus J. — Career Change', category: 'MARKETING', description: 'Transitioned from retail management to digital marketing. Our resume highlighted transferable skills and quantifiable achievements, resulting in 3 offers from top agencies.', metrics: [{ label: 'Interviews', value: '8' }, { label: 'Offers', value: '3' }, { label: 'Timeline', value: '3 weeks' }] },
      { image: '/images/resume-client-2.jpg', title: 'Jennifer W. — Executive Level', category: 'FINANCE', description: 'A CFO candidate seeking Fortune 500 roles. We crafted an executive resume emphasizing strategic leadership and $200M+ in managed assets. Landed a VP role at a top bank.', metrics: [{ label: 'Interviews', value: '5' }, { label: 'Offers', value: '2' }, { label: 'Salary Increase', value: '+40%' }] },
      { image: '/images/resume-client-3.jpg', title: 'Carlos R. — Finance', category: 'FINANCE', description: 'An investment analyst targeting senior roles at top banks. Our resume showcased his CFA credentials and deal experience, landing him 4 interviews at major firms.', metrics: [{ label: 'Interviews', value: '4' }, { label: 'Offers', value: '2' }, { label: 'Timeline', value: '3 weeks' }] },
      { image: '/images/resume-client-4.jpg', title: 'Amara S. — Healthcare Admin', category: 'HEALTHCARE', description: 'A healthcare administrator returning after a career break. We reframed her experience to highlight relevant skills, resulting in a Director-level position.', metrics: [{ label: 'Interviews', value: '6' }, { label: 'Offers', value: '2' }, { label: 'Level', value: 'Director' }] },
      { image: '/images/resume-client-5.jpg', title: 'Rachel T. — Sales Leadership', category: 'SALES', description: 'A sales manager aiming for VP of Sales. Our resume showcased $15M in revenue growth she led, catching the attention of 3 Fortune 1000 companies.', metrics: [{ label: 'Interviews', value: '7' }, { label: 'Offers', value: '3' }, { label: 'Level', value: 'VP' }] },
      { image: '/images/resume-visual.jpg', title: 'Daniel O. — Data Science', category: 'TECHNOLOGY', description: 'A data scientist transitioning from academia to industry. We translated his research into business impact, securing a Senior Data Scientist role at a unicorn startup.', metrics: [{ label: 'Interviews', value: '5' }, { label: 'Offers', value: '2' }, { label: 'Timeline', value: '2 weeks' }] },
    ],
  },
  'music-promotion': {
    title: 'Music Promotion',
    tagline: 'Get your music heard by millions and build your fanbase',
    bgColor: 'bg-navy-800',
    textColor: 'text-cream-50',
    labelColor: 'text-gold-400',
    image: '/images/music-promo-visual.jpg',
    overview: {
      headline: 'Your Music Deserves an Audience',
      body: 'In a world where thousands of songs drop daily, standing out is harder than ever. Our music promotion services connect artists with the right listeners, playlist curators, and industry influencers to build lasting careers.',
      secondary: 'From independent artists to established acts, we craft promotion strategies that turn streams into fans and fans into superfans.',
      stats: [
        { number: '2B+', label: 'Total Streams' },
        { number: '800+', label: 'Artists Promoted' },
        { number: '50K+', label: 'Playlist Placements' },
      ],
    },
    features: [
      { icon: <Music className="w-12 h-12" />, title: 'Playlist Placement', description: 'Get your tracks on curated Spotify, Apple Music, and Tidal playlists with real, engaged listeners. We pitch directly to playlist curators and use data-driven targeting to find the perfect playlists for your genre.' },
      { icon: <Radio className="w-12 h-12" />, title: 'Radio Promotion', description: 'Secure airplay on FM, satellite, and internet radio stations. We handle everything from station outreach to press kit preparation, getting your music rotation on stations that matter.' },
      { icon: <Headphones className="w-12 h-12" />, title: 'Streaming Strategy', description: 'Optimize your release schedule, metadata, and profile for maximum algorithmic discovery. We analyze listener data to find the best release windows and promotional tactics for your genre.' },
      { icon: <Mic className="w-12 h-12" />, title: 'Press & Media Outreach', description: 'Get featured in music blogs, magazines, podcasts, and online publications. Our PR team has relationships with editors at major music outlets who can give your release the coverage it deserves.' },
      { icon: <Play className="w-12 h-12" />, title: 'Social Media Marketing', description: 'Build your brand on TikTok, Instagram, and YouTube with content strategies designed for musicians. We create viral-ready campaigns that turn casual listeners into dedicated fans.' },
      { icon: <TrendingUp className="w-12 h-12" />, title: 'Analytics & Reporting', description: 'Track your growth with detailed analytics dashboards. Monitor streams, playlist additions, audience demographics, and engagement metrics to refine your promotion strategy over time.' },
    ],
    caseStudies: [
      { category: 'AFROBEATS', title: 'Tunde Vibes — "Elevation"', stats: [{ number: '15M', label: 'Streams' }, { number: '45', label: 'Playlists' }, { number: '4.8★', label: 'Rating' }], quote: 'LaunchNova got my single on 3 major Spotify editorial playlists. I went from 1,000 monthly listeners to 500,000 in 6 weeks.', quotee: 'Tunde V., Artist', image: '/images/real-client-10.jpg' },
      { category: 'HIP HOP', title: 'Lyrical Storm — "City Lights"', stats: [{ number: '8M', label: 'Streams' }, { number: '28', label: 'Playlists' }, { number: '#12', label: 'iTunes' }], quote: 'The TikTok campaign they created generated 2.3 million views. My Spotify streams tripled in the first month.', quotee: 'Marcus J., Rapper', image: '/images/real-client-7.jpg' },
    ],
    faq: [
      { question: 'How long does a music promotion campaign take?', answer: 'Most campaigns run 4-6 weeks. We recommend starting 2 weeks before your release date to build pre-save momentum, then continuing for 4 weeks post-release.' },
      { question: 'Do you guarantee playlist placements?', answer: 'While we cannot guarantee specific playlists (no ethical promoter can), our pitching strategy achieves an average 60% placement rate. We pitch to curators who actively seek music in your genre.' },
      { question: 'What genres do you work with?', answer: 'We work with all genres — Afrobeats, Hip Hop, R&B, Pop, EDM, Gospel, Jazz, and more. Our team matches your music with curators who specialize in your sound.' },
      { question: 'Can you help with music video promotion?', answer: 'Yes! We offer video promotion strategy, YouTube optimization, and placement on music video platforms as part of our music promotion services. Contact us for a custom quote.' },
      { question: 'How do you measure success?', answer: 'We track streams, playlist additions, follower growth, save rates, and audience demographics. You will receive weekly reports showing exactly how your campaign is performing.' },
    ],
    portfolio: [
      { image: '/images/music-client-1.jpg', title: 'Amara K. — Afrobeats Artist', category: 'AFROBEATS', description: 'An independent Afrobeats singer who needed wider reach. Our playlist campaign placed her on 12 major playlists, growing her monthly listeners from 5K to 180K.', metrics: [{ label: 'Streams', value: '12M' }, { label: 'Playlists', value: '35' }, { label: 'Growth', value: '36x' }] },
      { image: '/images/music-client-2.jpg', title: 'DJ Kross — Electronic Producer', category: 'EDM', description: 'A producer seeking to break into the festival circuit. Our targeted promotion secured features on 3 major EDM blogs and 20 Spotify playlists.', metrics: [{ label: 'Streams', value: '8M' }, { label: 'Playlists', value: '20' }, { label: 'Festivals', value: '3' }] },
      { image: '/images/music-client-3.jpg', title: 'The Harmony Choir — Gospel', category: 'GOSPEL', description: 'A gospel choir looking to reach a broader audience. Our promotion strategy connected them with Christian music playlists and radio stations nationwide.', metrics: [{ label: 'Streams', value: '3M' }, { label: 'Stations', value: '15' }, { label: 'Albums', value: '2' }] },
      { image: '/images/music-client-4.jpg', title: 'Lena M. — R&B Vocalist', category: 'R&B', description: 'An R&B vocalist launching her debut EP. Our TikTok strategy created a viral moment with her lead single, driving 5M streams in the first month.', metrics: [{ label: 'Streams', value: '5M' }, { label: 'TikTok', value: '2M' }, { label: 'Fans', value: '50K' }] },
      { image: '/images/music-client-5.jpg', title: 'Steel Band Collective — Caribbean', category: 'CARIBBEAN', description: 'A steel drum band promoting their fusion album. Our genre-crossing strategy placed them on world music, jazz, and tropical playlists simultaneously.', metrics: [{ label: 'Streams', value: '2M' }, { label: 'Countries', value: '25' }, { label: 'Playlists', value: '18' }] },
      { image: '/images/music-client-6.jpg', title: 'Rapido — Hip Hop Artist', category: 'HIP HOP', description: 'A rapper seeking to build his brand beyond his hometown. Our comprehensive campaign secured radio play in 8 markets and 30 playlist placements.', metrics: [{ label: 'Streams', value: '7M' }, { label: 'Stations', value: '8' }, { label: 'Playlists', value: '30' }] },
    ],
  },
  'translation': {
    title: 'Translation Service',
    tagline: 'Break language barriers and connect with the world',
    bgColor: 'bg-navy-700',
    textColor: 'text-cream-50',
    labelColor: 'text-gold-400',
    image: '/images/translation-visual.jpg',
    overview: {
      headline: 'Speak to the World in Their Language',
      body: 'In today is global marketplace, language should never be a barrier to growth. Our professional translation services help businesses, authors, and creators reach audiences in 50+ languages with accuracy, cultural sensitivity, and native fluency.',
      secondary: 'Whether you are localizing a website, translating a book, or preparing business documents, our certified translators deliver results that read as if originally written in the target language.',
      stats: [
        { number: '50+', label: 'Languages' },
        { number: '10M+', label: 'Words Translated' },
        { number: '99.2%', label: 'Accuracy Rate' },
      ],
    },
    features: [
      { icon: <Globe className="w-12 h-12" />, title: 'Document Translation', description: 'Certified translation of legal, business, medical, and technical documents. Every translation is reviewed by a second native speaker to ensure accuracy and cultural appropriateness.' },
      { icon: <BookOpen className="w-12 h-12" />, title: 'Book & Literary Translation', description: 'Preserve the voice, tone, and emotion of your writing across languages. Our literary translators are published authors who understand the art of storytelling in multiple languages.' },
      { icon: <MessageCircle className="w-12 h-12" />, title: 'Website Localization', description: 'Adapt your website content for different markets, including cultural adjustments, SEO optimization in target languages, and region-specific imagery recommendations.' },
      { icon: <CheckCircle className="w-12 h-12" />, title: 'Certified Translation', description: 'Official certified translations accepted by government agencies, universities, and legal institutions worldwide. Includes notarization and apostille services where required.' },
      { icon: <FileText className="w-12 h-12" />, title: 'Business & Marketing', description: 'Translate marketing materials, product descriptions, contracts, and corporate communications. We ensure your brand voice remains consistent across all languages.' },
      { icon: <Users className="w-12 h-12" />, title: 'Interpretation Services', description: 'Professional simultaneous and consecutive interpretation for conferences, meetings, and events. Available in-person and remotely via video conferencing platforms.' },
    ],
    caseStudies: [
      { category: 'PUBLISHING', title: 'The African Legacy — Book Translation', stats: [{ number: '3', label: 'Languages' }, { number: '85K', label: 'Words' }, { number: '4.7★', label: 'Rating' }], quote: 'LaunchNova translated my novel into French, Spanish, and German while preserving every nuance of the original. Sales increased 300% in European markets.', quotee: 'Chioma E., Author', image: '/images/real-client-8.jpg' },
      { category: 'BUSINESS', title: 'TechNova Solutions — Website Localization', stats: [{ number: '12', label: 'Languages' }, { number: '45K', label: 'Words' }, { number: '200%', label: 'Traffic' }], quote: 'Localizing our website for 12 markets seemed impossible. LaunchNova handled everything — translation, cultural adaptation, and even SEO keywords. Our international traffic doubled.', quotee: 'James L., CEO', image: '/images/real-client-9.jpg' },
    ],
    faq: [
      { question: 'What languages do you support?', answer: 'We support 50+ languages including major world languages (English, Spanish, French, German, Chinese, Japanese, Arabic, Portuguese, Russian, Hindi) and many regional languages. Contact us for specific language availability.' },
      { question: 'How do you ensure translation quality?', answer: 'Every project follows a 3-step process: translation by a native speaker, review by a second linguist, and final quality check. We maintain a 99.2% accuracy rate across all projects.' },
      { question: 'What is the turnaround time?', answer: 'Standard projects take 3-5 business days. Rush delivery is available for urgent projects. Large projects (100,000+ words) are completed in phases with regular delivery schedules.' },
      { question: 'Do you offer certified translations?', answer: 'Yes, we provide certified and notarized translations accepted by USCIS, universities, courts, and government agencies worldwide. Apostille services are also available.' },
      { question: 'Can you localize my website?', answer: 'Absolutely. Our website localization service includes translation, cultural adaptation, SEO optimization in target languages, and technical implementation guidance.' },
    ],
    portfolio: [
      { image: '/images/trans-client-1.jpg', title: 'HealthFirst Clinic — Medical Docs', category: 'MEDICAL', description: 'A healthcare provider needed patient forms translated into 8 languages for their diverse patient base. We delivered certified translations meeting all regulatory requirements.', metrics: [{ label: 'Languages', value: '8' }, { label: 'Documents', value: '45' }, { label: 'Turnaround', value: '5 days' }] },
      { image: '/images/trans-client-2.jpg', title: 'Global Fashion Brand — E-commerce', category: 'E-COMMERCE', description: 'A fashion brand expanding into 6 European markets. We localized their entire product catalog, website, and marketing materials with region-specific cultural adjustments.', metrics: [{ label: 'Languages', value: '6' }, { label: 'Products', value: '2,000' }, { label: 'Sales', value: '+150%' }] },
      { image: '/images/trans-client-3.jpg', title: 'Law Firm Hernandez — Legal Docs', category: 'LEGAL', description: 'A law firm requiring certified translations of contracts for international clients. We provided notarized translations in Spanish, Portuguese, and Mandarin Chinese.', metrics: [{ label: 'Languages', value: '3' }, { label: 'Pages', value: '500+' }, { label: 'Accuracy', value: '100%' }] },
      { image: '/images/trans-client-4.jpg', title: 'Sunset Publishers — Book Series', category: 'PUBLISHING', description: 'A publishing house launching a popular fiction series in 5 new markets. We translated 3 full novels while maintaining the author is voice and style.', metrics: [{ label: 'Languages', value: '5' }, { label: 'Words', value: '250K' }, { label: 'Books', value: '3' }] },
      { image: '/images/trans-client-5.jpg', title: 'EduGlobal — Online Courses', category: 'EDUCATION', description: 'An education platform translating course content for international students. We adapted 50+ hours of content into Arabic, French, and Spanish.', metrics: [{ label: 'Languages', value: '3' }, { label: 'Hours', value: '50+' }, { label: 'Students', value: '10K' }] },
      { image: '/images/trans-client-6.jpg', title: 'Metro Bank — Financial Reports', category: 'FINANCE', description: 'A multinational bank needing quarterly reports translated for stakeholders in 4 countries. We delivered precise financial translations with industry terminology.', metrics: [{ label: 'Languages', value: '4' }, { label: 'Pages', value: '200+' }, { label: 'Turnaround', value: '3 days' }] },
    ],
  },
  'telegram-crypto': {
    title: 'Telegram / Crypto',
    tagline: 'Build communities, grow projects, dominate Web3',
    bgColor: 'bg-navy-800',
    textColor: 'text-cream-50',
    labelColor: 'text-gold-400',
    image: '/images/telegram-crypto-visual.jpg',
    overview: {
      headline: 'Your Web3 Growth Partner',
      body: 'The crypto and Web3 space moves fast. We help blockchain projects, NFT collections, DeFi platforms, and crypto startups build engaged Telegram communities, execute token launches, and create viral marketing campaigns that drive real adoption.',
      secondary: 'From community moderation and bot automation to influencer partnerships and airdrop campaigns, our Web3 marketing team knows what works in the decentralized economy.',
      stats: [
        { number: '150+', label: 'Communities Grown' },
        { number: '2M+', label: 'Telegram Members' },
        { number: '98%', label: 'Retention Rate' },
      ],
    },
    features: [
      { icon: <Send className="w-12 h-12" />, title: 'Telegram Community Building', description: 'We build, grow, and manage thriving Telegram communities for crypto projects. From group setup and bot integration to daily engagement and moderation, we create spaces where holders become believers.' },
      { icon: <Coins className="w-12 h-12" />, title: 'Token Launch Marketing', description: 'Pre-launch hype, IDO/ICO promotion, DEX listing campaigns, and post-launch community retention. We have helped projects raise millions and achieve sustainable trading volume.' },
      { icon: <Smartphone className="w-12 h-12" />, title: 'Bot Automation & Tools', description: 'Custom Telegram bots for airdrops, staking dashboards, price alerts, anti-spam, and wallet verification. We build the infrastructure that keeps your community engaged 24/7.' },
      { icon: <TrendingUp className="w-12 h-12" />, title: 'Influencer & KOL Marketing', description: 'Access our network of 500+ crypto influencers, YouTubers, Twitter KOLs, and Telegram channel owners. We match your project with voices that reach your ideal investors.' },
      { icon: <Shield className="w-12 h-12" />, title: 'Community Security & Scam Prevention', description: 'Protect your community from scammers, fake accounts, and phishing attacks. We implement verification systems, anti-bot measures, and 24/7 moderation to keep your members safe.' },
      { icon: <Lock className="w-12 h-12" />, title: 'NFT & DeFi Project Marketing', description: 'Complete marketing for NFT drops, DeFi protocols, GameFi projects, and metaverse platforms. From whitelist campaigns to mint-day virality, we know how to create FOMO.' },
    ],
    platforms: [
      { name: 'Telegram', description: 'Community hubs, announcement channels, and support groups', metric: '2M+ Members' },
      { name: 'Twitter/X', description: 'Viral threads, Spaces, and KOL partnerships', metric: '50M+ Impressions' },
      { name: 'Discord', description: 'Server setup, roles, and engagement programs', metric: '100+ Servers' },
      { name: 'YouTube', description: 'AMA sessions, reviews, and explainer videos', metric: '10M+ Views' },
    ],
    caseStudies: [
      { category: 'TOKEN LAUNCH', title: 'NovaCoin — DeFi Protocol Launch', stats: [{ number: '$4.2M', label: 'Raised' }, { number: '85K', label: 'Telegram Members' }, { number: '12x', label: 'Listing Price' }], quote: 'LaunchNova built our Telegram from zero to 85,000 members in 6 weeks. Our token sold out in 4 minutes and did a 12x on launch day.', quotee: 'Samuel T., CEO', image: '/images/real-client-11.jpg' },
      { category: 'NFT COLLECTION', title: 'African Giants — 10K NFT Drop', stats: [{ number: '10K', label: 'NFTs' }, { number: 'Sold Out', label: 'In 2 Hours' }, { number: '$1.8M', label: 'Volume' }], quote: 'They created a whitelist campaign that had 40,000 people competing for 10,000 spots. The mint sold out instantly and the floor price held strong.', quotee: 'Chinedu O., Founder', image: '/images/real-client-12.jpg' },
    ],
    faq: [
      { question: 'How do you grow a Telegram community?', answer: 'We use a combination of organic growth (content, engagement, AMAs, contests), paid promotion (influencer partnerships, cross-promotions), and viral mechanics (airdrops, referral programs, gamification). Every strategy is tailored to your project is goals.' },
      { question: 'Can you help with a token launch?', answer: 'Absolutely. We handle pre-launch marketing, whitelist campaigns, IDO/ICO promotion, exchange listing support, and post-launch community building. Our team has experience with launches on Ethereum, BSC, Solana, and Layer 2 networks.' },
      { question: 'How do you prevent scams in our group?', answer: 'We implement multi-layer security: CAPTCHA verification for new members, anti-bot filters, admin impersonation detection, automated scam-link blocking, and 24/7 human moderation. Your community safety is our priority.' },
      { question: 'What platforms do you support?', answer: 'We specialize in Telegram, Twitter/X, Discord, and YouTube for crypto marketing. We also work with Reddit, Medium, CoinMarketCap, CoinGecko, and crypto PR outlets for broader reach.' },
      { question: 'How quickly can you grow a community?', answer: 'Typical growth is 5,000-10,000 members in the first month for new projects. Established projects can see 20,000+ in the same timeframe. Speed depends on budget, project appeal, and market conditions.' },
    ],
    portfolio: [
      { image: '/images/portfolio-cf-1.jpg', title: 'NovaCoin DeFi Protocol', category: 'TOKEN LAUNCH', description: 'A decentralized finance protocol launching on BSC. We built their community from scratch, ran their IDO campaign, and sustained post-launch engagement.', metrics: [{ label: 'Members', value: '85K' }, { label: 'Raised', value: '$4.2M' }, { label: 'ROI', value: '12x' }] },
      { image: '/images/portfolio-bm-1.jpg', title: 'African Giants NFT', category: 'NFT DROP', description: 'A 10,000-piece NFT collection celebrating African culture. Our whitelist campaign generated 40,000 signups and the collection sold out in 2 hours.', metrics: [{ label: 'NFTs', value: '10K' }, { label: 'Signups', value: '40K' }, { label: 'Volume', value: '$1.8M' }] },
      { image: '/images/portfolio-cf-2.jpg', title: 'MetaVerse Africa', category: 'GAMEFI', description: 'A play-to-earn metaverse game. We grew their Telegram to 120,000 members and ran influencer campaigns across Africa that drove 50,000 game downloads.', metrics: [{ label: 'Members', value: '120K' }, { label: 'Downloads', value: '50K' }, { label: 'DAU', value: '15K' }] },
      { image: '/images/portfolio-bm-2.jpg', title: 'GreenChain Sustainability', category: 'BLOCKCHAIN', description: 'An eco-friendly blockchain project. We managed their global community, coordinated airdrops to 100,000 wallets, and secured listings on 3 major exchanges.', metrics: [{ label: 'Wallets', value: '100K' }, { label: 'Exchanges', value: '3' }, { label: 'MCap', value: '$50M' }] },
      { image: '/images/portfolio-cf-3.jpg', title: 'Crypto Academy Africa', category: 'EDUCATION', description: 'An educational platform teaching Africans about crypto. We built a 60,000-member community and ran referral campaigns that enrolled 12,000 students.', metrics: [{ label: 'Members', value: '60K' }, { label: 'Students', value: '12K' }, { label: 'Countries', value: '18' }] },
      { image: '/images/portfolio-cf-4.jpg', title: 'PayToken Remittance', category: 'DEFI', description: 'A cross-border payment token for Africa. Our marketing reached 5 million people across Telegram and Twitter, driving $2M in pre-sale contributions.', metrics: [{ label: 'Reach', value: '5M' }, { label: 'Pre-sale', value: '$2M' }, { label: 'Holders', value: '25K' }] },
    ],
  },
}

export default function Services() {
  const { service } = useParams<{ service: string }>()
  const data = servicesData[service || 'crowdfunding']
  const isGold = service === 'book-marketing'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [service])

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-50">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-charcoal mb-4">Service Not Found</h1>
          <Link to="/" className="text-gold-500 hover:underline">Go Home</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero Banner */}
      <section className={`${data.bgColor} pt-32 pb-20 lg:pt-40 lg:pb-28`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className={`section-label ${data.labelColor} mb-4 block`}>OUR SERVICES</span>
          <h1 className={`font-heading font-bold text-4xl lg:text-5xl ${data.textColor} mb-4`}>
            {data.title}
          </h1>
          <p className={`text-lg max-w-xl mx-auto ${isGold ? 'text-navy-800' : 'text-cream-100'}`}>
            {data.tagline}
          </p>
          <Link
            to="/contact"
            className={`inline-flex items-center gap-2 px-8 py-3.5 mt-8 font-semibold rounded-full transition-colors ${
              isGold
                ? 'bg-navy-900 text-gold-500 hover:bg-navy-800'
                : 'bg-gold-500 text-navy-900 hover:bg-gold-400'
            }`}
          >
            {service === 'crowdfunding' ? 'Start Your Campaign' : service === 'book-marketing' ? 'Market Your Book' : service === 'resume-writing' ? 'Build Your Resume' : service === 'music-promotion' ? 'Promote Your Music' : service === 'translation' ? 'Start Translating' : 'Grow Your Community'}
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-charcoal mb-6">
                {data.overview.headline}
              </h2>
              <p className="text-lg text-charcoal mb-4 leading-relaxed">{data.overview.body}</p>
              <p className="text-slate mb-8">{data.overview.secondary}</p>
              <div className="flex flex-wrap gap-8">
                {data.overview.stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="font-heading font-bold text-3xl text-gold-500">{stat.number}</span>
                    <p className="text-sm text-slate mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn>
              <img
                src={data.image}
                alt={data.title}
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn className="text-center mb-16">
            <span className="section-label text-gold-400 mb-4 block">OUR APPROACH</span>
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-cream-50">
              {service === 'crowdfunding' ? 'Complete Campaign Management' : service === 'book-marketing' ? 'Complete Book Marketing System' : service === 'resume-writing' ? 'Expert Resume Services' : service === 'music-promotion' ? 'Complete Music Promotion' : service === 'translation' ? 'Professional Translation Services' : 'Web3 Community Growth'}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {data.features.map((feature, i) => (
              <FadeIn key={feature.title}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="bg-navy-800 rounded-2xl p-8 h-full cursor-pointer group"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                    className="text-gold-500 mb-4 inline-block"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="font-heading font-semibold text-xl text-cream-50 mb-3">{feature.title}</h3>
                  <p className="text-cream-100 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Previous Work */}
      <section className={`${service === 'book-marketing' ? 'bg-cream-50' : 'bg-cream-50'} py-20 lg:py-28`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn className="text-center mb-16">
            <span className="section-label text-slate mb-4 block">PREVIOUS WORK</span>
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-charcoal">
              {service === 'crowdfunding' ? 'Campaigns We\'ve Launched' : service === 'book-marketing' ? 'Books We\'ve Marketed' : 'Clients We\'ve Transformed'}
            </h2>
            <p className="text-lg text-slate mt-4 max-w-xl mx-auto">
              {service === 'crowdfunding' ? 'Real products that exceeded their funding goals through our strategic approach.' : service === 'book-marketing' ? 'Real authors who achieved bestseller status with our marketing expertise.' : 'Real professionals who landed their dream roles with our resume expertise.'}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {data.portfolio.map((item, i) => (
              <FadeIn key={i}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-[16/10] object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-semibold tracking-wider uppercase bg-gold-500 text-navy-900 px-2.5 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">{item.title}</h3>
                    <p className="text-sm text-slate leading-relaxed mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-cream-100">
                      {item.metrics.map((metric) => (
                        <div key={metric.label}>
                          <span className="font-heading font-bold text-lg text-gold-500">{metric.value}</span>
                          <p className="text-[10px] text-slate uppercase tracking-wider">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms (crowdfunding only) */}
      {data.platforms && (
        <section className="bg-cream-50 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <FadeIn className="text-center mb-16">
              <h2 className="font-heading font-semibold text-3xl text-charcoal mb-4">Platform Expertise</h2>
              <p className="text-lg text-slate">We specialize in all major crowdfunding platforms</p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.platforms.map((platform, i) => (
                <FadeIn key={platform.name} className={`stagger-${i + 1}`}>
                  <div className="bg-white border border-cream-100 rounded-xl p-6 text-center">
                    <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">{platform.name}</h3>
                    <p className="text-sm text-slate mb-4">{platform.description}</p>
                    <span className="font-heading font-bold text-2xl text-gold-500">{platform.metric}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Custom Quote CTA */}
      <section className={`${service === 'book-marketing' ? 'bg-cream-100' : 'bg-navy-800'} py-20 lg:py-28`}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <span className={`section-label ${service === 'book-marketing' ? 'text-slate' : 'text-gold-400'} mb-4 block`}>CUSTOM SOLUTIONS</span>
            <h2 className={`font-heading font-semibold text-3xl lg:text-4xl mb-4 ${service === 'book-marketing' ? 'text-charcoal' : 'text-cream-50'}`}>
              Every Project is Unique
            </h2>
            <p className={`text-lg mb-8 ${service === 'book-marketing' ? 'text-charcoal/70' : 'text-cream-100'}`}>
              We do not believe in one-size-fits-all pricing. Tell us about your goals and we will craft a custom proposal tailored to your budget and needs.
            </p>
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 animate-pulse-glow ${
                service === 'book-marketing'
                  ? 'bg-navy-900 text-gold-500 hover:bg-navy-800'
                  : 'bg-gold-500 text-navy-900 hover:bg-gold-400'
              }`}
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Case Studies */}
      <section className={`${service === 'book-marketing' ? 'bg-navy-800' : 'bg-cream-50'} py-20 lg:py-28`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn className="mb-16">
            <span className={`section-label ${service === 'book-marketing' ? 'text-gold-400' : 'text-slate'} mb-4 block`}>SUCCESS STORIES</span>
            <h2 className={`font-heading font-semibold text-3xl lg:text-4xl ${service === 'book-marketing' ? 'text-cream-50' : 'text-charcoal'}`}>
              {service === 'crowdfunding' ? 'Campaigns That Crushed It' : service === 'book-marketing' ? 'Books That Became Bestsellers' : service === 'resume-writing' ? 'Careers Transformed' : service === 'music-promotion' ? 'Artists We Promoted' : service === 'translation' ? 'Translation Projects Delivered' : 'Communities We Built'}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {data.caseStudies.map((cs, i) => (
              <FadeIn key={i}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className={`${service === 'book-marketing' ? 'bg-navy-700' : 'bg-white border border-cream-100'} rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer`}
                >
                  <div className="p-8">
                    <span className="text-xs font-semibold text-gold-500 uppercase tracking-wider">{cs.category}</span>
                    <h3 className={`font-heading font-semibold text-xl mt-2 mb-1 ${service === 'book-marketing' ? 'text-cream-50' : 'text-charcoal'}`}>
                      {cs.title}
                    </h3>
                    {cs.author && <p className="text-sm text-cream-100 mb-4">{cs.author}</p>}
                    <div className="flex flex-wrap gap-6 mb-6">
                      {cs.stats.map((stat) => (
                        <div key={stat.label}>
                          <span className="font-heading font-bold text-xl text-gold-500">{stat.number}</span>
                          <p className={`text-xs ${service === 'book-marketing' ? 'text-cream-100' : 'text-slate'}`}>{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <p className={`italic mb-4 ${service === 'book-marketing' ? 'text-cream-50' : 'text-charcoal'}`}>"{cs.quote}"</p>
                    <div className="flex items-center gap-3">
                      <motion.img whileHover={{ scale: 1.15 }} src={cs.image} alt={cs.quotee} className="w-10 h-10 rounded-full object-cover border-2 border-gold-500" />
                      <p className="text-sm text-gold-500">— {cs.quotee}</p>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${service === 'book-marketing' || service === 'resume-writing' ? 'bg-cream-50' : 'bg-navy-900'} py-20 lg:py-28`}>
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <FadeIn className="text-center mb-12">
            <h2 className={`font-heading font-semibold text-3xl ${service === 'book-marketing' || service === 'resume-writing' ? 'text-charcoal' : 'text-cream-50'}`}>
              Common Questions
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {data.faq.map((item, i) => (
              <FadeIn key={i}>
                <motion.details
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className={`group border-b ${service === 'book-marketing' || service === 'resume-writing' ? 'border-cream-200' : 'border-navy-800'}`}
                >
                  <summary className={`flex items-center justify-between py-5 cursor-pointer list-none ${service === 'book-marketing' || service === 'resume-writing' ? 'text-charcoal' : 'text-cream-50'}`}>
                    <span className="font-heading font-semibold text-lg pr-4">{item.question}</span>
                    <span className="transition-transform group-open:rotate-180 flex-shrink-0">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className={service === 'book-marketing' || service === 'resume-writing' ? 'text-charcoal' : 'text-cream-50'}>
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </span>
                  </summary>
                  <p className={`pb-5 ${service === 'book-marketing' || service === 'resume-writing' ? 'text-slate' : 'text-cream-100'}`}>
                    {item.answer}
                  </p>
                </motion.details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gold-500 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-navy-900 mb-4">
              {service === 'crowdfunding' ? 'Ready to Fund Your Dream?' : service === 'book-marketing' ? 'Ready to Reach More Readers?' : service === 'resume-writing' ? 'Ready to Advance Your Career?' : service === 'music-promotion' ? 'Ready to Get Your Music Heard?' : service === 'translation' ? 'Ready to Go Global?' : 'Ready to Build Your Web3 Empire?'}
            </h2>
            <p className="text-lg text-navy-800 mb-8">
              {service === 'crowdfunding' ? "Book a free strategy call and learn how we can help you reach — and exceed — your funding goals." : service === 'book-marketing' ? "Let's create a marketing plan that gets your book the attention it deserves." : service === 'resume-writing' ? "Invest in a resume that opens doors. Your dream job is closer than you think." : service === 'music-promotion' ? "Let's get your music in front of the listeners who will love it." : service === 'translation' ? "Break language barriers and connect with audiences worldwide." : "Let's build a community that believes in your project as much as you do."}
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-900 text-gold-500 font-semibold rounded-full hover:bg-navy-800 transition-colors"
              >
                {service === 'crowdfunding' ? 'Book Your Free Call' : service === 'book-marketing' ? 'Start Your Book Launch' : service === 'resume-writing' ? 'Get Your Resume' : service === 'music-promotion' ? 'Start Your Music Campaign' : service === 'translation' ? 'Get a Free Quote' : 'Launch Your Community'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
