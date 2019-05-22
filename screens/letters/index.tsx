import React from "react";
import { ImageBackground, View, StatusBar, Image } from "react-native";
import {
    Container, Button, H3, Text, Icon,
    Left,
    Right,
    Body, Title, Content, Header
} from "native-base";
import Tts from "react-native-tts";
import Sound from "react-native-sound"

Tts.addEventListener('tts-start', (event:any) => console.log("start", event));
Tts.addEventListener('tts-finish', (event:any) => console.log("finish", event));
Tts.addEventListener('tts-cancel', (event:any) => console.log("cancel", event));

var whoosh = new Sound('a.mp3', Sound.MAIN_BUNDLE , (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
    
  });

import styles from "./styles";
import { NavigationScreenProps, NavigationScreenComponent, } from "react-navigation";

interface Props {
    screenProps: NavigationScreenProps
}

const Letters: NavigationScreenComponent<Props> = (screenProps) => {
    return (
        <Container style={styles.container}>
            <Header>
                <Left>
                    <Button transparent onPress={() => screenProps.navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>The letter A</Title>
                </Body>
            <Right />
            </Header>
            <Content padder>
                <Button onPress={()=>Tts.speak('The letter A',{ iosVoiceId: 'com.apple.ttsbundle.Moira-compact' })}><Text>Play tts</Text></Button>

                <Button onPress={()=>whoosh.play(()=>console.log("done"))}><Text>Play rain</Text></Button>
            </Content>
        </Container>
    );
};

export default Letters;