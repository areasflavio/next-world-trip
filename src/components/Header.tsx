import { Center, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Center as="header" h={['12', '24']}>
      <Image src="/assets/logo.svg" alt="worldtrip" />
    </Center>
  );
}
