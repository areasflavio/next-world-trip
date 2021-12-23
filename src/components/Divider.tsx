import { Box } from '@chakra-ui/react';

export function Divider() {
  return (
    <Box
      w={['60px', '90px']}
      mx="auto"
      h="2px"
      bg="dark.600"
      mb={['6', '12']}
    />
  );
}
