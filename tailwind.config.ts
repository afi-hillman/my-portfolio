import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: { DEFAULT: "#fffffe", offset: "#e3f6f5", dark: "#0e141b" },
        foreground: "#272343",
        text: {
          DEFAULT: "#272343",
          offset: "#2d334a",
          subtitle: "#818a91",
          dark: "#ffffff",
        },
        card: {
          DEFAULT: "#e3f6f5",
          foreground: "#2d334a",
        },
        popover: {
          DEFAULT: "#e3f6f5",
          foreground: "#2d334a",
        },
        primary: {
          DEFAULT: "#ff9d00",
          foreground: "#272343",
          offset: "#ffca00",
        },
        secondary: {
          DEFAULT: "#bae8e8",
          foreground: "#2d334a",
        },
        muted: {
          DEFAULT: "#e3f6f5",
          foreground: "#272343",
        },
        accent: {
          DEFAULT: "#ffca00",
          foreground: "#ff9d00",
        },
        destructive: {
          DEFAULT: "#d32f2f",
          foreground: "#ffffff",
        },
        gray: {
          DEFAULT: "#8A8A8A",
        },
        border: "#e3f6f5",
        input: "#e3f6f5",
        ring: "#e3f6f5",
        chart: {
          "1": "#ff9d00",
          "2": "#ffca00",
          "3": "#bae8e8",
          "4": "#2d334a",
          "5": "#272343",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
    },
  },
} satisfies Config;
