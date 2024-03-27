/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        image1: "url('./hero-bg1.jpg')",
        image2: "url('./hero-bg2.jpg')",
        image3: "url('./hero-bg3.jpg')",
        image4: "url('./hero-bg4.jpg')",
        image5: "url('./interior-design.jpg')",
        contacts: "url('./contacts.png')",
        about: "url('./B3.jpg')",
      },
    },
    plugins: [],
  },
};
