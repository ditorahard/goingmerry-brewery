import React from 'react';
import { Box, Center, Text } from 'native-base';

/* eslint-disable-next-line */
export type ErrorsProps = {};

export function Errors(props: ErrorsProps) {
  return (
    <Center height="100%">
      <Box mb="5" mt="4" alignItems="center">
        <Text color="dark.100" fontSize="lg" fontWeight="bold">
          Error
        </Text>
        <Text color="dark.100" mt="2" fontSize="sm">
          Something's wrong, please try again
        </Text>
      </Box>
    </Center>
  );
}

export default Errors;
