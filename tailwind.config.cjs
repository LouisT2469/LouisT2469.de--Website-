const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
    content: ['./src/**/*.{html,js,svelte,ts}'],

    safelist: [
        {
          pattern: /border-b-(red|green|blue|purple|orange|yellow|teal|fuchsia)-600/,
        },
        {
            pattern: /border-l-(red|green|blue|purple|orange|yellow|teal|fuchsia)-600/,
          }
      ],

    theme: {
        extend: {}
    },

    plugins: []
});