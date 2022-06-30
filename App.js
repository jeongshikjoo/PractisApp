/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './src/Screen1'
import Screen2 from './src/Screen2'
import Screen3 from './src/Screen3'

const Stack = createNativeStackNavigator();



const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Screen1 Title'}>
            <Stack.Screen name={'Screen1 Title'} component={Screen1}></Stack.Screen>
            <Stack.Screen name={'Screen2 Title'} component={Screen2}></Stack.Screen>
            <Stack.Screen name={'Screen3 Title'} component={Screen3}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
