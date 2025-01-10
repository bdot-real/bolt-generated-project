module.exports = {
      content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {
          colors: {
            primary: '#1A202C',
            secondary: '#2D3748',
            accent: '#4A5568',
            background: '#F7FAFC',
            'light-gray': '#EDF2F7',
            'dark-gray': '#4A5568',
          },
          fontFamily: {
            'sans': ['Inter', 'sans-serif'],
          },
        },
      },
      plugins: [],
    }
