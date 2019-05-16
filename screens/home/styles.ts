import { Platform, Dimensions, StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
const deviceHeight = Dimensions.get("window").height;

interface Styles {
    imageContainer: ViewStyle;
    logoContainer: ViewStyle;
    logoText: ViewStyle;
    logoView: ViewStyle;
    logo: ImageStyle;
    text: TextStyle;
    logoTextLine1: TextStyle;
    logoTextLine2: TextStyle;
}

export default StyleSheet.create<Styles>({
    imageContainer: {
        flex: 1,        
        width: undefined,
        height: undefined,
    },
    logoContainer: {
        flex: 1,
        marginTop: deviceHeight / 8,
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logoText:{
        flex:2,    
        marginLeft:20   
    },
    logoTextLine1:{
        marginTop:48,
        color: "#D8D8D8",
        fontSize:32      ,
        fontWeight:"700",
        lineHeight:40
    },
    logoTextLine2:{
        color: "#D8D8D8",
        fontSize:50   ,
        fontWeight:"900",  
        lineHeight:52         
    },
    logoView:{
        flex:1,
        width:125,
    },
    logo: {
        borderRadius:25,
        position: "absolute",
        left: Platform.OS === "android" ? 40 : 50,
        top: Platform.OS === "android" ? 35 : 60,
        width: 100,
        height: 100
    },
    text: {
        color: "#D8D8D8",
        bottom: 6,
        marginTop: 5
    }
    ,
});