/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        minecraft: {
          primary: '#29a8c2',    // Grass green
          secondary: '#7C5333',  // Dirt brown
          accent: '#5B8731',     // Leaves green
          dark: '#1D1D1D',       // Stone dark
          light: '#C6C6C6',      // Stone light
        },
      },
      fontFamily: {
        minecraft: ['MinecraftFont', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};