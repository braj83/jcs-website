'use client';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@/hooks/use-media-query';

//hardcoded color here
const NEON_LIME = 'oklch(0.7 0 0)';

function FloatingPaths({
  position,
  isMobile,
}: {
  position: number;
  isMobile: boolean;
}) {
  const pathCount = isMobile ? 16 : 32;
  const baseStrokeWidth = isMobile ? 0.35 : 0.22;

  const gradientId = `bgStroke-${position}`;

  const paths = Array.from({ length: pathCount }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}
        C-${380 - i * 5 * position} -${189 + i * 6} 
         -${312 - i * 5 * position} ${216 - i * 6} 
          ${152 - i * 5 * position} ${343 - i * 6}
        C${616 - i * 5 * position} ${470 - i * 6} 
          ${684 - i * 5 * position} ${875 - i * 6} 
          ${684 - i * 5 * position} ${875 - i * 6}`,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
        aria-hidden="true"
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
              opacity: [0.5, 0.9, 0.5],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 16 + Math.random() * 6,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const prefersReducedMotion = useMediaQuery(
    '(prefers-reduced-motion: reduce)'
  );

  if (prefersReducedMotion) return null;

  return (
    <div className="fixed inset-0 -z-10">
      <FloatingPaths position={1} isMobile={isMobile} />
      <FloatingPaths position={-1} isMobile={isMobile} />
    </div>
  );
}