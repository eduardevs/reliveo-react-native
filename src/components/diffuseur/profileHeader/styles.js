import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    profile: {
		top:30,
		borderRadius: 100,
		height: 140,
		width: 140,
		borderWidth: 5,
		borderColor: "#FBBC05",
	},
	container: {
		paddingTop:30,
		alignItems: "center",
		backgroundColor: "#2E2E2E",
	},
	nickname: {
		fontWeight: "600",
		fontSize: 20,
		color: "#fff",
		marginTop: 40,
		marginBottom: 5,
	},
	hashtagfollowers: {
		fontWeight: "400",
		fontSize: 13,
		color: "#fff",
		marginBottom: 5,
	},
	addUser:{
        backgroundColor: '#A65AFF',
        marginTop:5,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft:15,
        paddingRight: 15,
        borderRadius:10
    },
    textAdd:{
        color:'#FFFFFF',
        alignSelf:'center',
        fontSize:15,
    },
	addUsertext:{
		display:'none'
	},
	textaddedUser:{
		opacity:1,
		fontSize:14,
		color:'#A65AFF'
	},
	textnotaddedUser:{
		opacity:0
	}
});

export default styles