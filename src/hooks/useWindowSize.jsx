import { useState, useEffect } from 'react';

export default function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState(false);

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize(window.innerWidth < 992);
      }

      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return windowSize;
}
