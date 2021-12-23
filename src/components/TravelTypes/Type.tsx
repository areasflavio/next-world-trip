import { Center, Image, Text } from '@chakra-ui/react';

interface TypeProps {
  icon: string;
  text: string;
}

export function Type({ icon, text }: TypeProps) {
  return (
    <Center flexDir={['row', 'row', 'column']}>
      <Image
        src={`/assets/icons/${icon}.svg`}
        alt={icon}
        display={['none', 'none', 'flex', 'flex']}
      />
      <Text
        color="brand.900"
        fontSize="4xl"
        mr="2"
        display={['flex', 'flex', 'none']}
      >
        •
      </Text>
      <Text
        as="span"
        fontWeight="600"
        fontSize={['lg', '2xl']}
        mt={['0', '0', '3', '6']}
      >
        {text}
      </Text>
    </Center>
  );
}
