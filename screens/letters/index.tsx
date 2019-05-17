import React from "react";
import { ImageBackground, View, StatusBar, Image } from "react-native";
import {
    Container, Button, H3, Text, Icon,
    Left,
    Right,
    Body, Title, Content, Header
} from "native-base";

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
                    <Title>Header</Title>
                </Body>
            <Right />
            </Header>
            <Content padder>
                <Text>LETTERS ABC</Text>
            </Content>
        </Container>
    );
};

export default Letters;