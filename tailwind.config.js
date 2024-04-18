module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Hindi: ["Palanquin Dark", "cursive"],
        laila: ["Laila", "serif"],
        inter: ["Inter", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Add this line
  ],
};
