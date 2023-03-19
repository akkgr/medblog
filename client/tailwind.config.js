/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    '!**/{bin,obj,node_modules}/**',
    '**/*.{razor,html,cshtml}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('current', '&.active');
    })
  ],
}
