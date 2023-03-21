/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./main/*.html'],
  theme: {
    screens : {
      sm: '375px' ,
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors : {
        InitialCyan:'rgba(43,179,177,255)',
        ShadeCyan: 'rgba(74,190,189,255)' ,
        BrightYellow: 'hsl(71, 73%, 54%)',
        LightGray: 'hsl(204, 43%, 93%)' ,
        GrayishBlue: 'hsl(218, 22%, 67%)'

      }
    },
  },
  plugins: [],
}
