import { Heading } from '@chakra-ui/react';
import Head from 'next/head';

import { HomePageBanner } from '../components/Banner/HomePageBanner';
import { Divider } from '../components/Divider';
import { Header } from '../components/Header';
import { ContinentsSlider } from '../components/ContinentsSlider';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome | worldtrip</title>
      </Head>

      <Header />

      <HomePageBanner />

      <TravelTypes />

      <Divider />

      <Heading
        as="h2"
        fontWeight="500"
        fontSize={['4xl']}
        lineHeight={['tall']}
        textAlign="center"
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>

      <ContinentsSlider />
    </>
  );
}
