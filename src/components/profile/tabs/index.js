import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileTabs() {
	const Tab = createMaterialTopTabNavigator();

	let squares = [];
	let numberOfSquares = 10;
	let rectangles = [];
	let numberOfRectangles = 10;

	for (let index = 0; index < numberOfSquares; index++) {
		squares.push(
			<View key={index}>
				<View
					style={{
						width: 150,
						height: 150,
						backgroundColor: "black",
						marginLeft: 10,
						marginRight: 10,
						marginBottom: 30,
						borderBottomColor: "black",
						borderWidth: 1,
						borderRadius: 5,
						position: "relative",
					}}
				>
					<View
						style={{
							paddingTop: 2,
							paddingBottom: 2,
							paddingLeft: 5,
							paddingRight: 20,
							backgroundColor: "#3E3E3E",
							marginLeft: 15,
							marginRight: 15,
							marginBottom: 30,
							borderBottomColor: "black",
							borderWidth: 1,
							borderRadius: 5,
							position: "absolute",
							top: 15,
						}}
					>
						<View style={{ flexDirection: "row" }}>
							<Ionicons name="eye-outline" size={20} color="#FFFFFF" />
							<Text
								style={{ alignSelf: "center", color: "#FFFFFF", marginLeft: 5 }}
							>
								660k
							</Text>
						</View>
						
					</View>
                    <View style={{
                            width: 20,
                            height: 20,
							backgroundColor: "#3E3E3E",
							position: "absolute",
							bottom: 10,
                            right: 10,
						}}>
							<MaterialIcons name="lock" size={20} color="#FFFFFF" />
					</View>
				</View>
			</View>
		);
	}

	for (let index = 0; index < numberOfRectangles; index++) {
		rectangles.push(
			<View key={index}>
				<View
					style={{
						width: 300,
						height: 150,
						backgroundColor: "black",
						opacity: 0.1,
						marginBottom: 30,
						borderBottomColor: "black",
						borderWidth: 1,
						borderRadius: 17,
					}}
				></View>
			</View>
		);
	}

	const Content = () => {
		return (
			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						flexWrap: "wrap",
						flexDirection: "row",
						justifyContent: "center",
						paddingTop: 30,
						backgroundColor: "#2E2E2E",
					}}
				>
					{squares}
				</View>
			</ScrollView>
		);
	};

	const Favoris = () => {
		return (
			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						flexWrap: "wrap",
						flexDirection: "row",
						justifyContent: "center",
						paddingTop: 30,
						backgroundColor: "#2E2E2E",
					}}
				>
					{squares}
				</View>
			</ScrollView>
		);
	};

	const Events = () => {
		return (
			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						flexDirection: "column",
						alignItems: "center",
						paddingTop: 30,
						backgroundColor: "#2E2E2E",
					}}
				>
					{rectangles}
				</View>
			</ScrollView>
		);
	};

	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: { backgroundColor: "#2E2E2E", position: "relative" },
				tabBarActiveTintColor: "#F2F2F2",
				tabBarInactiveTintColor: "#C5C5C5",
				tabBarIndicatorStyle: { backgroundColor: "#F2F2F2", position: "absolute"},
                // tabBarIndicatorContainerStyle: { position: "relative"}
			}}
		>
			<Tab.Screen name="Content" component={Content} />
			<Tab.Screen name="Favoris" component={Favoris} />
			<Tab.Screen name="Events" component={Events} />
		</Tab.Navigator>
	);
}
