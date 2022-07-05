import { StyleSheet } from 'react-native';
import { ScreenHeight } from '../../../theme/layout';

const styles = StyleSheet.create({
    picture: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 30,
        backgroundColor: '#2E2E2E',
    },
    rectangleActive: {
        width: 300,
        height: 150,
        backgroundColor: 'black',
        opacity: 0.1,
        marginBottom: 30,
        borderBottomColor: 'black',
        borderWidth: 1,
        borderRadius: 17,
        transform: [{ translateX: -100 }],
    },
    rectangle: {
        width: 300,
        height: 150,
        backgroundColor: 'black',
        opacity: 0.1,
        marginBottom: 30,
        borderBottomColor: 'black',
        borderWidth: 1,
        borderRadius: 17,
        transform: [{ translateX: 0 }],
    },
    
   carre:{
        width: 170,
        height: 170,
        backgroundColor: 'black',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 30,
        borderBottomColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        position: 'relative',
    },
    smallrect: {
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 5,
            paddingRight: 20,
            backgroundColor: '#3E3E3E',
            marginLeft: 15,
            marginRight: 15,
            marginBottom: 30,
            borderBottomColor: 'black',
            borderWidth: 1,
            borderRadius: 5,
            position: 'absolute',
            top: 15,
    },
    lock:{
        width: 20,
        height: 20,
        backgroundColor: '#3E3E3E',
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
});

export default styles;
