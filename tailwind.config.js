
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
          },
          colors: {
            sand: {
                100: "#dcc987",
                900: "#6e4d58",
            },
          }
        },
      },
    daisyui: {
        themes: ["synthwave"]
    }
}
