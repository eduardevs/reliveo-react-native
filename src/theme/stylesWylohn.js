import { StyleSheet, Dimensions } from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'


let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

let HeaderHeight = ScreenHeight * 0.15;



export const Colors = {
  primary: "#2E2E2E",
  secondary: "#A65AFF",
  ternary: "white",
  darkLight: "#969696"
}

const { primary, secondary, ternary, darkLight } = Colors

export const stylesPlus = StyleSheet.create({
  
    // Global

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: primary,
    },

    header: {
        width: '100%',
        height: HeaderHeight,
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 20,
        borderBottomWidth: 2,
        borderBottomColor: darkLight,
    },

    headerText: {
        paddingLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: ternary,
    },


    // Contact + SettingsUser

   

    containChoice: {
        width: ScreenWidth,
        paddingHorizontal: 10,
    },

    choice: {
        width: ScreenWidth * 0.94,
        height: ScreenHeight * 0.1,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: darkLight,
    },

    containText: {
        width: ScreenWidth * 0.9,
        height: ScreenHeight * 0.1,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: darkLight,
    },

    choiceText: {
        paddingLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: ternary,
    },
    
    choiceSubText: {
        paddingLeft: 20,
        fontSize: 14,
        color: ternary,
    },


    // infoApp

    containInfos: {
        width: '100%',
        height: '100%'
    },

    blocImage: {
        width: '100%',
        height: (ScreenHeight - HeaderHeight) * 0.33,
        justifyContent: 'center',
        borderBottomWidth: 1,
        resizeMode: 'cover',
    },

})