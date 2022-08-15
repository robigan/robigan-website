module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    media: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    dark: "#4f1732",
                    DEFAULT: "#78244C",
                    light: "#c43b7d",
                },
                background: {
                    dark: "#202731",
                    DEFAULT: "#2D4159",
                },
            },
            screens: {
                "mo-sm": "320px",
                "mo-md": "411px",
                "contact": "380px"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};