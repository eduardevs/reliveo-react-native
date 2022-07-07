import {StyleSheet, Dimensions} from "react-native";
import dimensions from "react-native-web/dist/exports/Dimensions";

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerVideo: {
        backgroundColor:"black",
        position: "absolute",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    containerVideoButton: {
        position:"relative",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    containerVideoButtonSectionTop: {
        width: Dimensions.get("window").width,
        display: "flex",
        top: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingHorizontal:10,

    },
    containerVideoButtonSectionBottom: {
        width: Dimensions.get("window").width,
        display: "flex",
        bottom: -Dimensions.get("window").height * 0.35,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",

        paddingHorizontal:10,

    },
    containerVideoButtonSectionInterne: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonCreatorProfil: {
        width: 66,
        height: 66,
        borderRadius: 10000,
        backgroundColor: "black",
        marginVertical: 5,
        marginTop:5
    },
    buttonUserProfil: {
        width: 42,
        height: 42,
        borderRadius: 10000,
        backgroundColor: "black",
        marginVertical: 5,
    },
    buttonEvent: {
        width: 66,
        height: 66,
        borderRadius: 10,
        backgroundColor: "black",
        marginVertical: 5,
    },
    vueConter: {
        display: "flex",
        flexDirection: "row",
        padding: 5,
        backgroundColor: "#3E3E3E",
        borderRadius: 3,
        marginVertical: 5,
    },
    textVideo: {
        textAlign: "center",
        color: "#FFFFFF",
        marginLeft: 5
    },
});

export default styles