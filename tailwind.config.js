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
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};