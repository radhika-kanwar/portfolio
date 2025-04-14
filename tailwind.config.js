/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/components/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        academia: {
          primary: '#ADBBDA',
          secondary: '#7091E6',
          accent: '#3D52A0',
          card: '#E6F2FF',
          text: '#00000', 
        }
      },
      fontFamily: {
        'serif': ['Garamond', 'Playfair Display', 'serif'],
        'sans': ['Poppins', 'LibreBaskerville', 'serif'],
      }
    },
  },
  plugins: ['@tailwindcss/typography'],
}