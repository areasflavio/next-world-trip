import { Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Prismic from '@prismicio/client';

import { HomePageBanner } from '../components/Banner/HomePageBanner';
import { Divider } from '../components/Divider';
import { Header } from '../components/Header';
import { ContinentsSlider } from '../components/ContinentsSlider';
import { TravelTypes } from '../components/TravelTypes';
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';

type Continent = {
  slug: string;
  title: string;
  subtitle: string;
  image_url: string;
};

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
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
        fontSize={['xl', '2xl', '4xl']}
        lineHeight={['tall']}
        textAlign="center"
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>

      <ContinentsSlider continents={continents} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'continent'),
  ]);

  const continents = response.results.map((continent) => ({
    slug: continent.uid,
    title: continent.data.title,
    subtitle: continent.data.subtitle,
    image_url: continent.data.slider_image.url,
  }));

  return {
    props: {
      continents,
    },
    revalidate: 60 * 60 * 24 * 30, // 30 days
  };
};
