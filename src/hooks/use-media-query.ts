import { useEffect, useState } from 'react';

/**
 * Hook to detect media query matches (e.g. screen size, dark mode, reduced motion)
 */
export function useMediaQuery(query: string): boolean {
  const getMatches = (q: string): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(q).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    // Initial check
    setMatches(mediaQueryList.matches);

    // Listener
    mediaQueryList.addEventListener('change', handler);
    return () => mediaQueryList.removeEventListener('change', handler);
  }, [query]);

  return matches;
}
