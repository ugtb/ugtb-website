import { useEffect, useState } from 'preact/hooks';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(true);

  useEffect(() => {
    const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches);

    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener('change', handleChange);

    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}
