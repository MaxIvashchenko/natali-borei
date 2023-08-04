import { useEffect, useState } from 'react';

const useTouchDevice = (): boolean => {
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isTouchPoints =
        'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouchPoints);
    }
  }, []);

  return isTouchDevice;
};

export default useTouchDevice;
