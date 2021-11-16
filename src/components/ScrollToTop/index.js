import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // put scroll on top when path/page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
