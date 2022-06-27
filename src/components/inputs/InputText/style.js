import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    StyledTextInput: {
        backgroundColor: 'white',
        padding: 15,
        paddingLeft: 55,
        paddingRight: 55,
        borderRadius: 5,
        fontSize: 16,
        marginVertical: 3,
        marginBottom: 10,
        color: 'black',
    },
    StyledInputLabel: {
        color: 'white',
        fontSize: 13,
        textAlign: 'left',
    },
    LeftIcon: {
        left: 15,
        top: 38,
        position: 'absolute',
        zIndex: 1,
    },
    RightIcon: {
        right: 15,
        top: 38,
        position: 'absolute',
        zIndex: 1,
    },
});
