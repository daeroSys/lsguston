import { useEffect } from 'react';
import Lenis from 'lenis';

export function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis for smooth momentum inertia scrolling
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Global listener for smooth scrolling on navigation button clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest('[data-scroll-to], button, a');
      if (clickable) {
        const scrollToAttr = clickable.getAttribute('data-scroll-to');
        const hrefAttr = clickable.getAttribute('href');

        let targetId = scrollToAttr;
        if (!targetId && hrefAttr && hrefAttr.startsWith('#')) {
          targetId = hrefAttr.substring(1);
        }

        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            e.preventDefault();
            lenis.scrollTo(element, { offset: -20, duration: 1.2 });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
