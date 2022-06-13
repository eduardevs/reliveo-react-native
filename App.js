import { StyleSheet, Text, View } from "react-native";
import IndexPhoto from "./composents/camera/photo/indexPhoto";
import IndexSynchro from "./composents/synchro/indexSynchro";

import { RootStack } from "./navigators/RootStack";

// screens
export default function App() {
	return (
		<RootStack />
		// (
		//   <View style={styles.container}>
		//     <Text>Open up App.js to start working on your app!</Text>

		//     <StatusBar style="auto" />
		//   </View>
		// );
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
