/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Dark Mode Colors (default)
        primary: "#0a0e27",
        surface: "#1a1f3a",
        "surface-light": "#242d47",
        border: "#3a4558",

        // Accent Colors
        accent: "#00d9ff",
        "accent-secondary": "#ff6b4a",
        "accent-tertiary": "#a78bfa",

        // Text Colors
        text: "#f5f7fa",
        "text-muted": "#8b92a9",
        "text-dim": "#5a6170",

        // State Colors
        success: "#10b981",
        warning: "#f59e0b",
        danger: "#ef4444",
      },

      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.05em" }],
        sm: ["0.875rem", { lineHeight: "1.5rem" }],
        base: ["1rem", { lineHeight: "1.6rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem", fontWeight: "600" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem", fontWeight: "700" }],
        "5xl": ["3rem", { lineHeight: "3.5rem", fontWeight: "700" }],
        "6xl": ["3.75rem", { lineHeight: "4rem", fontWeight: "700" }],
      },

      borderRadius: {
        none: "0px",
        sm: "4px",
        base: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
        full: "9999px",
      },

      boxShadow: {
        none: "none",
        sm: "0 1px 2px 0 rgba(0, 217, 255, 0.05)",
        base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 12px 0 rgba(0, 217, 255, 0.15), 0 2px 4px 0 rgba(0, 0, 0, 0.1)",
        lg: "0 12px 24px 0 rgba(0, 217, 255, 0.25), 0 4px 8px 0 rgba(0, 0, 0, 0.15)",
        xl: "0 20px 40px 0 rgba(0, 217, 255, 0.3)",
        glow: "0 0 20px rgba(0, 217, 255, 0.4), 0 0 40px rgba(0, 217, 255, 0.2)",
        "glow-warm":
          "0 0 20px rgba(255, 107, 74, 0.4), 0 0 40px rgba(255, 107, 74, 0.2)",
        "glow-purple":
          "0 0 20px rgba(167, 139, 250, 0.4), 0 0 40px rgba(167, 139, 250, 0.2)",
      },

      transitionDuration: {
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "pulse-ring": "pulse-ring 1.5s infinite",
        "terminal-blink": "terminal-blink 0.8s infinite",
        "spin-slow": "spin 20s linear infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(0, 217, 255, 0.4), 0 0 40px rgba(0, 217, 255, 0.2)",
          },
          "50%": {
            boxShadow:
              "0 0 30px rgba(0, 217, 255, 0.6), 0 0 60px rgba(0, 217, 255, 0.3)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(0, 217, 255, 0.7)" },
          "70%": { boxShadow: "0 0 0 10px rgba(0, 217, 255, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(0, 217, 255, 0)" },
        },
        "terminal-blink": {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },

      maxWidth: {
        container: "1200px",
      },

      zIndex: {
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        cursor: "9999",
        modal: "9998",
        dropdown: "9997",
      },
    },
  },

  plugins: [],
};
