/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                "primary": "#bd580f",
                "ink": "#1b130d",
                "paper-warm": "#F4EFD9",
                "paper-aged": "#f2efe9",
                "background-light": "#F4EFD9",
                "background-dark": "#1a120b",
            },
            fontFamily: {
                "display": ["EB Garamond", "serif"],
                "body": ["Inter", "sans-serif"],
                "sans": ["Inter", "sans-serif"], // Adding sans mapping for convenience
                "serif": ["EB Garamond", "serif"], // Adding serif mapping for convenience
            },
            borderRadius: {
                "DEFAULT": "0.5rem",
                "lg": "1rem",
                "xl": "1.5rem",
                "full": "9999px"
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}
