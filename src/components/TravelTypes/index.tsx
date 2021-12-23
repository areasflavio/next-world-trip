import { SimpleGrid, GridItem, Image, Stack, Text } from '@chakra-ui/react';
import { Type } from './Type';

export function TravelTypes() {
  return (
    <SimpleGrid
      height={['48', '36', '72', '36']}
      maxW={['6xl']}
      columns={[2, 3, 3, 5]}
      mx="auto"
      my={['9', '20']}
    >
      <GridItem>
        <Type icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Type icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <Type icon="building" text="moderno" />
      </GridItem>
      <GridItem translateX={['50%']}>
        <Type icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Type icon="earth" text="e mais..." />
      </GridItem>
    </SimpleGrid>
  );
}
