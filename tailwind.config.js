module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    media: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    dark: "#761cca",
                    DEFAULT: "#8a2be2",
                },
                background: {
                    dark: "#202731",
                    DEFAULT: "#2D4159",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};