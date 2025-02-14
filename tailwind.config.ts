/* eslint-disable global-require */
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  presets: [require("./utility.preset")],
  content: ["./pages/**/*.{ts,tsx}", "./src/shadcn/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  safelist: ["laptop:w-[calc(var(--full)-var(--\\_side-nav-size))]"],

  theme: {
    screens: {
      mobile: "360px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
    },

    borderRadius: {
      DEFAULT: "0.25rem",
      sm: "0.5rem",
      md: "0.75rem",
      lg: "1rem",
      full: "9999rem",
      none: "0",
    },

    colors: {
      transparent: "transparent",
      primary: {
        DEFAULT: "hsl(var(--color-primary))",
        "7": "hsl(var(--color-primary) / 0.07)",
        "10": "hsl(var(--color-primary) / 0.1)",
        "20": "hsl(var(--color-primary) / 0.2)",

        bg: "hsl(var(--color-primary-background))",
        fg: "hsl(var(--color-primary-foreground))",
      },

      secondary: {
        bg: "hsl(var(--color-secondary-background))",
      },

      card: {
        bg: "hsl(var(--color-card-background))",
        shade: "hsl(var(--color-card-shade))",
      },

      "subtitle-color": {
        DEFAULT: "hsl(var(--color-subtitle))",
        secondary: "hsl(var(--color-subtitle-secondary))",

        "50": "hsl(var(--color-subtitle) / 0.5)",
        "70": "hsl(var(--color-subtitle) / 0.7)",
        "80": "hsl(var(--color-subtitle) / 0.8)",
      },

      "pure-color": { DEFAULT: "hsl(var(--color-pure))", "50": "hsl(var(--color-pure) / 0.5)" },

      "icon-color": {
        DEFAULT: "hsl(var(--color-icon))",

        "10": "hsl(var(--color-icon) / 0.1)",
        "20": "hsl(var(--color-icon) / 0.2)",
        "50": "hsl(var(--color-icon) / 0.5)",
      },

      "border-color": { DEFAULT: "hsl(var(--color-border))" },
      "error-color": { DEFAULT: "hsl(var(--color-error))" },
    },

    fontFamily: {
      inter: ["var(--ff-inter)", ...defaultTheme.fontFamily.sans],
      "noto-serif": [
        "noto-serif",
        "var(--ff-inter)",
        "Shonar Bangla",
        "Kalpurush",
        "SolaimanLipi",
        "Bangla Sangam MN",
        "Vrinda",
        "Bangla Text",
        "sans-serif",
      ],
      kfgq: ["kfgq"],
    },

    extend: {
      fontSize: {
        "heading-1": ["var(--font-size-heading-1)", { lineHeight: "1.28" }],
        "heading-2": ["var(--font-size-heading-2)", { lineHeight: "1.4" }],
        "heading-3": ["var(--font-size-heading-3)", { lineHeight: "1.4" }],
        "heading-4": ["var(--font-size-heading-4)", { lineHeight: "1.4" }],
        "heading-5": ["var(--font-size-heading-5)", { lineHeight: "1.618" }],
        "heading-6": ["var(--font-size-heading-6)", { lineHeight: "1.618" }],

        body: ["var(--font-size-body)", { lineHeight: "1.618" }],
        title: ["var(--font-size-title)", { lineHeight: "1.618" }],
        base: ["var(--font-size-base)", { lineHeight: "1.618" }],
        subtitle: ["var(--font-size-subtitle)", { lineHeight: "1.618" }],
      },

      keyframes: {
        "toast-enter": {
          "0%": { transform: "translateY(100%) scale(0.9)" },
          "100%": { transform: "translateY(0) scale(1)" },
        },
        "toast-leave": {
          "0%": { transform: "translateY(0) scale(1)", opacity: "1" },
          "100%": { transform: "translateY(100%) scale(0.9)", opacity: "0" },
        },
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
        "toast-enter": "toast-enter 200ms cubic-bezier(.41,.73,.51,1.02)",
        "toast-leave": "toast-leave  100ms ease-in forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "dropdown-shadow": "var(--dropdown-shadow)",
      },
    },
  },

  plugins: [require("tailwindcss-animate"), require("tailwindcss-debug-screens")],
} satisfies Config;

export default config;
