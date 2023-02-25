import { extendTheme } from '@chakra-ui/react';

const font = {
  heading: 'Poppins, sans-serif',
  body: 'Poppins, sans-serif',
};

const styles = {
  global: {
    body: {
      fontFamily: 'Poppins',
    },
    '*': {
      margin: 0,
      padding: 0,
    },
  },
};

const theme = extendTheme({
  styles,
  font,
});

export default theme;
