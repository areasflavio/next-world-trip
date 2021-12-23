import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { Header } from '../../components/Header';
import { ContinentPageBanner } from '../../components/Banner/ContinentPageBanner';
import {
  SimpleGrid,
  Flex,
  Text,
  Stack,
  Image,
  Tooltip,
} from '@chakra-ui/react';
import { ContinentInfo } from '../../components/ContinentInfo';
import { Cities } from '../../components/Citites';

export default function Continent() {
  return (
    <>
      <Head>
        <title>Welcome | worldtrip</title>
      </Head>

      <Header hasBackButton />

      <ContinentPageBanner />

      <Flex
        direction="column"
        gap={['20']}
        maxW={['1160px']}
        mx="auto"
        my={['20']}
      >
        <ContinentInfo />

        <Cities />
      </Flex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  console.log(slug);

  return {
    props: {},
  };
};
