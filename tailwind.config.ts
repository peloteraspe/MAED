import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: '#54086F',
          light: '#7D1DAD',
          dark: '#3F0557',
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        'poppins-bold': ['var(--font-poppins-bold)', 'sans-serif'],
        'poppins-extrabold': ['var(--font-poppins-extrabold)', 'sans-serif'],
        'eastman-bold': ['var(--font-eastman-bold)', 'sans-serif'],
        'eastman-extrabold': ['var(--font-eastman-extrabold)', 'sans-serif'],
        'eastman': ['var(--font-eastman)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
