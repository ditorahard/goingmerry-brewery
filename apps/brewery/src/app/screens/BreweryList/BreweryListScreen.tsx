import React, { useEffect, useState } from 'react';
import { Box, Heading, FlatList, Center, Spinner } from 'native-base';
import BreweryItemView from './BreweryItemView';
import { useBreweries } from '../../modules/list/usecases/useBreweries';
import { Errors } from '@brewery/shared-ui-layout';

const BreweryListScreen = () => {
  const { data, isLoading, isError } = useBreweries({ query: '' });

  if (isLoading) return <LoadingState />;
  if (isError || !data) return <Errors />;

  return (
    <Box>
      <Heading fontSize="xl" p="4" pb="3">
        Breweries
      </Heading>
      <FlatList
        data={data}
        renderItem={({ item }) => <BreweryItemView {...item} />}
        keyExtractor={(item) => item.id}
        onEndReached={() => {
          console.log('list ended');
        }}
      />
    </Box>
  );
};

const LoadingState = () => {
  return (
    <Center flex="1" bg="dark.200">
      <Spinner color="white" />
    </Center>
  );
};

export default BreweryListScreen;
