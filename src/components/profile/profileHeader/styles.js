import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    profile: {
		borderRadius: 100,
		height: 170,
		width: 170,
		borderWidth: 5,
		borderColor: "#A65AFF",
	},
	container: {
		// display: "flex",
		alignItems: "center",
		// height: "100%",
		// textAlign: "center",
		// flexDirection: "column",
		// marginTop: 5,
		backgroundColor: "#2E2E2E"
	},
	nickname: {
		fontWeight: "600",
		fontSize: 20,
		color: "#fff",
		marginTop: 15,
		marginBottom: 5,
	},
	hashtagfollowers: {
		fontWeight: "400",
		fontSize: 13,
		color: "#fff",
		marginBottom: 5,
	},
});

export default styles