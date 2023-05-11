import React, { useEffect, useState } from 'react';

function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${isLoading ? '' : 'hidden'}`}>
      <div className="fixed top-0 left-0 w-full h-full bg-gray-200 z-50 flex items-center justify-center">
      <div className="loader inline-block w-10 h-10 bg-orange-600 animate-spin"></div>
    </div>
    </div>
  );
}

export default Loader;