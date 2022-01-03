import { Flex } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';

import { Header } from '../../components/Header';
import { ContinentPageBanner } from '../../components/Banner/ContinentPageBanner';
import { ContinentInfo } from '../../components/ContinentInfo';
import { Cities } from '../../components/Cities';

type Continent = {
  title: string;
  description: string;
  image_url: string;
  info: {
    countries: number;
    languages: number;
    cities: number;
  };
  cities100: {
    city: string;
    country: string;
    thumbnail_url: string;
    flag_url: string;
  }[];
};

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return (
    <>
      <Head>
        <title>{continent.title} | worldtrip</title>
      </Head>

      <Header hasBackButton />

      <ContinentPageBanner
        imgUrl={continent.image_url}
        imgTitle={continent.title}
      />

      <Flex
        direction="column"
        gap={['8', '20']}
        maxW={['1160px']}
        mx="auto"
        my={['6', '20']}
        px={['4']}
      >
        <ContinentInfo text={continent.description} info={continent.info} />

        <Cities cities={continent.cities100} />
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'continent'),
  ]);

  const paths = response.results.map((continent) => ({
    params: { slug: continent.uid },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID('continent', String(slug), {});

  const continent = {
    title: response.data.title,
    description: response.data.description,
    image_url: response.data.banner_image.url,
    info: {
      countries: response.data.countries,
      languages: response.data.languages,
      cities: response.data.cities,
    },
    cities100: response.data['cities-100'].map((cityObj) => ({
      city: cityObj.city,
      country: cityObj.country,
      thumbnail_url: cityObj.thumbnail.url,
      flag_url: cityObj.flag.url,
    })),
  };

  return {
    props: { continent },
    revalidate: 60 * 60 * 24 * 30, // 30 days
  };
};
