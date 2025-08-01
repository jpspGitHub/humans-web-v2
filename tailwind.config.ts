import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00214d",
          50: "#f0f7ff",
          100: "#e0efff",
          200: "#b9dfff",
          300: "#7cc4ff",
          400: "#36a5ff",
          500: "#0c87f0",
          600: "#0069cd",
          700: "#0054a6",
          800: "#004789",
          900: "#003d71",
          950: "#00214d",
        },
        "primary-accent": {
          DEFAULT: "#1E98a8",
          50: "#f0fdff",
          100: "#ccf7fe",
          200: "#9aeefd",
          300: "#5ddefa",
          400: "#1cc5f0",
          500: "#1E98a8",
          600: "#0e7c8c",
          700: "#126372",
          800: "#17505c",
          900: "#18434e",
          950: "#0a2b35",
        },
        "secondary-accent": {
          DEFAULT: "#629841",
          50: "#f4f8f0",
          100: "#e6efdd",
          200: "#cee0be",
          300: "#abc995",
          400: "#87b06d",
          500: "#629841",
          600: "#4d7a32",
          700: "#3d5f2a",
          800: "#334c25",
          900: "#2c4122",
          950: "#15230f",
        },
        neutral: {
          DEFAULT: "#d9d9d9",
          50: "#f9f9f9",
          100: "#f3f3f3",
          200: "#e7e7e7",
          300: "#d9d9d9",
          400: "#c4c4c4",
          500: "#a8a8a8",
          600: "#8b8b8b",
          700: "#6f6f6f",
          800: "#5a5a5a",
          900: "#4a4a4a",
          950: "#2e2e2e",
        },
        "light-neutral": "#ffffff",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        title: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
