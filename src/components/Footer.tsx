import { Button, Center, Flex, Image, Link } from '@chakra-ui/react';

export function Footer() {
  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <Center as="footer" borderTop={'1px'} borderTopColor={'light.400'}>
      <Flex
        align={['center']}
        justify={['space-between']}
        w={['100%']}
        maxW={['8xl']}
        mx="auto"
        py={['4']}
        px={['8']}
      >
        <Button bg="transparent" onClick={handleScrollTop}>
          <Image
            src={`/assets/icons/top.svg`}
            alt="Voltar ao topo"
            height={['16px', '16px', '24px', '32px']}
          />
        </Button>
        <Flex as="section">
          <Button bg="transparent">
            <Link href={'https://github.com/areasflavio'} target={'_blank'}>
              <Image
                src={`/assets/icons/github.svg`}
                alt="Github"
                height={['16px', '16px', '24px', '32px']}
              />
            </Link>
          </Button>

          <Button bg="transparent">
            <Link
              href={'https://linkedin.com/in/areasflavio'}
              target={'_blank'}
            >
              <Image
                src={`/assets/icons/linkedin.svg`}
                alt="LinkedIn"
                height={['16px', '16px', '24px', '32px']}
              />
            </Link>
          </Button>
        </Flex>
      </Flex>
    </Center>
  );
}
