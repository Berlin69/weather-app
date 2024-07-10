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
        'plt-white': '#d2d3d5',
      },
    },
    screens: {
      '2xl': { max: '1535px' },

      xl: { max: '1279px' },

      '2lg': { max: '1170px' },

      lg: { max: '1023px' },

      '2md': { max: '940px' },

      md: { max: '767px' },

      sm: { max: '639px' },

      xs: { max: '450px' },
    },
  },
  plugins: [],
};
export default config;
