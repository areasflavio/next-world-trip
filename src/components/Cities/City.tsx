import { Flex, Image, Text } from '@chakra-ui/react';

type City = {
  city: string;
  country: string;
  thumbnail_url: string;
  flag_url: string;
};

interface CityProps {
  city: City;
}

export function City({ city }: CityProps) {
  return (
    <Flex
      flexDir={['column']}
      bg="light.900"
      maxW={['64']}
      borderRadius={['4']}
      mx={['auto']}
    >
      <Image
        src={city.thumbnail_url}
        alt={city.city}
        borderTopRadius={['4']}
        w={['64']}
        height={['173px']}
        objectFit={['cover']}
      />

      <Flex
        p={['6']}
        alignItems={['center']}
        justify={['space-between']}
        borderX="1px"
        borderBottom="1px"
        borderColor="brand.500"
        borderBottomRadius={['4']}
        mt={['auto']}
      >
        <Flex flexDir={['column']} gap={['3']}>
          <Text as="strong" fontSize={['xl']} fontWeight={['600']}>
            {city.city}
          </Text>
          <Text as="small" color="dark.400" fontSize={['md']}>
            {city.country}
          </Text>
        </Flex>

        <Image
          src={city.flag_url}
          alt={city.country}
          width={['30px']}
          height={['30px']}
          borderRadius={['100%']}
          border="1px"
          borderColor="brand.500"
          objectFit={['cover']}
        />
      </Flex>
    </Flex>
  );
}
