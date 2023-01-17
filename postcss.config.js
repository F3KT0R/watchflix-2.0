const tailwindcss = require('tailwindcss');

export const plugins = [
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer')
]