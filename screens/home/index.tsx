import React, { Component } from "react";
import { ImageBackground, View, StatusBar, Image } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import styles from "./styles";

const launchscreenLogo = require("../../images/color-james-drawing.jpg");
const launchscreenBg = require("../../images/background-blocks.jpg");

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer} >
            <View style={styles.logoView}>
              <Image source={launchscreenLogo} style={styles.logo} />
            </View>
            <View  style={styles.logoText}>
              <Text style={styles.logoTextLine1}>Characters</Text>
              <Text style={styles.logoTextLine2}>for James</Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: 50,
              backgroundColor: "transparent"
            }}
          >
            <H3 style={styles.text}>App to showcase</H3>
            <View style={{ marginTop: 8 }} />
            <H3 style={styles.text}>NativeBase components</H3>
            <View style={{ marginTop: 8 }} />
          </View>
          <View style={{ marginBottom: 80 }}>
            <Button
              style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
            /*onPress={() => this.props.navigation.openDrawer()}*/
            >
              <Text>Lets Go!</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;