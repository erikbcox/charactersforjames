/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component} from 'react';
import {LandingScreen} from './pages/landing-screen';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LettersScreen from './pages/letters-screen';
import NumbersScreen from './pages/numbers-screen';
import OptionsScreen from './pages/options-screen';

const MainNavigator = createStackNavigator({
  Home: {screen: LandingScreen},
  Letters: {screen: LettersScreen},
  Numbers: {screen: NumbersScreen},
  Options: {screen: OptionsScreen},
});

/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/


const App = createAppContainer(MainNavigator);

export default App;