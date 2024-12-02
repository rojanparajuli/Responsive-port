import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        blue: '0 0 10rem #1565C0', // Darker blue glow for visibility
      },
    },
    colors: {
      primary: {
        200: '#5E92F3', // Light muted blue
        400: '#3D6EC9', // Medium dark blue
        500: '#2C56A1', // Standard darker blue
        600: '#1C3A75', // Deepest blue for high contrast
      },
      secondary: {
        200: '#4DA8E2', // Muted cyan
        400: '#2A82B8', // Rich medium cyan
        500: '#1F6390', // Darker cyan for contrast
        600: '#124466', // Deep cyan for strong contrasts
      },
      accent: {
        200: '#6FA8DC', // Muted sky blue
        400: '#357ABD', // Rich darker sky blue
        500: '#255A8A', // Standard dark sky blue
        600: '#12355C', // Deepest sky blue for readability
      },
      black: '#0F0F0F', // Deep black for contrast
      white: '#FFFFFF', // Pure white for highlights
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
