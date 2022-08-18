
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
    content: ["src/**/*.{js,jsx,ts,tsx}"],
    plugins: [
        // require("@tailwindcss/typography"),
        require("daisyui")
    ],
    theme: {
        extend: {
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
