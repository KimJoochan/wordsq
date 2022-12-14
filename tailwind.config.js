/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Blackhan: [`"Black Han Sans", sans-serif`],
      },
      animation: {
        'fadeIn' : 'fadeInKeyframe 3s linear infinite',
        'fadeOut' : 'fadeOutKeyFrame 3s linear infinite',
        'busMove' : 'busMoveKeyFrame 3s ease-in-out',
      },
      keyframes: {
        fadeInKeyframe: {
          '0%' : { opacity:0 },
          '10%' : { opacity:100 },
          '90%' : { opacity:100 },
          '100%' : { opacity:0 }
        },
        fadeOutKeyFrame: {
          '0%' : { opacity:100 },
          '10%' : { opacity:0 },
          '90%' : { opacity:0 },
          '100%' : { opacity:100 }
        },
        busMoveKeyFrame: {
          '0%' : { left: '500px', opacity: 100 },
          '100%' : { left: '0px'},
        }
      },
    },
  },
  plugins: [],
}
