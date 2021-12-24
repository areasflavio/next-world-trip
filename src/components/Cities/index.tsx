import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { City } from './City';

type City = {
  city: string;
  country: string;
  thumbnail_url: string;
  flag_url: string;
};

interface CitiesProps {
  cities: City[];
}

export function Cities({ cities }: CitiesProps) {
  return (
    <Flex flexDir={['column']}>
      <Heading as="h2" fontSize={['2xl', '4xl']} fontWeight={['500']}>
        Cidades +100
      </Heading>

      <SimpleGrid columns={[1, 2, 3, 4]} gap={['12']} mt={['5', '10']}>
        {cities.map((city) => (
          <City key={city.city} city={city} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
