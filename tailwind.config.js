
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
    content: ["src/**/*.{js,jsx,ts,tsx}"],
    plugins: [
        // require("@tailwindcss/typography"),
        require("daisyui")
    ],

    daisyui: {
        themes: ["synthwave"]
    }
}
