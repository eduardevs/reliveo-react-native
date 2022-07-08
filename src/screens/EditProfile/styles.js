import {Dimensions, StyleSheet} from 'react-native'
import {ScreenHeight} from '../../theme/layout';

const styles = StyleSheet.create({
    container: {
        position:"relative",
        width: Dimensions.get('window').width,
        height: Dimensions.get("window").height *0.95,
        backgroundColor: "#2E2E2E",
    },
    profile: {
		borderRadius: 100,
		height: 40,
		width: 40,
		borderWidth: 5,
		borderColor: "#A65AFF",
	},
    btnedit:{
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#A65AFF',
        borderRadius: 10,
        width: 200,
        alignSelf: 'center',
        marginTop: 20,
    },
    btnedittext:{
        textAlign: 'center',
        color: 'white',
    }
});

export default styles