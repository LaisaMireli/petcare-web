import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          purple: '#E5E4F7', // Fundo lilás claro
          purpleDark: '#B4B0E5', // Detalhes lilás
          orange: '#FF7F50', // Botões laranjas
          orangeHover: '#FF6347',
          dark: '#2D3748', // Texto principal
          gray: '#A0AEC0' // Texto secundário
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
