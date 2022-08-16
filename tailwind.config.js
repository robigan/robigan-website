module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    media: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#FFB400"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};