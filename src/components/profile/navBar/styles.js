import {Dimensions, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        top:0,
        width: Dimensions.get("window").width,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 35,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    }
});

export default styles