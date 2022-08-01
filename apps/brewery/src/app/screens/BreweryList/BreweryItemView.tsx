import React from 'react';
import { Box, Text, HStack, Avatar, VStack, Spacer, Link } from 'native-base';

const BreweryItemView = (props) => {
  const { type, name, street, city, state, onPressLink, onPressBookmark } =
    props;
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
      <Link
        onPress={() => {
          onPressLink();
        }}
        isExternal
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
              color="coolGray.400"
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
      </Link>
      <Link
        onPress={() => {
          onPressBookmark();
        }}
        isExternal
      >
        <Text>Bookmark</Text>
      </Link>
    </Box>
  );
};

export default BreweryItemView;
