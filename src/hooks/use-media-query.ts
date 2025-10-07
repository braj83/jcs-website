'use client';
import { useEffect, useState } from 'react';

/**
 * SSR-safe media query hook.
 * Returns false on the server, then updates client-side.
 * Use for responsive or accessibility-based logic.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQueryList = window.matchMedia(query);

    const handleChange = (event: MediaQueryListEvent) =>
      setMatches(event.matches);

    // Initial value
    setMatches(mediaQueryList.matches);

    // Listen for changes
    mediaQueryList.addEventListener('change', handleChange);
    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}
