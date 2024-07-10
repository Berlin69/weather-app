import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'plt-primary': '#1d1e22',
        'plt-secondary': '#243139',
        'plt-white': '#F9F9F9',
      },
    },
    screens: {
      '2xl': { max: '1535px' },

      xl: { max: '1279px' },

      '2lg': { max: '1170px' },

      lg: { max: '1023px' },

      '3md': { max: '940px' },

      '2md': { max: '850px' },

      md: { max: '767px' },

      sm: { max: '639px' },

      xs: { max: '450px' },

      xxs: { max: '400px' },
    },
  },
  plugins: [],
};
export default config;
