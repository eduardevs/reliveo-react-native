import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 35,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    gear: {
        padding: 10,
        display: 'flex',
        alignItems: 'center',
    },
    gearPressed: {
        padding: 10,
        display: 'flex',
        alignItems: 'center',
    },
    textpopup: {
        color: 'white',
        marginLeft: 3,
    },
    reportButton: {
        borderWidth: 2,
        borderColor: '#282828',
        padding: 15,
        alignItems: 'center',
        color: 'white',
    },
    reportButtonText: {
        color: 'white',
    },
    reportButtonTitre: {
        color: '#A65AFF',
    },
    reportOption: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: 120,
        right: 70,
        zIndex: 5,
        backgroundColor: '#2E2E2E',
    },
    noreportOption: {
        display: 'none',
    },
    accordMessage: {
        display: 'flex',
        position: 'absolute',
        top: 150,
        left: 50,
        zIndex: 5,
        backgroundColor: '#2E2E2E',
        borderWidth: 2,
        borderColor: '#282828',
        width: 300,
        height: 200,
        padding: 50,
        justifyContent: 'center',
    },
    noaccordMessage: {
        display: 'none',
    },
    btnaccord: {
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
    btnaccordtext: {
        textAlign: 'center',
        color: 'white',
    },
});

export default styles;
