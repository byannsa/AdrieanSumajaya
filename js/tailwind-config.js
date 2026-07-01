tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Background
        background: "#0B0B0B",
        surface: "#111111",

        "surface-container": "#151515",
        "surface-container-low": "#121212",
        "surface-container-high": "#1A1A1A",
        "surface-container-highest": "#202020",

        // Text
        "on-background": "#FFFFFF",
        "on-surface": "#FFFFFF",
        "on-surface-variant": "#B5B5B5",

        // Primary
        primary: "#FFFFFF",
        "on-primary": "#111111",

        // Accent
        secondary: "#D62828",
        "secondary-container": "#B91C1C",
        "on-secondary": "#FFFFFF",

        // Border
        outline: "#2A2A2A",
        "outline-variant": "#333333",

        // Error
        error: "#EF4444",
        "on-error": "#FFFFFF",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      spacing: {
        "margin-mobile": "20px",
        "section-gap": "120px",
        gutter: "24px",
        "margin-desktop": "64px",
        base: "8px",
        "container-max": "1280px",
      },
      fontFamily: {
        "headline-md": ["Montserrat"],
        "display-lg": ["Montserrat"],
        "body-md": ["Inter"],
        "display-lg-mobile": ["Montserrat"],
        "label-caps": ["Inter"],
        "body-lg": ["Inter"],
        button: ["Montserrat"],
      },
      fontSize: {
        "headline-md": [
          "24px",
          {
            lineHeight: "1.3",
            fontWeight: "600",
          },
        ],
        "display-lg": [
          "48px",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "body-md": [
          "16px",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "display-lg-mobile": [
          "32px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
            fontWeight: "700",
          },
        ],
        "label-caps": [
          "12px",
          {
            lineHeight: "1",
            letterSpacing: "0.08em",
            fontWeight: "600",
          },
        ],
        "body-lg": [
          "18px",
          {
            lineHeight: "1.6",
            fontWeight: "400",
          },
        ],
        button: [
          "14px",
          {
            lineHeight: "1",
            letterSpacing: "0.02em",
            fontWeight: "600",
          },
        ],
      },
    },
  },
};
