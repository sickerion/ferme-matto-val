/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Sniglet', ...defaultTheme.fontFamily.sans],
        },
        extend: {
            colors: {
                'blue': '#016FB9',
                'milk': '#FBF5F3',
                'green': '#9deb86',
                'red': '#FF1D15',
                'orange': '#F46036',
                'warning': '#f7ec11',
            },
            screens: {
              '3xl': '1920px',
              '4xl': '2560px',
            },
            spacing: {
                '108': '27rem',
                '120': '30rem',
                '180': '45rem',
                '200': '50rem',
                '220': '55rem',
                '240': '60rem',
            }
        },
    },
    plugins: [],
};