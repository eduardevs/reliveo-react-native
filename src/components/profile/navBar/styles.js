import {Dimensions, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        top:0,
        width: Dimensions.get("window").width,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 35,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    gear:{
        padding:10, 
        display:'flex',
        alignItems:'center',
    },
    gearPressed:{
        padding:10, 
        display:'flex',
        alignItems:'center',
    },
    textpopup:{
        color:'white',
        marginLeft: 3,
    },
    popupcontainer:{
        flexDirection: 'row', 
        display: 'flex'
    },
    popupnocontainer:{
        display:'none'
    }
});

export default styles