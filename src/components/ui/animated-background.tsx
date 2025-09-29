'use client';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@/hooks/use-media-query'; // 👈 Import the new helper

function FloatingPaths({ position, isMobile }: { position: number, isMobile: boolean }) {
  // On mobile, draw fewer paths to improve performance
  const pathCount = isMobile ? 18 : 36;
  
  // On mobile, make the lines slightly thicker to be more visible
  const baseStrokeWidth = isMobile ? 0.3 : 0.2;

  const paths = Array.from({ length: pathCount }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-neutral-200 dark:text-[hsl(var(--primary))]"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={baseStrokeWidth + path.id * 0.015}
            strokeOpacity={0.05 + path.id * 0.01}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
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
  
  return (
    <div className="fixed inset-0 -z-20">
      {/* Pass the isMobile flag down to the component */}
      <FloatingPaths position={1} isMobile={isMobile} />
      <FloatingPaths position={-1} isMobile={isMobile} />
    </div>
  );
}