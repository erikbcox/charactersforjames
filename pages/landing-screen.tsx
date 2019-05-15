import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Props { }

export default class LandingScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.landing}>
        <Text>Landing</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  landing: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
