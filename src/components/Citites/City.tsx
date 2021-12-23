import { Flex, Image, Text } from '@chakra-ui/react';

export function City() {
  return (
    <Flex
      flexDir={['column']}
      bg="light.900"
      maxW={['64']}
      borderRadius={['4']}
    >
      <Image
        src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Londres"
        borderTopRadius={['4']}
      />

      <Flex
        p={['6']}
        alignItems={['center']}
        justify={['space-between']}
        borderX="1px"
        borderBottom="1px"
        borderColor="brand.500"
        borderBottomRadius={['4']}
      >
        <Flex flexDir={['column']} gap={['3']}>
          <Text as="strong" fontSize={['xl']} fontWeight={['600']}>
            Londres
          </Text>
          <Text as="small" color="dark.400" fontSize={['md']}>
            Reino Unido
          </Text>
        </Flex>

        <Image
          src="https://countryflagsapi.com/png/gb"
          alt="GB"
          width={['30px']}
          height={['30px']}
          borderRadius={['100%']}
        />
      </Flex>
    </Flex>
  );
}
