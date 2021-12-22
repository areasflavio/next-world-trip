import { Heading } from '@chakra-ui/react';
import Head from 'next/head';

import { Banner } from '../components/Banner';
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

      <Banner />

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
