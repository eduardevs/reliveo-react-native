import { View, Text } from "react-native";
import React from "react";
import styles from './styles'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"; 

export default function ProfileTabs() {

    const Tab = createMaterialTopTabNavigator();

    const Content = () => {
        return(
            <View>
                <Text>
                Content
                </Text>
            </View>
        )
    }

    const Favoris = () => {
        return(
            <View>
                <Text>
                Favoris
                </Text>
            </View>
        )
    }

    const Events = () => {
        return(
            <View>
                <Text>
                Events
                </Text>
            </View>
        )
    }

	return (
		<Tab.Navigator>
            <Tab.Screen name="Content" component={Content}/>
            <Tab.Screen name="Favoris" component={Favoris}/>
            <Tab.Screen name="Events" component={Events}/>
        </Tab.Navigator>
	);
}
