module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
        footer: "#00043f",
      }),
      gradientColorStops: (theme) => ({
        "from-newsletter": "#383838",
        "via-newsletter": "#191919",
      }),
      colors: {
        footer: "rgba(255, 255, 255, 0.603)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
