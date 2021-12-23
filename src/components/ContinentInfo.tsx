import { Flex, Image, Stack, Text, Tooltip } from '@chakra-ui/react';

export function ContinentInfo() {
  return (
    <>
      <Flex
        as="section"
        gap={['4', '16']}
        flexDir={['column', 'column', 'row']}
      >
        <Text
          as="p"
          maxW={['100%', '100%', '450px', '600px']}
          fontSize={['sm', 'lg', 'xl', '2xl']}
          textAlign={['justify']}
        >
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <Flex
          alignItems={['center']}
          justify={['space-around', 'space-around', 'space-between']}
          w={['100%']}
        >
          <Stack
            display="flex"
            alignItems={['start', 'center']}
            fontWeight={['400', '600']}
          >
            <Text
              as="strong"
              fontSize={['2xl', '3xl', '3xl', '5xl']}
              color="brand.900"
            >
              50
            </Text>
            <Text as="small" fontSize={['lg', 'lg', '2xl']}>
              países
            </Text>
          </Stack>
          <Stack
            display="flex"
            alignItems={['start', 'center']}
            fontWeight={['400', '600']}
          >
            <Text
              as="strong"
              fontSize={['2xl', '3xl', '3xl', '5xl']}
              color="brand.900"
            >
              60
            </Text>
            <Text as="small" fontSize={['lg', 'lg', '2xl']}>
              línguas
            </Text>
          </Stack>
          <Stack
            display="flex"
            alignItems={['start', 'center']}
            fontWeight={['400', '600']}
          >
            <Text
              as="strong"
              fontSize={['2xl', '3xl', '3xl', '5xl']}
              color="brand.900"
            >
              27
            </Text>
            <Text
              as="small"
              fontSize={['lg', 'lg', '2xl']}
              display={['flex']}
              align={['center']}
              flex={[1]}
            >
              cidades +100
              <Tooltip label="As cidades +100 são as cidades que  estão entre as 100 mais visitadas do mundo.">
                <Image src={`/assets/icons/info.svg`} alt="Info" ml={['1']} />
              </Tooltip>
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
