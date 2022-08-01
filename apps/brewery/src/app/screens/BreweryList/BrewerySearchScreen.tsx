import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  FlatList,
  Center,
  Spinner,
  Input,
  useToast,
  Text,
} from 'native-base';
import BreweryItemView from './BreweryItemView';
import { Errors } from '@brewery/shared-ui-layout';
import useDebounce from '../../shared/helpers/useDebounce';
import { useBreweriesSearch } from '../../modules/list/usecases/useBreweriesSearch';
import { useBookmark } from '../../modules/bookmarks/usecases/useBookmark';

const BrewerySearchScreen = (props) => {
  const { navigation } = props;
  const toast = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const { addBookmark, setBookmarkCount, errorMessage, clearErrorMessage } =
    useBookmark();

  // Didn't needed to be used anymore
  // const handleFilterSpaces = (text) => {
  //   return text.replace(' ', '_');
  // };

  const debouncedQuery = useDebounce(searchQuery, 1500);
  const { data, isLoading, isError } = useBreweriesSearch({
    query: debouncedQuery,
    per_page: 10,
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

  const handleChange = (text) => setSearchQuery(text);

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
    <Box>
      <Heading fontSize="xl" p="4" pb="3">
        Breweries
      </Heading>
      <Box alignItems="center">
        <Input
          mx="3"
          placeholder="Search Brewery Here, e.g : Banjo"
          onChangeText={handleChange}
          value={searchQuery}
        />
      </Box>
      <FlatList
        data={data}
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

export default BrewerySearchScreen;
