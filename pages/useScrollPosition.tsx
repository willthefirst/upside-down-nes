import { useEffect, useState } from 'react';
import { throttle } from "lodash"

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      console.log("bang")
      setScrollPosition(window.scrollY);
    }

    window.addEventListener('scroll', throttle(handleScroll, 1000));

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollY: scrollPosition };
}
