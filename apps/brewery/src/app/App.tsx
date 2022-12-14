// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BreweryDetailScreen } from './screens/BreweryList/BreweryDetailScreen';
import BrewerySearchScreen from './screens/BreweryList/BrewerySearchScreen';
import BreweryListScreen from './screens/BreweryList/BreweryListScreen';
import { NativeBaseProvider } from 'native-base';
import { BookmarkScreen } from './screens/Bookmarks/BookmarksScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

function TabMenu() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={BreweryListScreen} />
      <Tab.Screen name="Bookmarks" component={BookmarkScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={TabMenu}
              options={{ title: 'My home' }}
            />
            <Stack.Screen
              name="Details"
              component={BreweryDetailScreen}
              options={{ title: 'Detail' }}
            />
            <Stack.Screen
              name="Search"
              component={BrewerySearchScreen}
              options={{ title: 'Search' }}
            />
            <Stack.Screen
              name="Bookmarks"
              component={BookmarkScreen}
              options={{ title: 'Bookmarks' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
export default App;
