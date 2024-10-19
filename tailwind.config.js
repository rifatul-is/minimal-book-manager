import COLOR_PALATTE from './src/constants/color_palette.js';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    default: COLOR_PALATTE.primary.default
                },
                secondary: {
                    default: COLOR_PALATTE.secondary.default,
                    dark: COLOR_PALATTE.secondary.dark,
                    light: COLOR_PALATTE.secondary.light
                },
                background: {
                    default: COLOR_PALATTE.background.default
                }
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                'roboto-slab': ['Roboto Slab', 'serif']
            }
        }
    },
    plugins: []
};
