import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { City } from './City';

export function Cities() {
  return (
    <Flex flexDir={['column']}>
      <Heading as="h2" fontSize={['2xl', '4xl']} fontWeight={['500']}>
        Cidades +100
      </Heading>

      <SimpleGrid columns={[1, 2, 3, 4]} gap={['12']} mt={['5', '10']}>
        <City />
        <City />
        <City />
        <City />
        <City />
      </SimpleGrid>
    </Flex>
  );
}
