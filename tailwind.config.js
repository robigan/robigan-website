// eslint-disable-next-line @typescript-eslint/no-var-requires
// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    media: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#FFB400",
                "black-light": "#101010",
                "black-lighter": "#3C3C3C"
            },
            spacing: {
                "48p": "48px",
                "72p": "72px",
                "96p": "96px"
            },
            width: {
                "full-0.5": "calc(100% - 0.5rem)",
            }
        },
        // screens: {
        //     "mo-sm": "240px",
        //     "mo-md": "320px",
        //     "mo-lg": "411px",
        //     ...defaultTheme.screens,
        // }
    },
    variants: {
        extend: {},
    },
    plugins: [],
};