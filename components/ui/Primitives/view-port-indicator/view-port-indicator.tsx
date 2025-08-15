'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

// Custom hook for viewport dimensions
function useViewportDimensions(shouldRender: boolean) {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    if (!shouldRender || typeof window === 'undefined') {
      return;
    }

    setViewportWidth(window.innerWidth);
    setViewportHeight(window.innerHeight);

    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [shouldRender]);

  return { viewportWidth, viewportHeight };
}

// Custom hook for hover/expansion logic
function useHoverExpansion() {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isHovered) {
      const timeout = 200;
      const timer = setTimeout(() => setIsExpanded(true), timeout);
      return () => clearTimeout(timer);
    }
    setIsExpanded(false);
  }, [isHovered]);

  return { isHovered, isExpanded, setIsHovered };
}

// Custom hook for bottom position
function useBottomPosition() {
  const [bottomPosition, setBottomPosition] = useState('bottom-12');

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const checkLocalStorage = () => {
      const indicatorValue = localStorage.getItem(
        '__NEXT_DISMISS_PRERENDER_INDICATOR'
      );
      setBottomPosition(
        indicatorValue && Number(indicatorValue) > Date.now()
          ? 'bottom-4'
          : 'bottom-12'
      );
    };

    checkLocalStorage();
  }, []);

  return bottomPosition;
}

// Utility function for background color
function getBackgroundColor(viewportWidth: number): string {
  const breakpoints = {
    xs: 640,
    sm: 768,
    md: 1024,
    lg: 1280,
    xl: 1536,
  };

  if (viewportWidth < breakpoints.xs) {
    return 'bg-red-500';
  }
  if (viewportWidth < breakpoints.sm) {
    return 'bg-blue-500';
  }
  if (viewportWidth < breakpoints.md) {
    return 'bg-green-500';
  }
  if (viewportWidth < breakpoints.lg) {
    return 'bg-yellow-500';
  }
  if (viewportWidth < breakpoints.xl) {
    return 'bg-purple-500';
  }
  return 'bg-pink-500';
}

// Component for screen size labels
function ScreenSizeLabel() {
  return (
    <span>
      <span className="block sm:hidden">XS</span>
      <span className="hidden sm:block md:hidden">SM</span>
      <span className="hidden md:block lg:hidden">MD</span>
      <span className="hidden lg:block xl:hidden">LG</span>
      <span className="hidden xl:block 2xl:hidden">XL</span>
      <span className="hidden 2xl:block">2XL</span>
    </span>
  );
}

export function ViewPortIndicator() {
  const [shouldRender] = useState(process.env.NODE_ENV !== 'production');
  const { viewportWidth, viewportHeight } = useViewportDimensions(shouldRender);
  const { isHovered, isExpanded, setIsHovered } = useHoverExpansion();
  const bottomPosition = useBottomPosition();

  if (!shouldRender) {
    return null;
  }

  const bgColor = getBackgroundColor(viewportWidth);

  return (
    <div
      className={cn(
        bottomPosition,
        'fixed left-5 z-[99] flex select-none items-center justify-center'
      )}
    >
      <button
        className="group relative flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        type="button"
      >
        <div
          className={`flex h-[30px] w-[30px] items-center overflow-hidden rounded-full text-white text-xs transition-all duration-300 ease-in-out group-hover:w-40 ${bgColor}`}
        >
          <div className="flex h-[30px] w-[30px] items-center justify-center">
            <ScreenSizeLabel />

            {isExpanded && (
              <div
                className={`absolute left-10 flex flex-shrink-0 justify-center text-center text-white transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {`w: ${viewportWidth}px h: ${viewportHeight}px`}
              </div>
            )}
          </div>
        </div>
      </button>
    </div>
  );
}
