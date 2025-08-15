import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignoreDependencies: [
    'postcss',
    'postcss-load-config',
    'tailwindcss-animate',
    '@biomejs/biome',
    'husky',
    'tailwindcss',
  ],
};

export default config;
