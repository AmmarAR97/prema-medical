/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2E7D32', // Medical Green
                    light: '#4CAF50',
                    dark: '#1B5E20',
                },
                secondary: {
                    DEFAULT: '#E3F2FD', // Soft Blue
                    dark: '#90CAF9', // A bit darker for text/borders if needed
                },
                charcoal: {
                    DEFAULT: '#263238', // Charcoal Text
                    light: '#37474F',
                    lighter: '#455A64',
                },
                medical: {
                    green: '#2E7D32',
                    blue: '#E3F2FD',
                },
                background: {
                    DEFAULT: '#FFFFFF',
                },
                accent: {
                    yellow: '#FACC15',
                    red: '#EF4444',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                aurora: {
                    '0%': { transform: 'translate(0, 0)' },
                    '100%': { transform: 'translate(-50%, -50%)' },
                }
            }
        },
    },
    plugins: [],
}
