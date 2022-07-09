import {Dimensions, StyleSheet} from 'react-native'
import {ScreenHeight} from '../../theme/layout';

const styles = StyleSheet.create({
    container: {
        position:"relative",
        width: Dimensions.get('window').width,
        height: Dimensions.get("window").height *0.95,
        backgroundColor: "#2E2E2E",
    }
});

export default styles