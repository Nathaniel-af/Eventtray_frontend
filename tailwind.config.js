module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        128: "36rem",
      },
    },
    fontFamily: {
      inter: ["Inter"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-labeled-groups")(["1"]),
  ],
};
