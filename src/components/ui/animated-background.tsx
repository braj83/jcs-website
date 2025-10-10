'use client';
import { motion } from 'framer-motion';
import React, { useEffect, useState, useMemo } from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';

const NEON_LIME = 'oklch(0.7 0 0)';

interface FloatingPathsProps {
  position: number;
  isMobile: boolean;
  isSafari: boolean;
}

const FloatingPaths = React.memo(function FloatingPaths({
  position,
  isMobile,
  isSafari,
}: FloatingPathsProps) {
  // Fewer paths on Safari (Intel) for smoother performance
  const pathCount = isSafari ? (isMobile ? 8 : 16) : (isMobile ? 16 : 32);
  const baseStrokeWidth = 0.35;
  const gradientId = `bgStroke-${position}`;

  const paths = useMemo(() => {
    return Array.from({ length: pathCount }, (_, i) => ({
      id: i,
      d: `M-${380 - i * 5 * position} -${189 + i * 6}
          C-${380 - i * 5 * position} -${189 + i * 6}
           -${312 - i * 5 * position} ${216 - i * 6}
            ${152 - i * 5 * position} ${343 - i * 6}
          C${616 - i * 5 * position} ${470 - i * 6}
            ${684 - i * 5 * position} ${875 - i * 6}
            ${684 - i * 5 * position} ${875 - i * 6}`,
      duration: 16 + Math.random() * 6,
    }));
  }, [pathCount, position]);

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        overflow: 'hidden',
        contain: 'strict',
        willChange: 'transform',
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
      }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
        aria-hidden="true"
        style={{
          transform: 'translateZ(0)',
          WebkitTransform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={NEON_LIME} stopOpacity="0.25" />
            <stop offset="100%" stopColor={NEON_LIME} stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={`url(#${gradientId})`}
            strokeWidth={baseStrokeWidth + path.id * 0.015}
            strokeOpacity={Math.min(0.25 + path.id * 0.012, 0.6)}
            initial={{ pathLength: 0.3, opacity: 0.8 }}
            animate={{
              pathLength: 1,
              pathOffset: [0, 1, 0],
              opacity: isSafari ? 0.6 : [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: path.duration * (isSafari ? 1.3 : 1),
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
});

export function BackgroundPaths() {
  const [hasMounted, setHasMounted] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  // Detect Safari (any version)
  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setHasMounted(true);
    if (typeof navigator !== 'undefined') {
      setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    }
  }, []);

  if (!hasMounted || prefersReducedMotion) return null;

  return (
    <div className="fixed inset-0 -z-10">
      <FloatingPaths position={1} isMobile={isMobile} isSafari={isSafari} />
      <FloatingPaths position={-1} isMobile={isMobile} isSafari={isSafari} />
    </div>
  );
}
