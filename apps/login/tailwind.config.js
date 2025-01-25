import { createGlobPatternsForDependencies } from '@nx/angular/tailwind';
import { join } from 'path';

const config = {
  darkMode: 'class', // Use 'media' for automatic dark mode or 'class' for manual
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      // Extend default theme or customize dark mode variants
      colors: {
        dark: {
          bg: '#1a202c', // Custom dark background color
          text: '#cbd5e0', // Custom dark text color
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

export default config;
