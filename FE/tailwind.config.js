/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue':      '#2E86C1',
        'brand-blue-dark': '#1a6fa8',
        'brand-teal':      '#17A589',
        'accent-blue':     '#5DADE2',   /* light blue for heading accents */
        'brand-light':     '#EBF5FB',
        'text-dark':       '#1A252F',
        'text-muted':      '#5D6D7E'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
