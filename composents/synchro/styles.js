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
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    bottomTitle: {
        textAlign: 'left',
        fontSize: 28,
        color: '#A65AFF',
        fontWeight: 'bold',
        padding : 20,
    },
    bottomText: {
        textAlign: 'left',
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 15,
        paddingRight : 20,
        paddingLeft : 20,
    },
    bottomList: {
        paddingRight : 20,
        paddingLeft : 20,
        textAlign: 'left',
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 5,
    }
});

export default styles