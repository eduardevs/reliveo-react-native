import {StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    containerButton: {
        position: "absolute",
        bottom: 20,
        right: 0,
        width: Dimensions.get("window").width,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
    },
    gradientButtonContainer: {
        width: "100%",
        height: "40%",
        position: "absolute",
        bottom: 0,
        right: 0,
    },
    bottomMenuButton: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    textButton: {
        fontSize:10,
        color: "white",
    }
})
export default styles;