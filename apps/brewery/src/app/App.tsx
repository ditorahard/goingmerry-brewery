// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BreweryDetailScreen } from './screens/BreweryDetailScreen';
import { NativeBaseProvider } from 'native-base';

const queryClient = new QueryClient();
const BASE_URL = 'https://api.openbrewerydb.org';

function HomeScreen(props) {
  const {navigation} = props
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
  title="Update the title"
  onPress={() => navigation.setOptions({ title: 'Updated!' })}
/>
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <NativeBaseProvider>
          <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={BreweryDetailScreen}
            options={{ title: 'My home' }}
          />
            <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detail'}} />
          </Stack.Navigator>
        </NavigationContainer>
        </NativeBaseProvider>
    </QueryClientProvider>
  );
}
export default App;