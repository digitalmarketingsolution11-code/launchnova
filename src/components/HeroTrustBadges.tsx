import { useState, useEffect, useRef } from 'react'
import { Star, TrendingUp, Users, Award, Clock } from 'lucide-react'

const floatingBadges = [
  {
    icon: <Star className="w-4 h-4" />,
    label: '4.9 Rating',
    sublabel: 'Client Reviews',
    delay: 0,
    x: '75%',
    y: '15%',
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    label: '94%',
    sublabel: 'Success Rate',
    delay: 0.3,
    x: '82%',
    y: '38%',
  },
  {
    icon: <Users className="w-4 h-4" />,
    label: '500+',
    sublabel: 'Happy Clients',
    delay: 0.6,
    x: '70%',
    y: '60%',
  },
  {
    icon: <Award className="w-4 h-4" />,
    label: 'Top Rated',
    sublabel: 'Digital Agency',
    delay: 0.9,
    x: '85%',
    y: '72%',
  },
  {
    icon: <Clock className="w-4 h-4" />,
    label: '24/7',
    sublabel: 'Support',
    delay: 1.2,
    x: '78%',
    y: '88%',
  },
]

function FloatingBadge({ badge }: { badge: typeof floatingBadges[0] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), badge.delay * 1000 + 500)
    return () => clearTimeout(timer)
  }, [badge.delay])

  useEffect(() => {
    if (!ref.current || !visible) return
    const el = ref.current
    let animationId: number
    let startTime: number

    const animate = (time: number) => {
      if (!startTime) startTime = time
      const elapsed = (time - startTime) / 1000
      const yOffset = Math.sin(elapsed * 0.8 + badge.delay * 3) * 8
      const xOffset = Math.cos(elapsed * 0.5 + badge.delay * 2) * 4
      el.style.transform = `translate(${xOffset}px, ${yOffset}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [visible, badge.delay])

  return (
    <div
      ref={ref}
      className={`absolute transition-all duration-700 ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
      }`}
      style={{
        left: badge.x,
        top: badge.y,
        transitionDelay: `${badge.delay}s`,
      }}
    >
      <div className="flex items-center gap-2.5 bg-navy-800/80 backdrop-blur-sm border border-navy-700/60 rounded-xl px-4 py-3 shadow-lg hover:border-gold-500/40 transition-colors cursor-default group">
        <div className="w-9 h-9 rounded-lg bg-gold-500/15 flex items-center justify-center text-gold-400 group-hover:bg-gold-500/25 transition-colors">
          {badge.icon}
        </div>
        <div>
          <p className="text-cream-50 font-heading font-semibold text-sm leading-tight">{badge.label}</p>
          <p className="text-cream-100/60 text-[11px] leading-tight">{badge.sublabel}</p>
        </div>
      </div>
    </div>
  )
}

export default function HeroTrustBadges() {
  return (
    <>
      {/* Floating trust badges - DESKTOP ONLY (hidden on mobile) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
        {floatingBadges.map((badge, i) => (
          <FloatingBadge key={i} badge={badge} />
        ))}
      </div>

      {/* MOBILE: Clean trust bar below hero content - NO badges in hero area */}
      <div className="lg:hidden mt-6 pt-6 border-t border-navy-700/50">
        <div className="grid grid-cols-4 gap-2">
          {[
            { icon: <Star className="w-3.5 h-3.5" />, label: '4.9', sublabel: 'Rating' },
            { icon: <TrendingUp className="w-3.5 h-3.5" />, label: '94%', sublabel: 'Success' },
            { icon: <Users className="w-3.5 h-3.5" />, label: '500+', sublabel: 'Clients' },
            { icon: <Award className="w-3.5 h-3.5" />, label: 'Top', sublabel: 'Rated' },
          ].map((badge, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center py-2"
            >
              <div className="w-8 h-8 rounded-lg bg-gold-500/15 flex items-center justify-center text-gold-400 mb-1.5">
                {badge.icon}
              </div>
              <p className="text-cream-50 font-heading font-bold text-xs">{badge.label}</p>
              <p className="text-cream-100/50 text-[10px]">{badge.sublabel}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements - desktop only */}
      <div className="hidden lg:block absolute top-1/4 right-[15%] w-2 h-2 rounded-full bg-gold-500/40 animate-pulse" />
      <div className="hidden lg:block absolute top-1/3 right-[25%] w-1.5 h-1.5 rounded-full bg-gold-400/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="hidden lg:block absolute bottom-1/3 right-[12%] w-2 h-2 rounded-full bg-gold-300/25 animate-pulse" style={{ animationDelay: '1s' }} />
    </>
  )
}
