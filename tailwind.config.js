/** @type {import('tailwindcss').Config} */
export const purge = {
    enabled: true,
    content: ["./src/**/*.{html,js}"],
};
export const theme = {
    fontFamily: {
        'roboto': ['Roboto Mono']
    }
};
export const plugins = [];