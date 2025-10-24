/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Màu chính của Marshall
        marshallBlack: "#0F0F0F",
        marshallGold: "#CBA135",
        marshallGray: "#2C2C2C",
        marshallWhite: "#F5F5F5",
        
        // Các biến thể của màu vàng Marshall
        marshallGoldLight: "#E5BE4D",
        marshallGoldDark: "#A88929",
        
        // Các biến thể của màu xám Marshall
        marshallGrayLight: "#3D3D3D",
        marshallGrayDark: "#1A1A1A",
        
        // Màu phụ trợ
        marshallAccent1: "#8B7355", // Nâu đồng
        marshallAccent2: "#4A4A4A", // Xám kim loại
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'], // Font cho tiêu đề, giống style Marshall
        body: ['Inter', 'sans-serif'],     // Font cho nội dung
      },
      boxShadow: {
        'marshall': '0 4px 6px -1px rgba(203, 161, 53, 0.1), 0 2px 4px -1px rgba(203, 161, 53, 0.06)',
        'marshall-lg': '0 10px 15px -3px rgba(203, 161, 53, 0.1), 0 4px 6px -2px rgba(203, 161, 53, 0.05)',
      },
      backgroundImage: {
        'marshall-gradient': 'linear-gradient(to right, #2C2C2C, #0F0F0F)',
        'marshall-gold-gradient': 'linear-gradient(to right, #CBA135, #A88929)',
      },
      borderWidth: {
        'marshall': '3px',
      },
      spacing: {
        'marshall': '0.5rem',
        'marshall-lg': '1rem',
        'marshall-xl': '2rem',
      },
      animation: {
        'marshall-pulse': 'marshall-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        'marshall-pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .7 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}