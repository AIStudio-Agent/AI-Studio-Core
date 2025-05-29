/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#00B39F', // Meshery teal
          600: '#0080FF',
          700: '#0066CC',
          800: '#004D99',
          900: '#003366',
        },
        secondary: {
          50: '#F0E6FF',
          100: '#E0CCFF',
          200: '#C299FF',
          300: '#A366FF',
          400: '#8533FF',
          500: '#647881', // Meshery secondary
          600: '#6600FF',
          700: '#5200CC',
          800: '#3D0099',
          900: '#290066',
        },
        accent: {
          50: '#FFF5E6',
          100: '#FFEACC',
          200: '#FFD699',
          300: '#FFC166',
          400: '#FFAD33',
          500: '#00D3A9', // Meshery accent
          600: '#FF8C00',
          700: '#CC7000',
          800: '#995400',
          900: '#663800',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
};