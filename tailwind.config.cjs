/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                my_bg_image: "url('/ll.gif')",

                my_bg_how: "url('/rr.gif')",
                my_bg_about: "url('/33.png')",
                my_bg_images: "url('/kam.gif')",
            },
        },
    },
    plugins: [],
};
