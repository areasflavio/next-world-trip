import { Flex, Image, Stack, Text, Tooltip } from '@chakra-ui/react';
import { RichText } from 'prismic-dom';

interface ContinentInfoProps {
  text: string;
  info: {
    countries: number;
    languages: number;
    cities: number;
  };
}

export function ContinentInfo({ info, text }: ContinentInfoProps) {
  return (
    <>
      <Flex
        as="section"
        gap={['4', '16']}
        flexDir={['column', 'column', 'row']}
      >
        <Flex
          maxW={['100%', '100%', '450px', '600px']}
          fontSize={['sm', 'lg', 'xl', '2xl']}
          textAlign={['justify']}
          dangerouslySetInnerHTML={{ __html: RichText.asHtml(text) }}
        ></Flex>

        <Flex
          alignItems={['center']}
          justify={['space-around', 'space-around', 'space-between']}
          w={['100%']}
        >
          <Stack
            display="flex"
            alignItems={['start', 'center']}
            fontWeight={['400', '600']}
          >
            <Text
              as="strong"
              fontSize={['2xl', '3xl', '3xl', '5xl']}
              color="brand.900"
            >
              {info.countries}
            </Text>
            <Text as="small" fontSize={['lg', 'lg', '2xl']}>
              países
            </Text>
          </Stack>
          <Stack
            display="flex"
            alignItems={['start', 'center']}
            fontWeight={['400', '600']}
          >
            <Text
              as="strong"
              fontSize={['2xl', '3xl', '3xl', '5xl']}
              color="brand.900"
            >
              {info.languages}
            </Text>
            <Text as="small" fontSize={['lg', 'lg', '2xl']}>
              línguas
            </Text>
          </Stack>
          <Stack
            display="flex"
            alignItems={['start', 'center']}
            fontWeight={['400', '600']}
          >
            <Text
              as="strong"
              fontSize={['2xl', '3xl', '3xl', '5xl']}
              color="brand.900"
            >
              {info.cities}
            </Text>
            <Text
              as="small"
              fontSize={['lg', 'lg', '2xl']}
              display={['flex']}
              align={['center']}
              flex={[1]}
            >
              cidades +100
              <Tooltip label="As cidades +100 são as cidades que  estão entre as 100 mais visitadas do mundo.">
                <Image src={`/assets/icons/info.svg`} alt="Info" ml={['1']} />
              </Tooltip>
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
