import { StyleSheet, Dimensions } from 'react-native';
import { colors } from './palette';
import { typo } from './fonts';

export const ScreenHeight = Dimensions.get('window').height;

const { primary, ReliveoBrand, secondary, ReliveoBrandLight } = colors;

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 10,
        paddingTop: 30,
        backgroundColor: primary,
        height: ScreenHeight*1.041,
    },
    InnerContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    Avatar: {
        width: 100,
        height: 100,
        margin: 'auto',
        borderRadius: 50,
        borderColor: ReliveoBrand,
        marginBottom: 10,
        marginTop: 10,
    },
    PageTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        color: ReliveoBrand,
        padding: 10,
    },
    SubTitle: {
        fontSize: 18,
        marginBottom: 20,
        letterSpacing: 1,
        fontWeight: 'bold',
        color: ReliveoBrand,
    },
    StyledFormArea: {
        width: '90%',
    },
    StyledButton: {
        padding: 15,
        backgroundColor: ReliveoBrand,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 5,
        height: 60,
    },
    ButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    ButtonTextGoogle: {
        color: 'black',
        fontSize: 16,
    },
    MsgBox: {
        textAlign: 'center',
        fontSize: 13,
        color: 'red',
    },
    Line: {
        height: 1,
        width: '100%',
        backgroundColor: ReliveoBrandLight,
        marginVertical: 10,
    },
    ExtraView: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    ExtraText: {
        justifyContent: 'center',
        alignContent: 'center',
        color: secondary,
        fontSize: 15,
    },
    TextLink: {
        justifyContent: 'center',
        alignItems: 'center',
        color: ReliveoBrand,
        marginLeft: 5,
    },
    TextLinkContent: {
        color: ReliveoBrand,
        fontSize: 15,
    },
});
