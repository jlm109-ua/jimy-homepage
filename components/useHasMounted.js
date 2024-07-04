// Solve the issue of window not defined in Next.js (https://kulkarniankita.com/next.js/server-html-hydration-error)

import { useEffect, useState } from 'react';

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
};

export default useHasMounted