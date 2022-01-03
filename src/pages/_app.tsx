import { ChakraProvider } from '@chakra-ui/react';

import { Footer } from '../components/Footer';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { theme } from '../styles/theme';
import '../styles/continents-slider.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />

      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
