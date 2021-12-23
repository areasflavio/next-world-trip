import { Button, Center, Image } from '@chakra-ui/react';
import Link from 'next/link';

interface HeaderProps {
  hasBackButton?: boolean;
}

export function Header({ hasBackButton }: HeaderProps) {
  return (
    <Center as="header" h={['12', '24']} position="relative">
      {hasBackButton && (
        <Link href="/" passHref>
          <Button bg="transparent" position="absolute" left={['36']}>
            <Image src={`/assets/icons/back.svg`} alt="Back" />
          </Button>
        </Link>
      )}

      <Image src="/assets/logo.svg" alt="worldtrip" />
    </Center>
  );
}
