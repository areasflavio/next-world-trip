import { Center, Image, Text } from '@chakra-ui/react';

interface TypeProps {
  icon: string;
  text: string;
}

export function Type({ icon, text }: TypeProps) {
  return (
    <Center flexDir={['column']}>
      <Image src={`/assets/icons/${icon}.svg`} alt={icon} />
      <Text as="span" fontWeight="600" fontSize={['2xl']} mt={['6']}>
        {text}
      </Text>
    </Center>
  );
}
