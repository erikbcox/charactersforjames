import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {
  NavigationScreenComponent,
  NavigationScreenProps,
  NavigationStackScreenOptions
} from "react-navigation";
//import { ROUTES } from "../routes"

interface Props { 
  screenProps: NavigationScreenProps
}


export const LandingScreen: NavigationScreenComponent<Props> = (screenProps) => {
  return (
    <View style={styles.landing}>
      <Text style={styles.title}>Landing Screen</Text>
      <Button title="Go to Letters" onPress={()=>screenProps.navigation.navigate("Letters")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  landing: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }, title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
