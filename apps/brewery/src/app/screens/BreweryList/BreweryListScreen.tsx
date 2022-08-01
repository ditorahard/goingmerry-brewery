import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { Box, Heading, FlatList, Center, Spinner, Input } from 'native-base';
import BreweryItemView from './BreweryItemView';
import { Errors } from '@brewery/shared-ui-layout';
import useDebounce from '../../shared/helpers/useDebounce';
import { useBreweries } from '../../modules/list/usecases/useBreweries';
import { useBookmark } from '../../modules/bookmarks/usecases/useBookmark';

const BreweryListScreen = (props: BreweryListScreenProps) => {
  const { navigation } = props;
  const [pageSize, setPageSize] = useState(20);
  const { addBookmark, setBookmarkCount, removeBookmark, errorMessage } =
    useBookmark();
  const { data, isLoading, isError } = useBreweries();
  const handlePressLink = (item) => {
    navigation.navigate('Details', {
      id: item.id,
    });
  };

  if (isLoading) return <LoadingState />;
  if (isError || !data) return <Errors />;
  // testing purposes if (errorMessage.length > 0) return <Errors />;

  return (
    <Box>
      <Button
        title="Search breweries here ..."
        onPress={() => navigation.navigate('Search')}
      />
      <Heading fontSize="xl" p="4" pb="3">
        Breweries
      </Heading>
      <FlatList
        data={data}
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
        onEndReached={() => {
          console.log('tes');
        }}
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
