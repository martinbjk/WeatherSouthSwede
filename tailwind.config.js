/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ocean: {
          50:  '#e6f7fb',
          100: '#b3e7f4',
          200: '#80d7ec',
          300: '#4dc7e5',
          400: '#26b8de',
          500: '#00a9d7',
          600: '#0088b0',
          700: '#006789',
          800: '#004662',
          900: '#00253b',
          950: '#000f1a',
        },
        wave: {
          50:  '#e8faf8',
          100: '#b8f0ea',
          200: '#88e5db',
          300: '#58dbcc',
          400: '#28d1bc',
          500: '#00c7ad',
          600: '#009f8a',
          700: '#007767',
          800: '#004f44',
          900: '#002721',
        },
        foam: {
          100: '#f0f9ff',
          200: '#e0f2fe',
          300: '#bae6fd',
        },
        sand: {
          100: '#fef9ef',
          200: '#fef3d0',
          300: '#fde68a',
          400: '#fbbf24',
        },
        depth: {
          800: '#0a1628',
          900: '#060d1a',
          950: '#03070f',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'wave-slow': 'wave 8s ease-in-out infinite',
        'wave-medium': 'wave 5s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(180deg, #000f1a 0%, #004662 40%, #006789 100%)',
        'hero-gradient': 'linear-gradient(135deg, #000f1a 0%, #00253b 50%, #004662 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(0,70,98,0.4) 0%, rgba(0,103,137,0.2) 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'ocean': '0 4px 32px rgba(0,169,215,0.15)',
        'card': '0 2px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'glow': '0 0 24px rgba(0,169,215,0.3)',
      },
    },
  },
  plugins: [],
};
