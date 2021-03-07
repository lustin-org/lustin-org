module.exports = {
  purge: {
    enabled: false,
    options: {
      safelist: [
        /data-theme$/,
      ],
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: require('daisyui/colors'),
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],

  daisyui: {
    styled: true,
    themes: true,
    rtl: false,
  },
}
