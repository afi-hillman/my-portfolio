import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-bg)",
        "background-offset": "var(--color-bg-offset)",
        foreground: "var(--color-text)",
        "foreground-offset": "var(--color-text-offset)",
        border: "var(--color-border)",
        primary: "var(--color-primary)",
        "primary-offset": "var(--color-primary-offset)",
        "primary-light": "var(--color-primary-light)",
        secondary: "var(--color-secondary)",
        "secondary-offset": "var(--color-secondary-offset)",
        ring: "var(--color-ring)",
        muted: "var(--color-muted)",
        "muted-foreground": "var(--color-muted-foreground)",
        text: "var(--color-text)",
        "text-offset": "var(--color-text-offset)",
      },
    },
  },
} satisfies Config;
