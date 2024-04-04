/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Start,Details} from './screens';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName="Start"
    screenOptions={{headerShown : false}}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Details" options={{headerShown : true}} component={Details} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;

