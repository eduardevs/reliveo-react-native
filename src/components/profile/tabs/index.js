import { View, Text, Image, Animated, TouchableOpacity, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileTabs() {
    const Tab = createMaterialTopTabNavigator();
    const [events, setEvents] = useState([1, 2, 3, 4, 5, 6]);

    const Content = () => {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingTop: 30,
                        backgroundColor: '#2E2E2E',
                    }}
                ></View>
            </ScrollView>
        );
    };

    const Favoris = () => {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        paddingTop: 30,
                        backgroundColor: '#2E2E2E',
                    }}
                >
                {events.map((event, index) => {
                    const [activeBtn, setActiveBtn] = useState(false);
                    return (
                        <TouchableOpacity style={styles.carre}>
                            <View style={styles.smallrect}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Ionicons name="eye-outline" size={20} color="#FFFFFF" />
                                    <Text style={{ alignSelf: 'center', color: '#FFFFFF', marginLeft: 5 }}>660k</Text>
                                </View>
                            </View>
                            <View style={styles.lock}>
                                <MaterialIcons name="lock" size={20} color="#FFFFFF" />
                            </View>
                        </TouchableOpacity>
                    );
                })}
                </View>
            </ScrollView>
        );
    };

    const Events = () => {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingTop: 30,
                        backgroundColor: '#2E2E2E',
                    }}
                >
                    {events.map((event, index) => {
                        const [activeBtn, setActiveBtn] = useState(false);
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    setActiveBtn(!activeBtn);
                                }}
                            >
                                <View
                                    style={activeBtn ? styles.rectangleActive : styles.rectangle}
                                    value={event}
                                ></View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
        );
    };

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: '#2E2E2E', position: 'relative' },
                tabBarActiveTintColor: '#F2F2F2',
                tabBarInactiveTintColor: '#C5C5C5',
                tabBarIndicatorStyle: { backgroundColor: '#F2F2F2', position: 'absolute' },
                // tabBarIndicatorContainerStyle: { position: "relative"}
            }}
        >
            <Tab.Screen name="Content" component={Content} />
            <Tab.Screen name="Favoris" component={Favoris} />
            <Tab.Screen name="Events" component={Events} />
        </Tab.Navigator>
    );
}
