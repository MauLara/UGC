import { defineConfig, install } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';

export const config = defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf4f8',
          100: '#fbe8f1',
          500: '#ec4899', // Pink vibrant
          600: '#db2777',
          700: '#be185d',
          900: '#831843',
        },
        accent: {
          purple: '#8b5cf6',
          indigo: '#6366f1',
          gold: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
});

install(config);
