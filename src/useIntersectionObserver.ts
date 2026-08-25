import { useEffect, useRef, useState } from 'react';

/**
 * A highly performant, SSR-safe React hook for the Intersection Observer API.
 */
export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [node, setNode] = useState<Element | null>(null);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    
    // SSR Safe fallback
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      return;
    }

    observer.current = new IntersectionObserver(([newEntry]) => {
      setEntry(newEntry);
    }, options);

    const currentObserver = observer.current;

    if (node) {
      currentObserver.observe(node);
    }

    return () => {
      currentObserver.disconnect();
    };
  }, [node, options.root, options.rootMargin, options.threshold]);

  return [setNode, entry] as const;
}
