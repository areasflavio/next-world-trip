import { Flex, Stack, Heading, Text, Image } from '@chakra-ui/react';

export function HomePageBanner() {
  return (
    <Flex
      as="section"
      bgImage="url('/assets/banner-background.png')"
      bgPosition={['100% 20%', '100% 20%', '100% 30%']}
      bgRepeat="no-repeat"
      bgSize="cover"
      justify={['center', 'space-between']}
      align="center"
      w="100%"
      mx={['0', 'auto']}
      px={['4', '8', '8', '18', '36']}
      h={['163px', '250px', '300px', '335px']}
    >
      <Stack>
        <Heading
          as="h2"
          fontSize={['xl', '4xl']}
          fontWeight="500"
          lineHeight={['1.875rem', '3.375rem']}
          color="light.600"
        >
          5 Continentes,
          <br />
          infinitas possibilidades.
        </Heading>

        <Text
          as="p"
          color="light.400"
          fontSize={['sm', 'xl']}
          mt={['5']}
          maxW={['100%', '100%', '100%', '550px']}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Stack>

      <Image
        src="/assets/airplane.svg"
        alt="airplane"
        transform={[
          'translateY(0px)',
          'translateY(0px)',
          'translateY(32px)',
          'translateY(48px)',
        ]}
        display={['none', 'none', 'flex', 'flex']}
      />
    </Flex>
  );
}
