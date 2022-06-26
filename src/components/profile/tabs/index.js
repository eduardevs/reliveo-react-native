import { View, Text } from "react-native";
import React from "react";
import styles from './styles'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"; 
import { ScrollView } from "react-native-gesture-handler";

export default function ProfileTabs() {

    const Tab = createMaterialTopTabNavigator();

    let squares = [];
    let numberOfSquares = 10;
    let rectangles = [];
    let numberOfRectangles = 10;

    for(let index = 0; index < numberOfSquares; index++){
        squares.push(
            <View key={index}>
                <View style={{
                    width:130,
                    height:150,
                    backgroundColor:'black',
                    opacity:0.1,
                    marginLeft: 15,
                    marginRight: 15,
                    marginBottom: 30,
                    borderBottomColor: 'black',
                    borderWidth: 1,
                    borderRadius: 5
                }}>
                    <View style={{
                    width:130,
                    height:150,
                    backgroundColor:'black',
                    opacity:0.1,
                    marginLeft: 15,
                    marginRight: 15,
                    marginBottom: 30,
                    borderBottomColor: 'black',
                    borderWidth: 1,
                    borderRadius: 5
                }}>
                    </View>
                </View>
            </View>
        )
    }

    for(let index = 0; index < numberOfRectangles; index++){
        rectangles.push(
            <View key={index}>
                <View style={{
                    width: 300,
                    height: 150,
                    backgroundColor: 'black',
                    opacity: 0.1,
                    marginLeft: 15,
                    marginRight: 15,
                    marginBottom: 30,
                    borderBottomColor: 'black',
                    borderWidth: 1,
                    borderRadius: 17
                }}>
                </View>
            </View>
        )
    }

    const Content = () => {
        return(
            <ScrollView
            showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flexWrap:'wrap',
                        flexDirection:'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    >
                        {squares}
                </View>
            </ScrollView>
        )
    }

    const Favoris = () => {
        return(
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        flexWrap:'wrap',
                        flexDirection:'row',
                        justifyContent: 'center'
                    }}
                    >
                        {squares}
                </View>
            </ScrollView>
        )
    }

    const Events = () => {
        return(
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        
                        flexDirection:'column',
                        alignItems: 'center'
                    }}
                    >
                        {rectangles}
                </View>
            </ScrollView>
        )
    }

	return (
		<Tab.Navigator
        screenOptions={{
            tabBarStyle: { backgroundColor: '#2E2E2E' },
            tabBarActiveTintColor: '#F2F2F2',
            tabBarInactiveTintColor: '#C5C5C5',
            tabBarIndicatorStyle: { backgroundColor: '#F2F2F2' },
          }}
        >
            <Tab.Screen name="Content" component={Content} style={{marginBottom: 15}}/>
            <Tab.Screen name="Favoris" component={Favoris}/>
            <Tab.Screen name="Events" component={Events}/>
        </Tab.Navigator>
	);
}
