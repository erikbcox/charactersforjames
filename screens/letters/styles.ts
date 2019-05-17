import { Platform, Dimensions, StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
const deviceHeight = Dimensions.get("window").height;

interface Styles {
    container: ViewStyle;
}

export default StyleSheet.create<Styles>({
    container: {
        backgroundColor: "#FFF"
    }
});