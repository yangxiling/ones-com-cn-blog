import onesDesignPreset from '@ones-design/tailwind-preset';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [
    onesDesignPreset
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} 