import { Flex, Stack, Heading, Text, Image } from '@chakra-ui/react';

export function ContinentPageBanner() {
  return (
    <Flex
      as="section"
      bgImage="url('https://images.unsplash.com/photo-1473896100090-53523650d4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')"
      bgPosition="100% 30%"
      bgRepeat="no-repeat"
      bgSize="cover"
      justify={['center', 'center', 'space-between']}
      align={['center', 'center', 'flex-end']}
      w="100%"
      mx="auto"
      px={['36']}
      py={['16']}
      h={['150px', '350px', '500px']}
    >
      <Heading
        as="h2"
        fontSize={['2xl', '4xl', '5xl']}
        fontWeight="600"
        color="light.600"
      >
        Europa
      </Heading>
    </Flex>
  );
}
