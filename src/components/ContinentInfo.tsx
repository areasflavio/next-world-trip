import { Flex, Image, Stack, Text, Tooltip } from '@chakra-ui/react';

export function ContinentInfo() {
  return (
    <>
      <Flex as="section" gap={['16']}>
        <Text
          as="p"
          maxW={['600px']}
          fontSize={['2xl']}
          textAlign={['justify']}
        >
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <Flex alignItems={['center']} justify="space-between" w={['100%']}>
          <Stack display="flex" alignItems={['center']} fontWeight={['600']}>
            <Text as="strong" fontSize={['5xl']} color="brand.900">
              50
            </Text>
            <Text as="small" fontSize={['2xl']}>
              países
            </Text>
          </Stack>
          <Stack display="flex" alignItems={['center']} fontWeight={['600']}>
            <Text as="strong" fontSize={['5xl']} color="brand.900">
              60
            </Text>
            <Text as="small" fontSize={['2xl']}>
              línguas
            </Text>
          </Stack>
          <Stack display="flex" alignItems={['center']} fontWeight={['600']}>
            <Text as="strong" fontSize={['5xl']} color="brand.900">
              27
            </Text>
            <Text
              as="small"
              fontSize={['2xl']}
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
