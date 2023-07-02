import { useEffect, useState } from 'react';

const useWindowSize = () => {
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
};

export default useWindowSize;
