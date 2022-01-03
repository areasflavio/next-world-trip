import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from 'swiper';
import {
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

type Continent = {
  slug: string;
  title: string;
  subtitle: string;
  image_url: string;
};

interface ContinentsSliderProps {
  continents: Continent[];
}

export function ContinentsSlider({ continents }: ContinentsSliderProps) {
  return (
    <Center
      h={['250px', '350px', '450px']}
      mt={['12']}
      mb={['12']}
      mx={['0', '0', '12', '24']}
    >
      <Swiper
        cssMode={true}
        navigation
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        autoplay
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.slug}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              textAlign="center"
              position="relative"
            >
              <Image
                src={continent.image_url}
                alt={continent.slug}
                style={{
                  filter: 'brightness(0.8)',
                }}
              />

              <Stack position="absolute">
                <NextLink href={`/continents/${continent.slug}`}>
                  <Link _hover={{ textDecor: 'none' }}>
                    <Heading
                      as="h3"
                      fontSize={['2xl', '3xl', '4xl', '5xl']}
                      fontWeight="bold"
                      color="light.600"
                      transition="0.2s"
                      _hover={{ color: 'brand.900' }}
                    >
                      {continent.title}
                    </Heading>
                  </Link>
                </NextLink>
                <Text
                  as="p"
                  fontWeight="bold"
                  color="light.400"
                  fontSize={['sm', 'md', 'lg', '2xl']}
                  mt={['2', '4']}
                >
                  {continent.subtitle}
                </Text>
              </Stack>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Center>
  );
}
