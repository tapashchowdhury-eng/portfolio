/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#050810',
        'cyber-dark': '#0a0f1e',
        'cyber-navy': '#0d1530',
        'cyber-blue': '#0047ff',
        'electric-blue': '#00a8ff',
        'cyber-green': '#00ff9d',
        'cyber-green-dim': '#00cc7d',
        'grid-line': 'rgba(0, 168, 255, 0.06)',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Syne', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00ff9d, 0 0 10px #00ff9d' },
          '100%': { boxShadow: '0 0 20px #00ff9d, 0 0 40px #00ff9d, 0 0 60px #00ff9d' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': "linear-gradient(rgba(0, 168, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 168, 255, 0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
