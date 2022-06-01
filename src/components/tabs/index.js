import {useState} from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	FlatList,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

const listTab = [
	{
		category: "Contenus"
		
	},
	{
		category: "Favoris"
		
	},
	{
		category: "Évènements"
		
	},
];

const Tabs = () => {

    const [status, setStatus] = useState("Contenus")
    const setStatusFilter = status => {
        setStatus(status)
    }

	const [loaded] = useFonts({
		Rubik: require("../../../assets/fonts/Rubik-Regular.ttf"),
	});

	if (!loaded) {
		return null;
	}
    

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.listTab}>
				{listTab.map((e) => (
					<TouchableOpacity 
                        style={[styles.btnTab, status === e.status && styles.btnTabActive]} 
                        onPress={() => setStatusFilter(e.status)}
                    >
						<Text style={styles.textTab}>{e.category}</Text>
					</TouchableOpacity>
				))}
			</View>
		</SafeAreaView>
	);
};

export default Tabs;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10,
		justifyContent: "center",
	},
	listTab: {
		flex: 1,
		padding: 15,
		flexDirection: "row",
		alignSelf: "center",
		marginBottom: 20,
	},
	btnTab: {
		width: Dimensions.get("window").width / 3,
		flexDirection: "row",
		borderColor: "#EBEBEB",
		padding: 8,
		justifyContent: "center",
	},
	textTab: {
		fontSize: 18,
		fontFamily: "Rubik",
		color: "#fff",
	},
	btnTabActive: {
		backgroundColor: "#E6838D",
	},
});
