/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: {
          orange: '#ef5e24',
          'orange-dark': '#d54d18',
          'orange-light': '#fef3e8',
          blue: '#2c358c',
          'blue-dark': '#1a1f5c',
          'blue-light': '#e8eaf6',
        },
        accent: '#0a0a0a',
        ink: {
          50: '#f8fafc',
          100: '#f1f5f9',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans Variable"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #ef5e24 0%, #2c358c 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, #fef3e8 0%, #e8eaf6 100%)',
      },
    },
  },
  plugins: [],
};
