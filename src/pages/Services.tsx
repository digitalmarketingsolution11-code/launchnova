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
  GitBranch,
  MapPin,
  Archive,
  BookOpen,
  Users,
} from 'lucide-react'
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
  packages: { name: string; price: string; period: string; featured: boolean; features: string[]; cta: string }[]
  caseStudies: { category: string; title: string; author?: string; stats: { number: string; label: string }[]; quote: string; quotee: string }[]
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
