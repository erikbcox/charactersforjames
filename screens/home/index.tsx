import React  from "react";
import { ImageBackground, View, StatusBar, Image } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import styles from "./styles";
import { NavigationScreenProps, NavigationScreenComponent } from "react-navigation";

const launchscreenLogo = require("../../images/color-james-drawing.jpg");
const launchscreenBg = require("../../images/background-blocks.jpg");

interface Props {
  screenProps: NavigationScreenProps
}

const Home: NavigationScreenComponent<Props> = (screenProps) => {
  return (
    <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer} >
            <View style={styles.logoView}>
              <Image source={launchscreenLogo} style={styles.logo} />
            </View>
            <View style={styles.logoText}>
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
            <H3 style={styles.text}>Lets learn ABCs and 123s</H3>
            <View style={{ marginTop: 8 }} />
            <H3 style={styles.text}>Letters, Numbers</H3>
            <View style={{ marginTop: 8 }} />
          </View>
          <View style={{ marginBottom: 80 }}>
            <Button
              style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
              onPress={() => screenProps.navigation.navigate("Letters")}
            >
              <Text>Letters ABC</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
  );
};

export default Home;