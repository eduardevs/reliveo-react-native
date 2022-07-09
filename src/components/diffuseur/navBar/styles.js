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
    chevron: {
        padding: 10,
        display: 'flex',
        alignItems: 'center',
    },
    chevronPressed: {
        padding: 10,
        display: 'flex',
        alignItems: 'center',
    },
    dpopupcontainer: {
        display: 'none',
    },
    dpopupnocontainer: {
        display: 'flex',
        position: 'absolute',
        right: 30,
        backgroundColor: '#2E2E2E',
        padding: 15,
        top: 50,
        width:180,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    textpopup: {
        color: 'white',
        marginLeft: 10,
        paddingBottom: 15,
        fontSize: 12,
        fontWeight: "300"
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
