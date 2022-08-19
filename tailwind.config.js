
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: ["src/**/*.{js,jsx,ts,tsx}"],
    plugins: [
        // require("@tailwindcss/typography"),
        require("daisyui")
    ],
    theme: {
        extend: {
          fontFamily: {
            'sans': ['pixel', ...defaultTheme.fontFamily.sans],
            'body': ['sgr', ...defaultTheme.fontFamily.sans],
          },
          colors: {
            sand: {
              100: "#dcc987",
              900: "#6e4d58",
            },
            primary: {
              100: "#5e5283",
              200: "#86507b"

            }
          }
        },
      },
    daisyui: {
        themes: ["synthwave"]
    }
}
