/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#483629",
        lightbrown: "#79614A",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 5s linear infinite",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      rotate: {
        17: "17deg",
        35: "35deg",
        28: "28deg",
        20: "20deg",
        26: "26deg",
        8: "8deg",
        1.7: "1.70deg",
        4.42: "4.42deg",
        11.51: "11.51deg",
        23.95: "23.95deg",
        31.02: "31.02deg",
        36: "36deg",
        6: "6deg",
      },
    },
    plugins: [],
  },
};
