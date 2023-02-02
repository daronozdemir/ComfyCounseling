module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ECDAD2",
          secondary: "#BA8C85",
          accent: "#8E6875",
          neutral: "#A17462",
          "base-100": "#252737",
          info: "#5e548e",
          success: "#91A7AA",
          warning: "#ffee93",
          error: "#e56b6f",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
