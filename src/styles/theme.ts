import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      900: '#FFBA08',
      500: '#EDD27F',
    },
    dark: {
      900: '#000000',
      600: '#47585B',
      400: '#999999',
      200: '#BAC2C8',
    },
    light: {
      900: '#FFFFFF',
      600: '#F5F8FA',
      400: '#DADADA',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'light.600',
        color: 'dark.600',
      },
    },
  },
});
