"use client";

import { useEffect, useState } from "react";

export function MinSizeOverlay() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 320);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSmallScreen]);

  if (!isSmallScreen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-purple-500 bg-opacity-100 text-white text-center select-none z-[99]">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Screen Too Small</h1>
        <p className="mt-2">
          Please use a larger screen for the best experience.
        </p>
      </div>
    </div>
  );
}
