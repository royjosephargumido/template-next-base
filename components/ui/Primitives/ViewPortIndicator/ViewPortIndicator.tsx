"use client";

import { useState, useEffect } from "react";

export function ViewPortIndicator() {
  const [shouldRender] = useState(process.env.NODE_ENV !== "production");
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [bottomPosition, setBottomPosition] = useState("bottom-12");

  useEffect(() => {
    if (!shouldRender || typeof window === "undefined") return;

    setViewportWidth(window.innerWidth);
    setViewportHeight(window.innerHeight);

    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [shouldRender]);

  useEffect(() => {
    if (isHovered) {
      const timer = setTimeout(() => setIsExpanded(true), 200);
      return () => clearTimeout(timer);
    } else {
      setIsExpanded(false);
    }
  }, [isHovered]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkLocalStorage = () => {
      const indicatorValue = localStorage.getItem(
        "__NEXT_DISMISS_PRERENDER_INDICATOR"
      );
      setBottomPosition(
        indicatorValue && Number(indicatorValue) > Date.now()
          ? "bottom-4"
          : "bottom-12"
      );
    };

    checkLocalStorage();
  }, []);

  if (!shouldRender) return null;

  const getBgColor = () => {
    if (viewportWidth < 640) return "bg-red-500";
    if (viewportWidth < 768) return "bg-blue-500";
    if (viewportWidth < 1024) return "bg-green-500";
    if (viewportWidth < 1280) return "bg-yellow-500";
    if (viewportWidth < 1536) return "bg-purple-500";
    return "bg-pink-500";
  };

  return (
    <div
      className={`fixed ${bottomPosition} left-5 z-[99] flex items-center justify-center select-none`}
    >
      <div
        className="relative group flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`text-white text-xs h-[30px] w-[30px] rounded-full transition-all duration-300 ease-in-out group-hover:w-40 flex items-center overflow-hidden ${getBgColor()}`}
        >
          <div className="h-[30px] w-[30px] flex items-center justify-center">
            <span>
              <span className="block sm:hidden">XS</span>
              <span className="hidden sm:block md:hidden">SM</span>
              <span className="hidden md:block lg:hidden">MD</span>
              <span className="hidden lg:block xl:hidden">LG</span>
              <span className="hidden xl:block 2xl:hidden">XL</span>
              <span className="hidden 2xl:block">2XL</span>
            </span>

            {isExpanded && (
              <div
                className={`absolute left-10 text-center flex justify-center text-white flex-shrink-0 transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                {`w: ${viewportWidth}px h: ${viewportHeight}px`}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
