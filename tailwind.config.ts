import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#0A0A0A',
        bone: '#F5F5F4'
      }
    }
  },
  plugins: []
}

export default config
