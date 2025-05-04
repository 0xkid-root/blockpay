module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-blue': '0px 4px 50px rgba(0, 157, 255, 0.25)',
        'md-blue': '0px 4px 20px rgba(0, 157, 255, 0.15)',
        'navbar': '0px 2px 10px rgba(0, 0, 0, 0.5)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
        'soft': '0px 4px 20px rgba(255, 255, 255, 0.05)',
      },
      textShadow: {
        'custom': '0px 4px 50px rgba(0, 157, 255, 0.25)',
        'sm': '0px 2px 4px rgba(0, 157, 255, 0.2)',
        'glow': '0px 0px 6px rgba(0, 157, 255, 0.4)',
      },
      colors: {
        customDark: "#000000",
        customDarkBlue: "#0A192F",
        customBlue: "#00A6FF",
        customLightBlue: "#64B6FF",
        customBlue2: "#4C8FF5",
        customInput: "#0F1624",
        customBg: "#040C18",
        customGray: "#D1D5DB",
        customAccent: "#00D8FF",
        customHighlight: "#0066CC",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.6s ease-out',
        zoomIn: 'zoomIn 0.5s ease-in-out',
        underlineGrow: 'underlineGrow 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        underlineGrow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};