import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) =>
    decimals > 0
      ? current.toFixed(decimals)
      : Math.floor(current).toLocaleString()
  );

  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      spring.set(value);
    }
  }, [isInView, hasAnimated, spring, value]);

  useEffect(() => {
    const unsubscribe = display.on('change', (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [display]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

interface StatCardProps {
  number: string;
  label: string;
  delay?: number;
  className?: string;
}

export function StatCard({ number, label, delay = 0, className = '' }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Parse number to extract numeric value and suffix
  const parseNumber = (str: string) => {
    const match = str.match(/^([\d.]+)(.*)$/);
    if (!match) return { value: 0, suffix: str, prefix: '' };
    return { value: parseFloat(match[1]), suffix: match[2], prefix: '' };
  };

  const { value, suffix, prefix } = parseNumber(number);
  const isDecimal = number.includes('.');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={`text-center ${className}`}
    >
      <span className="font-heading font-bold text-4xl md:text-5xl text-gold-500">
        <AnimatedCounter
          value={value}
          suffix={suffix}
          prefix={prefix}
          duration={2}
          decimals={isDecimal ? 1 : 0}
        />
      </span>
      <p className="text-cream-100 text-sm mt-2">{label}</p>
    </motion.div>
  );
}
