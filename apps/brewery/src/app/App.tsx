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

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={BreweryListScreen}
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
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
export default App;
