import { StyleSheet } from 'react-native';


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
        opacity: 0.1,
        marginBottom: 30,
        borderWidth: 1,
        borderRadius: 17,
        transform: [{ translateX: -150 }],
    },
    rectangle: {
        position: 'relative',
        width: 300,
        height: 150,
        marginBottom: 30,
        borderWidth: 1,
        borderRadius: 17,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        transform: [{ translateX: 0 }],
    },
    rectangleBis: {
        position: 'absolute',
        width: 300,
        height: 150,
        backgroundColor: '#272727',
        marginBottom: 30,
        borderRadius: 17,
        zIndex: -1,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        
    },
    smallrect: {
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 20,
        // backgroundColor: '#3E3E3E',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 30,
        borderBottomColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        position: 'absolute',
        top: 15,
    },
    lock: {
        width: 20,
        height: 20,
        backgroundColor: '#3E3E3E',
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    nolock:{
        display:'none'
    },
    eventTitle: {
        color: 'white',
        textTransform: 'capitalize',
        fontWeight: '600',
        fontSize: 18
    },
    eventDate: {
        color: 'white',
        fontSize: 13,
        
    },
    eventPlace: {
        color: 'white',
        textTransform: 'capitalize',
        fontSize: 15
    },
    eventContent: {
        right:0,
        top: 24,
        paddingLeft:25,
        paddingRight:25,
        alignItems:'center',
        position:'absolute',
      
    },
    seeMore:{
        backgroundColor: '#A65AFF',
        marginTop:5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft:30,
        paddingRight: 30,
        borderRadius:10,
        width:100
    },
    textMore:{
        color:'#FFFFFF',
        alignSelf:'center',
        fontSize:15,
    }
});

export default styles;
