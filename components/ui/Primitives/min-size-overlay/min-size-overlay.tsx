'use client';

import { useEffect, useState } from 'react';

export function MinSizeOverlay() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const mobileMaxLimit = 320;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < mobileMaxLimit);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSmallScreen]);

  if (!isSmallScreen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[99] flex select-none items-center justify-center bg-purple-500 bg-opacity-100 text-center text-white">
      <div className="p-4">
        <h1 className="font-bold text-2xl">Screen Too Small</h1>
        <p className="mt-2">
          Please use a larger screen for the best experience.
        </p>
      </div>
    </div>
  );
}
