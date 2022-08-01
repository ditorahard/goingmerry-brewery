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
  FlatList,
} from 'native-base';
import { useBrewery } from '../../modules/list/usecases/useBrewery';
import { Errors } from '@brewery/shared-ui-layout';
import { useBookmark } from '../../modules/bookmarks/usecases/useBookmark';
import BreweryItemView from '../BreweryList/BreweryItemView';
export const BookmarkScreen = (props) => {
  const { bookmarkList, bookmarkCount } = useBookmark();
  console.log('useBookmark', useBookmark());
  return (
    <ScrollView>
      <Box mt="4" px="4">
        <Text color="black" flex="1">
          {'Bookmarked Items : ' + bookmarkCount}
        </Text>
      </Box>
      <FlatList
        data={bookmarkList}
        renderItem={({ item }) => <BreweryItemView {...item} />}
        keyExtractor={(item) => item.id}
        onEndReached={() => {
          console.log('tes');
        }}
      />
    </ScrollView>
  );
};
