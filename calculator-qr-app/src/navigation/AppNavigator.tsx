import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RateConverterScreen from '../screens/RateConverterScreen';
import QRScannerScreen from '../screens/QRScannerScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Rate Converter" component={RateConverterScreen} />
        <Stack.Screen name="QR Scanner" component={QRScannerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;