import { useIntersectionObserver } from './useIntersectionObserver';

/**
 * A simplified wrapper around useIntersectionObserver that returns a boolean.
 */
export function useIsVisible(options?: IntersectionObserverInit) {
  const [ref, entry] = useIntersectionObserver(options);
  const isVisible = !!entry?.isIntersecting;

  return [ref, isVisible] as const;
}
