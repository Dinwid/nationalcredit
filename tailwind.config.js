module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "*.html",
  ],

  theme: {
    extend: {
      boxShadow: {
        custom: "0 0 0 5px #c7c3c8",
      },
      fontSize: {
        xs: [
          "0.75rem",
          {
            // 12px
            lineHeight: "1rem", // 16px
          },
        ],
        "3xl": [
          "1.25rem",
          {
            // 28px
            lineHeight: "2.125rem", // 34px
          },
        ],
        "8xl": [
          "2.5rem",
          {
            // 40px
            lineHeight: "3.8125rem", // 61px
          },
        ],
      },
      colors: {
        black: "#303633",
        white: "#FFFFFF",
        blue: "#0072CE",
        whiteGray: "#F7F9FA",
        border: "#8E9290",
        headerGray: "#717171",

        // добавьте столько цветов, сколько вам нужно
      },

      maxWidth: {
        "container-sm": "540px",
        "container-md": "720px",
        "container-lg": "960px",
        "container-xl": "1173px",
        "container-2xl": "1300px",
        "container-3xl": "1500px",
        "container-4xl": "1600px",
      },
      screens: {
        xs: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1600px",
        "4xl": "1920px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
// text-xs	font-size: 0.75rem; /* 12px */
// line-height: 1rem; /* 16px */
// text-sm	font-size: 0.875rem; /* 14px */
// line-height: 1.25rem; /* 20px */
// text-base	font-size: 1rem; /* 16px */
// line-height: 1.5rem; /* 24px */
// text-lg	font-size: 1.125rem; /* 18px */
// line-height: 1.75rem; /* 28px */
// text-xl	font-size: 1.25rem; /* 20px */
// line-height: 1.75rem; /* 28px */
// text-2xl	font-size: 1.5rem; /* 24px */
// line-height: 2rem; /* 32px */
// text-3xl	font-size: 1.875rem; /* 30px */
// line-height: 2.25rem; /* 36px */
// text-4xl	font-size: 2.25rem; /* 36px */
// line-height: 2.5rem; /* 40px */
// text-5xl	font-size: 3rem; /* 48px */
// line-height: 1;
// text-6xl	font-size: 3.75rem; /* 60px */
// line-height: 1;
// text-7xl	font-size: 4.5rem; /* 72px */
// line-height: 1;
// text-8xl	font-size: 6rem; /* 96px */
// line-height: 1;
// text-9xl	font-size: 8rem; /* 128px */
// line-height: 1;
