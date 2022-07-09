import { Dimensions, StyleSheet } from 'react-native';
import { ScreenHeight } from '../../theme/layout';

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.95,
        backgroundColor: '#2E2E2E',
    },
    profile: {
        borderRadius: 100,
        height: 50,
        width: 50,
    },
    btnedit: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#A65AFF',
        borderRadius: 10,
        width: 200,
        alignSelf: 'center',
        marginTop: 40,
    },
    btnedittext: {
        textAlign: 'center',
        color: 'white',
    },
    privateBtn: {
        marginLeft: 20,
        alignSelf: 'center',
        width: 45,
        borderRadius: 10,
        height: 20,
        backgroundColor: 'white',
    },
    privateBoxactive: {
        marginLeft: 20,
        alignSelf: 'center',
        width: 45,
        borderRadius: 10,
        height: 20,
        backgroundColor: '#A65AFF',
    },
    privateBtnball: {
        width: 15,
        height: 15,
        borderRadius: 12,
        position: 'absolute',
        bottom: 2,
        left: 4,
        backgroundColor: '#2E2E2E',
    },
    privateBtnballactive: {
        width: 15,
        height: 15,
        borderRadius: 12,
        position: 'absolute',
        bottom: 2,
        left: 25,
        backgroundColor: '#2E2E2E',
    },
});

export default styles;
