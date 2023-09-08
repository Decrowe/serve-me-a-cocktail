const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'default-lite': '#faf9fb',
        'primary-lite': '#c96448',
        'secondary-lite': '#d8f74f',
        'accent-lite': '#7af4de',
        'neutral-lite': '#23283e',
        'info-lite': '#8fb6dc',
        'success-lite': '#22a085',
        'warning-lite': '#f2a436',
        'error-lite': '#fc5484',

        'default-dark': '#3f3e41',
        'primary-dark': '#b4d123',
        'secondary-dark': '#e0f495',
        'accent-dark': '#d17c40',
        'neutral-dark': '#231e24',
        'info-dark': '#b1d9e7',
        'success-dark': '#18815b',
        'warning-dark': '#d9b608',
        'error-dark': '#ef4839',
      },
    },
  },
  plugins: [],
};
