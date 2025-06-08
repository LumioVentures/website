/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      animation: {
        'float-hero': 'float-hero 4s ease-in-out infinite',
        'float-subtle': 'float-subtle 3s ease-in-out infinite',
        'float-card': 'float-card 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'led-pulse': 'led-pulse 0.5s ease-in-out infinite',
        'pulse-border': 'pulse-border 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
        'glow-button': 'glow-button 2s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'space-gradient': 'linear-gradient(135deg, #0F1419 0%, #1A2332 100%)',
      },
      colors: {
        'space-dark': '#0F1419',
        'space-light': '#1A2332',
        'corporate-blue': '#1B365D',
        'accent-blue': '#4A90E2',
      },
      boxShadow: {
        'glow-corporate': '0 0 20px rgba(27, 54, 93, 0.3)',
        'glow-accent': '0 0 20px rgba(74, 144, 226, 0.3)',
        'glow-intense': '0 0 40px rgba(74, 144, 226, 0.5)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};