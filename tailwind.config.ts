import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FED94B',
        secondary: '#3184E1',
      },
      backgroundImage: {
        background: 'url("/background.svg")',
      }
    },
  },
  plugins: [],
}
export default config
