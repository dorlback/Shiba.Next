/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                shibabrown: {
                    '100': '#f9e1c2',
                    '150': '#f8dab6',
                    '200': '#f8d3aa',
                    '250': '#f7cc9e',
                    '300': '#f7c492',
                    '350': '#f6bc86',
                    '400': '#f5b676',
                    '450': '#f4b06a',
                    '500': '#f3aa5e',
                    '550': '#f2a452',
                    '600': '#f19e46',
                    '650': '#f0983a',
                    '700': '#ef922e',
                    '750': '#ee8c22',
                    '800': '#ed8616',
                    '850': '#ec800a',
                    '900': '#eb7a00'
                },
                shibablue: {
                    '100': '#e8f1f5',
                    '150': '#dce9f0',
                    '200': '#d1e1eb',
                    '250': '#c5d9e6',
                    '300': '#bad1e1',
                    '350': '#aed9dc',
                    '400': '#a2d1d7',
                    '450': '#96c9d2',
                    '500': '#8ac1cd',
                    '550': '#7eb9c8',
                    '600': '#72b1c3',
                    '650': '#66a9be',
                    '700': '#5aa1b9',
                    '750': '#4e99b4',
                    '800': '#4291af',
                    '850': '#3689aa',
                    '900': '#2a81a5'
                },
            }
        },
    },
    plugins: [],
}
