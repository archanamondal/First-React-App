import { useState, useEffect } from 'react';

const getWindowWidth = () => window.innerWidth;

export default function useCurrentWindow() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    const resizeListener = () => {
      setWindowWidth(getWindowWidth());
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return windowWidth;
}
