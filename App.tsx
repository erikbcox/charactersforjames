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
import Letters from './screens/letters';
import NumbersScreen from './pages/numbers-screen';
import OptionsScreen from './pages/options-screen';
import Home from './screens/home';
import { Root } from 'native-base';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Landing: {screen: LandingScreen},
  Letters: {screen: Letters},
  Numbers: {screen: NumbersScreen},
  Options: {screen: OptionsScreen},
},
{
  initialRouteName: "Home",
  headerMode: "none"
});

/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/


//const App = createAppContainer(MainNavigator);

//export default App;

const AppContainer = createAppContainer(MainNavigator);

export default () =>
  <Root>
    <AppContainer />
  </Root>;