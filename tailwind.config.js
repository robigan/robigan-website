module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    media: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#FFB400"
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