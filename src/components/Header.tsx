import { Button, Center, Image } from '@chakra-ui/react';
import Link from 'next/link';

interface HeaderProps {
  hasBackButton?: boolean;
}

export function Header({ hasBackButton }: HeaderProps) {
  return (
    <Center as="header" h={['12', '16', '20', '24']} position="relative">
      {hasBackButton && (
        <Link href="/" passHref>
          <Button
            bg="transparent"
            position="absolute"
            left={['4', '12', '24', '36']}
          >
            <Image
              src={`/assets/icons/back.svg`}
              alt="Back"
              height={['16px', '16px', '24px', '32px']}
            />
          </Button>
        </Link>
      )}

      <Image
        src="/assets/logo.svg"
        alt="worldtrip"
        w={['81px', '124px', '162px', '185px']}
      />
    </Center>
  );
}
