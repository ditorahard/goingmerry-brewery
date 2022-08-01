import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import {
  Image,
  Center,
  Pressable,
  Box,
  Text,
  VStack,
  Spinner,
  Stack,
} from 'native-base';
import { useBrewery } from '../../modules/list/usecases/useBrewery';
import { Errors } from '@brewery/shared-ui-layout';

export const BreweryDetailScreen = (props) => {
  const { route } = props;
  const { id } = route.params;
  const { data, isLoading, isError } = useBrewery({
    obdb_id: id,
  });

  if (isLoading) return <LoadingState />;
  if (isError || !data) return <Errors />;

  const { name, brewery_type: type, street, city, state, updated_at } = data;
  const formattedDateUpdated = new Date(updated_at).toDateString();

  return (
    <ScrollView>
      <VStack space="2.5" mt="4" px="8">
        <Stack mb="2.5" mt="1.5" direction="column" space={3}>
          <Text color="black" flex="1">
            {name}
          </Text>
          <Text color="black" flex="1">
            {type}
          </Text>
          <Text color="black" flex="1">
            {street || '' + ' ' + city || '' + ' ' + state || ''}
          </Text>
          <Text color="black" flex="1">
            {formattedDateUpdated}
          </Text>
        </Stack>
      </VStack>
    </ScrollView>
  );
};

const LoadingState = () => {
  return (
    <Center flex="1">
      <Spinner color="black" />
    </Center>
  );
};
