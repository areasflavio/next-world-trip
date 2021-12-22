import { SimpleGrid, GridItem, Image, Stack, Text } from '@chakra-ui/react';
import { Type } from './Type';

export function TravelTypes() {
  return (
    <SimpleGrid
      height={'36'}
      maxW={['1160px']}
      columns={[5]}
      mx="auto"
      my={['20']}
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
      <GridItem>
        <Type icon="museum" text="clássico" />
      </GridItem>
      <GridItem>
        <Type icon="earth" text="e mais..." />
      </GridItem>
    </SimpleGrid>
  );
}
