import React, { useEffect, useState } from 'react';
import { Box, Heading, FlatList, Center, Spinner, Input } from 'native-base';
import BreweryItemView from './BreweryItemView';
import { Errors } from '@brewery/shared-ui-layout';
import useDebounce from '../../shared/helpers/useDebounce';
import { useBreweriesSearch } from '../../modules/list/usecases/useBreweriesSearch';

const BrewerySearchScreen = (props) => {
  const { navigation } = props;
  const [searchQuery, setSearchQuery] = useState('');
  const [pageSize, setPageSize] = useState(20);
  const handleFilterSpaces = (text) => {
    return text.replace(' ', '_');
  };

  const debouncedQuery = useDebounce(searchQuery, 1500);
  const { data, isLoading, isError } = useBreweriesSearch({
    query: debouncedQuery,
    per_page: pageSize,
  });
  const handlePressLink = (item) => {
    navigation.navigate('Details', {
      id: item.id,
    });
  };

  const handleChange = (text) => setSearchQuery(text);

  if (isLoading) return <LoadingState />;
  if (isError || !data) return <Errors />;

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

export default BrewerySearchScreen;
