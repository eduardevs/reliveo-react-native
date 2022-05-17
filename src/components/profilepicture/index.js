import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
// NPO impoter l'image et la fonction d'import pour le profil
import Contenus from "../contenus/index.js";
import Evenements from "../evenements/index.js";
import Favoris from "../favoris/index.js";

export default function Profilepicture() {
	return (
		<View style={styles.container}>
			<Image
				style={styles.profile}
				source={require("../../../assets/gigachad.png")}
			/>
			<View style={styles.profile.details}>
				<Text style={styles.nickname}>GigaDunmer</Text>
				<Text style={styles.hashtagfollowers}>@TribunallSuperior69</Text>
				<Text style={styles.hashtagfollowers}>1.5M followers</Text>
			</View>
			<View></View>
		</View>
	);
}

const styles = StyleSheet.create({
	profile: {
		borderRadius: 100,
		height: 170,
		width: 170,
		borderWidth: 5,
		borderColor: "#A65AFF",
	},
	container: {
		display: "flex",
		alignItems: "center",
		height: "100%",
		textAlign: "center",
		flexDirection: "column",
		marginTop: 70,
	},
	profile_details: {
		textAlign: "center",
		position: "absolute",
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
