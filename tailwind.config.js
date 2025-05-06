/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Tagesschrift: ['Tagesschrift', 'system-ui'],
        poppins: ['Poppins', 'sans-serif'],
        Playfair : ['Playfair Display', 'serif'],
        Montserrat : ['Montserrat', 'sans-serif'],
        Dancing : ['Dancing Script', 'sans-serif'],
        Playwrite : ['Playwrite RO', 'cursive'],
        Lora : ['Lora', 'serif'],
       
      
       

      },
    },
  },
  plugins: [],
}
