import React, { Component } from 'react';
import { Text, View } from 'react-native';


interface Props { }

export default class OptionsScreen extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Options</Text>
      </View>
    );
  }
}
