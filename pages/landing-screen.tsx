import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, ImageBackground } from 'react-native';
import {
  NavigationScreenComponent,
  NavigationScreenProps,
  NavigationStackScreenOptions
} from "react-navigation";
import { ROUTES } from "../routes"

interface Props {
  screenProps: NavigationScreenProps
}


export const LandingScreen: NavigationScreenComponent<Props> = (screenProps) => {
  return (
    <View style={styles.landing}>
      <ImageBackground source={require('../images/background-blocks.jpg')} style={{ width: '100%', height: '100%' }}>
        <View style={styles.landingInner}>
          <Text
            style={[
              {
                color: "rgba(255, 255, 255, 1)",
                textAlign: "center",
                paddingHorizontal: 0,
                marginVertical: 0,
                fontSize: 48,
                lineHeight: 58,
                letterSpacing: 0,
                marginTop: 100
              }
            ]}
          >
            Characters for James
            </Text>
          <Text
            style={[
              {
                fontSize: 24,
                lineHeight: 24,
                letterSpacing: 0,
                color: "rgba(255, 255, 255, 1)",
                textAlign: "center",
                paddingHorizontal: 0,
                marginVertical: 0,
                marginTop: 20
              }
            ]}
          >
            Lets get started.
            </Text>
          <Button title="Go to Letters"
            onPress={() => screenProps.navigation.navigate("Letters")} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  landing: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }, landingInner: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  }
});
