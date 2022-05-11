import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    containerNo: {
        display: "none",
    },
    camera: {
        flex: 1,
        aspectRatio: 9/16,
    },
    bottomBarContainer: {
        alignItems: "center",
        position: 'absolute',
        bottom:0,
        flexDirection:'row',
        marginBottom:30,
    },
    recordButtonContainer: {
        flex:1,
        marginHorizontal: 30,
    },
    recordButton: {
        borderWidth: 8,
        borderColor: '#A65AFF87',
        backgroundColor: '#A65AFF',
        borderRadius: 100,
        height:80,
        width:80,
        alignSelf: 'center',
    },
    galleryButton: {
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderColor: "#A65AFF",
        borderRadius: 10,
        overflow:"hidden",
        width: 50,
        height: 50,
    },
    galleyButtonImage: {
        width: 50,
        height: 50,
    },
    sideBarContainer: {
        position:"absolute",
        top: 60,
        right:0,
        marginHorizontal:20,
    },
    sideBarButton: {
        alignContent: 'center',
        marginBottom: 25,
    },
    // videoContainer: {
    //     flex: 1,
    //     marginTop: 30,
    //     backgroundColor: '#2E2E2E',
    //     position:'absolute',
    //     display:'flex',
    // },
    video: {
        height:'100%',
        width:'100%',

    },
})

export default styles;