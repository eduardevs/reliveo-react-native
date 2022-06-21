import {StyleSheet,Dimensions} from "react-native";

const styles = StyleSheet.create({
    container: {
        position:"absolute",
        top:0,
        right:0,
        width: Dimensions.get("window").width,
        height:Dimensions.get("window").height,
    }
})
export default styles;