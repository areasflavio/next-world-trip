import { Flex, Stack, Heading, Text, Image } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      as="section"
      bgImage="url('/assets/banner-background.png')"
      bgPosition="100% 30%"
      bgRepeat="no-repeat"
      bgSize="cover"
      justify={['space-between']}
      align="center"
      w="100%"
      mx="auto"
      px={['36']}
      h={['335px']}
    >
      <Stack>
        <Heading
          as="h2"
          fontSize="4xl"
          fontWeight="500"
          lineHeight="3.375rem"
          color="light.600"
        >
          5 Continentes,
          <br />
          infinitas possibilidades.
        </Heading>

        <Text
          as="p"
          color="light.400"
          fontSize={['xl']}
          mt={['5']}
          maxW={['550px']}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Stack>

      <Image
        src="/assets/airplane.svg"
        alt="airplane"
        transform="translateY(48px)"
      />
    </Flex>
  );
}
