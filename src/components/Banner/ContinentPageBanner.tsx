import { Flex, Heading } from '@chakra-ui/react';

interface ContinentPageBannerProps {
  imgUrl: string;
  imgTitle: string;
}

export function ContinentPageBanner({
  imgUrl,
  imgTitle,
}: ContinentPageBannerProps) {
  return (
    <Flex
      as="section"
      bgImage={`url(${imgUrl})`}
      bgPosition="100% 30%"
      bgRepeat="no-repeat"
      bgSize="cover"
      justify={['center', 'center', 'space-between']}
      align={['center', 'center', 'flex-end']}
      w="100%"
      mx="auto"
      px={['36']}
      py={['16']}
      h={['150px', '350px', '500px']}
    >
      <Heading
        as="h2"
        fontSize={['2xl', '4xl', '5xl']}
        fontWeight="600"
        color="light.600"
      >
        {imgTitle}
      </Heading>
    </Flex>
  );
}
