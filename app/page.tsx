'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { CookieSettings, ThemeSwitcher } from '@/components/index';
import { useTheme } from '@/context';

export default function Home() {
  const { theme } = useTheme();

  // Apply theme class to the body element
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-between sm:space-y-0">
          <div className="flex select-none flex-col items-center gap-4 sm:flex-row">
            <Image
              alt="Next.js logo"
              className={theme === 'light' ? 'light:invert' : 'dark:invert'}
              height={30}
              loading="eager"
              priority
              src="/next.svg"
              width={130}
            />
            <Image
              alt="plus icon"
              className={`${theme}:invert h-9 w-9`}
              height={0}
              loading="eager"
              priority
              src="/plus.svg"
              width={0}
            />
            <div className="flex items-center gap-4">
              <Image
                alt="ShadCN UI logo"
                className={`${theme}:invert`}
                height={24}
                loading="eager"
                priority
                src="/shadcnui.svg"
                width={24}
              />
              <span className="font-bold text-2xl light:invert">shadcn/ui</span>
            </div>
          </div>
        </div>

        <ol className="list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left">
          <li>
            Get started by editing app/page.tsx
            {/* <span className="font-semibold">app/page.tsx</span>. */}
          </li>
        </ol>
        <ThemeSwitcher />
        <CookieSettings />
      </main>
      <footer className="row-start-3 flex select-none flex-col flex-wrap items-center justify-center gap-6">
        <h4>
          Made with ❤️ by{' '}
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
