/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        // ── Batech design tokens — dark + cyan only ──
        batech: {
          bg: "#080808",          // page background
          surface: "#0C0C0C",     // sections / chrome
          card: "#0E0E0E",        // card backgrounds
          cardHover: "#131313",   // card hover
          border: "#1A1A1A",      // default borders
          borderStrong: "#2A2A2A",// stronger borders / inputs
          text: "#F0F0F0",        // primary text
          dim: "#888888",         // secondary text
          muted: "#555555",       // tertiary text
          quiet: "#333333",       // labels / disabled
          ghost: "#222222",       // very subtle
        },
        cyan: {
          DEFAULT: "#00C2E0",
          bright: "#00D4F5",
          dim: "#007A8F",
          tint: "rgba(0,194,224,0.10)",
          border: "rgba(0,194,224,0.25)",
        },
        // Legacy brand kept for compatibility — points to cyan
        brand: {
          50: "#E0F8FC",
          100: "#A8E8F2",
          500: "#00C2E0",
          600: "#00C2E0",
          700: "#007A8F",
          900: "#003A45",
        },
      },
      boxShadow: {
        glow: "0 0 24px rgba(0,194,224,0.20)",
        glowStrong: "0 0 36px rgba(0,194,224,0.35)",
      },
    },
  },
  plugins: [],
};
