import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#0A0A0A',
        bone: '#F5F5F4'
      },
      fontFamily: {
        sans: [ 'var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Roboto"', '"Helvetica Neue"', '"Arial"', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"' ],
        serif: [ 'var(--font-playfair)', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif' ],
        lato: [ 'var(--font-lato)', 'system-ui', 'sans-serif' ],
        italiana: [ 'var(--font-italiana)', 'serif' ],
      },
    },
  },
  plugins: []
}

export default config
