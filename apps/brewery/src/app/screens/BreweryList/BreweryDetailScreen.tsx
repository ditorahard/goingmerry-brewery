import React, { useEffect, useState } from 'react';
import {
  Image,
  Center,
  Pressable,
  Box,
  Text,
  HStack,
  Spinner,
} from 'native-base';
import { useBrewery } from '../../modules/list/usecases/useBrewery';
import { Errors } from '@brewery/shared-ui-layout';

export const BreweryDetailScreen = () => {
  const { data, isLoading, isError } = useBrewery({
    obdb_id: 'madtree-brewing-cincinnati',
  });

  if (isLoading) return <LoadingState />;
  if (isError || !data) return <Errors />;

  console.log('data', data);
  return (
    <Box flex="1">
      <Center flex="1" bg="dark.200">
        <HStack bg="black" p="4" safeAreaBottom>
          <Text color="white" flex="1">
            {data?.name}
          </Text>
        </HStack>
      </Center>
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
