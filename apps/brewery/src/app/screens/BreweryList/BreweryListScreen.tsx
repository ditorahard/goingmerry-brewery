import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  FlatList,
  Center,
  Spinner,
  Link,
  Input,
  Text,
  Button,
  Icon,
  SearchIcon,
  Stack,
  HStack,
} from 'native-base';
import BreweryItemView from './BreweryItemView';
import { Errors } from '@brewery/shared-ui-layout';
import useDebounce from '../../shared/helpers/useDebounce';
import { useBreweries } from '../../modules/list/usecases/useBreweries';
import { useBookmark } from '../../modules/bookmarks/usecases/useBookmark';
import { Brewery } from '../../modules/list/dto/breweryDTO';

const BreweryListScreen = (props) => {
  const { navigation } = props;
  const { addBookmark, setBookmarkCount, removeBookmark, errorMessage } =
    useBookmark();
  const {
    data,
    isLoading,
    isError,
  }: { data: Brewery[]; isLoading: boolean; isError: boolean } = useBreweries({
    per_page: 10,
  });
  const handlePressLink = (item) => {
    navigation.navigate('Details', {
      id: item.id,
    });
  };

  if (isLoading) return <LoadingState />;
  if (isError || !data) return <Errors />;
  // testing purposes if (errorMessage.length > 0) return <Errors />;

  return (
    <Box style={{ flex: 1 }}>
      <Box px="4" py="4">
        <Button
          variant="outline"
          colorScheme="dark"
          onPress={() => navigation.navigate('Search')}
        >
          <HStack mb="2.5" mt="1.5" space={3}>
            <Stack direction="column">
              <Text>Tap here to search for breweries...</Text>
            </Stack>
          </HStack>
        </Button>
      </Box>
      <Heading fontSize="xl" p="4" pb="3">
        Breweries
      </Heading>

      <FlatList
        data={data}
        onEndReached={() => setPageSize(pageSize + 10)}
        renderItem={({ item }) => (
          <BreweryItemView
            {...item}
            onPressLink={() => handlePressLink(item)}
            onPressBookmark={() => {
              addBookmark(item);
              setBookmarkCount();
            }}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

const LoadingState = () => {
  return (
    <Center flex="1">
      <Spinner color="black" />
    </Center>
  );
};

export default BreweryListScreen;
