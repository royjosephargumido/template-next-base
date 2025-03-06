"use client";

import { useEffect } from "react";
import { useTheme } from "@/context";
import Link from "next/link";
import Image from "next/image";
import { CookieSettings, ThemeSwitcher } from "@/components/index";

export default function Home() {
  const { theme } = useTheme();

  // Apply theme class to the body element
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="flex flex-wrap items-center justify-center sm:justify-between sm:space-y-0 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 select-none">
            <Image
              className={theme === "light" ? `light:invert` : `dark:invert`}
              src="/next.svg"
              alt="Next.js logo"
              loading="eager"
              width={130}
              height={30}
              priority
            />
            <Image
              className={`${theme}:invert w-9 h-9`}
              src="/plus.svg"
              alt="plus icon"
              loading="eager"
              width={0}
              height={0}
              priority
            />
            <div className="flex items-center gap-4">
              <Image
                className={`${theme}:invert`}
                src="/shadcnui.svg"
                alt="ShadCN UI logo"
                loading="eager"
                width={24}
                height={24}
                priority
              />
              <span className="light:invert font-bold text-2xl">shadcn/ui</span>
            </div>
          </div>
        </div>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>
            Get started by editing app/page.tsx
            {/* <span className="font-semibold">app/page.tsx</span>. */}
          </li>
        </ol>
        <ThemeSwitcher />
        <CookieSettings />
        
      </main>
      <footer className="row-start-3 flex flex-col gap-6 flex-wrap items-center justify-center select-none">
        <h4>
          Made with ❤️ by{" "}
          <Link
            className="hover:text-gray-400"
            href="https://www.facebook.com/rjargumido/"
            target="_blank"
          >
            @royjosephargumido
          </Link>
        </h4>
      </footer>
    </div>
  );
}
