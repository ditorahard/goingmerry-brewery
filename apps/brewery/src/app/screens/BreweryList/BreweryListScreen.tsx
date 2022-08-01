import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  FlatList,
  Center,
  Spinner,
  Link,
  Text,
  Button,
  Stack,
  HStack,
  useToast,
} from 'native-base';
import BreweryItemView from './BreweryItemView';
import { Errors } from '@brewery/shared-ui-layout';
import { useBreweries } from '../../modules/list/usecases/useBreweries';
import { useBookmark } from '../../modules/bookmarks/usecases/useBookmark';
import { Brewery } from '../../modules/list/dto/breweryDTO';

const BreweryListScreen = (props) => {
  const { navigation } = props;
  const toast = useToast();
  const [pageSize, setPageSize] = useState(10);
  const { addBookmark, setBookmarkCount, errorMessage, clearErrorMessage } =
    useBookmark();
  const {
    data,
    isLoading,
    isError,
  }: { data: Brewery[]; isLoading: boolean; isError: boolean } = useBreweries({
    per_page: pageSize,
  });

  const handlePressLink = (item) => {
    navigation.navigate('Details', {
      id: item.id,
    });
  };

  const handleBookmark = (item) => {
    addBookmark(item);
    setBookmarkCount();
    if (errorMessage.length === 0) toast.show({ description: 'Bookmarked' });
  };

  if (isLoading) return <LoadingState />;
  if (isError || !data) return <Errors />;
  if (errorMessage && errorMessage.length > 0) {
    return (
      <ItemBookmarked
        onPressLink={() => {
          clearErrorMessage();
        }}
      />
    );
  }

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
            onPressBookmark={() => handleBookmark(item)}
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

const ItemBookmarked = (props) => {
  const { onPressLink } = props;
  return (
    <Center flex="1">
      <Box pt="4" flexDirection="column">
        <Text>Duplicate Item. Item has already been bookmarked</Text>
        <Link onPress={() => onPressLink()}>Back To Home</Link>
      </Box>
    </Center>
  );
};

export default BreweryListScreen;
