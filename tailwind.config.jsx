/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // <-- include all your component files
    ],
    theme: {
        extend: {
            fontFamily: {
                jakarta: ['Plus Jakarta Sans', 'sans-serif'],
                manrope: ['Manrope', 'sans-serif']
            },
        },
    },
    plugins: [],
}
