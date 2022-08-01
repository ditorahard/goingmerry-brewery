import React from 'react';
import { Box, Text, HStack, Avatar, VStack, Spacer } from 'native-base';

const BreweryItemView = (props) => {
  const { type, name, street, city, state } = props;
  return (
    <Box
      borderBottomWidth="1"
      _dark={{
        borderColor: 'gray.600',
      }}
      borderColor="coolGray.200"
      pl="4"
      pr="5"
      py="2"
    >
      <HStack space={3} justifyContent="space-between">
        <VStack>
          <Text
            _dark={{
              color: 'warmGray.50',
            }}
            color="coolGray.800"
            bold
          >
            {name || ''}
          </Text>
          <Text
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}
          >
            {type || ''}
          </Text>
        </VStack>
        <Spacer />
        <Text
          fontSize="xs"
          _dark={{
            color: 'warmGray.50',
          }}
          color="coolGray.800"
          alignSelf="flex-start"
        >
          {street || '' + ' ' + city || '' + ' ' + state || ''}
        </Text>
      </HStack>
    </Box>
  );
};

export default BreweryItemView;
