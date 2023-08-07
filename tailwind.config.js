/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        yellow: "#eeff25",
        "dark-01": "#151515",
        gray: {
          "100": "#1f2937",
          "200": "#111827",
          "300": "rgba(21, 21, 21, 0.5)",
          "400": "rgba(21, 21, 21, 0.6)",
        },
        "dark-02": "#444",
        darkgray: "#a1a1a1",
        "dark-06": "#e8e8e8",
        "dark-07": "#f3f3f3",
        peru: "#d1a054",
        goldenrod: "#d99904",
        darkgoldenrod: "#bb8506",
        "dark-03": "#737373",
        gainsboro: "#d9d9d9",
      },
      fontFamily: {
        inter: "Inter",
        cinzel: "Cinzel",
      },
      borderRadius: {
        "181xl": "200px",
      },
    },
    fontSize: {
      xl: "1.25rem",
      "5xl": "1.5rem",
      "13xl": "2rem",
      base: "1rem",
      "21xl": "2.5rem",
      "69xl": "5.5rem",
      "26xl": "2.81rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
