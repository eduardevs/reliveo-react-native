import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomNavigationView: {
        backgroundColor: '#2E2E2E',
        width: '100%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'column',
        position: "relative",
        alignItems: "center",
    },
    bottomTitle: {
        textAlign: 'left',
        fontSize: 28,
        color: '#A65AFF',
        fontWeight: 'bold',
        padding: 20,
    },
    bottomText: {
        textAlign: 'left',
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 15,
        paddingRight: 20,
        paddingLeft: 20,
    },
    bottomList: {
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'left',
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    bottomInfoTitle: {
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'center',
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    bottomInfoText: {
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'center',
        fontSize: 12,
        color: '#FFF',
        fontWeight: 'normal',
        marginBottom: 5,
    },
    ImageQrCodeBtnContainer: {
        backgroundColor: '#232323',
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        height: 150,
        borderRadius: 15,
        marginTop: 10,
    },
    ImageEventContainer: {
        marginBottom:20,
        marginTop:30,
    },
});

export default styles