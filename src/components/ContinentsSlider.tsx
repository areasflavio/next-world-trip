import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
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

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const arr = [1, 2, 3, 4, 5];

export function ContinentsSlider() {
  return (
    <Center
      h={['250px', '350px', '450px']}
      mt={['12']}
      mb={['10']}
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
      >
        {arr.map((item) => (
          <SwiperSlide key={item}>
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
                src="https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80"
                alt="europe"
                style={{
                  filter: 'brightness(0.8)',
                }}
              />

              <Stack position="absolute">
                <NextLink href={`/continents/europe`}>
                  <Link _hover={{ textDecor: 'none' }}>
                    <Heading
                      as="h3"
                      fontSize={['2xl', '3xl', '4xl', '5xl']}
                      fontWeight="bold"
                      color="light.600"
                      transition="0.2s"
                      _hover={{ color: 'brand.900' }}
                    >
                      Europa
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
                  O continente mais antigo
                </Text>
              </Stack>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Center>
  );
}
