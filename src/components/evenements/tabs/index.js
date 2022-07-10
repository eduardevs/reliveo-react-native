import { View, Text, Image, Animated, TouchableOpacity, TouchableHighlight, FlatList } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function EvenementTabs({ navigation }) {
    const Tab = createMaterialTopTabNavigator();
    
    const [events, setEvents] = useState([1, 2, 3, 4, 5, 6]);
    const [content, setContent] = useState([1, 2, 3, 4, 5]);
    
    const dates = [
        {
            id: 1,
            city:'Gdansk',
            country: 'Pologne',
            name:'Mystic Festival',
            date: '2 Juin'
        },
        {
            id: 2,
            city:'Gdansk',
            country: 'Pologne',
            name:'Mystic Festival',
            date: '2 Juin'
        },
        {
            id: 3,
            city:'Gdansk',
            country: 'Pologne',
            name:'Mystic Festival',
            date: '2 Juin'
        },
        {
            id: 4,
            city:'Gdansk',
            country: 'Pologne',
            name:'Mystic Festival',
            date: '2 Juin'
        },
        {
            id: 5,
            city:'Gdansk',
            country: 'Pologne',
            name:'Mystic Festival',
            date: '2 Juin'
        },
        {
            id: 6,
            city:'Gdansk',
            country: 'Pologne',
            name:'Mystic Festival',
            date: '2 Juin'
        },
    ]

    const Content = () => {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flexWrap: 'wrap',
                        display: 'flex',
                        flexDirection: 'row',
                        paddingTop: 30,
                        backgroundColor: '#2E2E2E',
                    }}
                >
                    {events.map((content, index) => {
                        const [activeBtn, setActiveBtn] = useState(false);
                        const [isPrivate, setisPrivate] = useState(false);
                        return (
                            <TouchableOpacity style={styles.carre} key={index}>
                                <View style={styles.smallrect}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Ionicons name="eye-outline" size={20} color="#FFFFFF" />
                                        <Text style={{ alignSelf: 'center', color: '#FFFFFF', marginLeft: 5 }}>
                                            660k
                                        </Text>
                                    </View>
                                </View>
                                <View style={isPrivate ? styles.lock : styles.nolock}>
                                    <MaterialIcons name="lock" size={20} color="#FFFFFF" />
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
        );
    };

    const Favoris = () => {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flexWrap: 'wrap',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingTop: 30,
                        backgroundColor: '#2E2E2E',
                    }}
                >
                    {events.map((favoris, index) => {
                        const [activeBtn, setActiveBtn] = useState(false);
                        const [isPrivate, setisPrivate] = useState(false);
                        return (
                            <TouchableOpacity style={styles.carre}>
                                <View style={styles.smallrect}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Ionicons name="eye-outline" size={20} color="#FFFFFF" />
                                        <Text style={{ alignSelf: 'center', color: '#FFFFFF', marginLeft: 5 }}>
                                            660k
                                        </Text>
                                    </View>
                                </View>
                                <View style={isPrivate ? styles.lock : styles.nolock}>
                                    <MaterialIcons name="lock" size={20} color="#FFFFFF" />
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
        );
    };

    const Dates = ({ navigation }) => {
        
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flexDirection: 'column',
                        paddingTop: 30,
                        backgroundColor: '#2E2E2E',
                    }}
                >
                    {dates.map((dates, id) => {
                        
                        return (
                            <View style={{paddingVertical:10, marginLeft: 35}} index={id} >
                                <Text style={{color:'white', fontSize: 16, fontWeight: 'bold'}}>{dates.city}, {dates.country}</Text>
                                <Text style={{color:'white' , fontSize: 13}}>{dates.name} - {dates.date}</Text>
                            </View>
                        );
                    })}
                  
                </View>
            </ScrollView>
        );
    };
    const [iscurrentUser] = useState(false);
    switch (iscurrentUser) {
        case true:
            return (
                <Tab.Navigator
                    screenOptions={{
                        tabBarStyle: { backgroundColor: '#2E2E2E', position: 'relative' },
                        tabBarActiveTintColor: '#F2F2F2',
                        tabBarInactiveTintColor: '#C5C5C5',
                        tabBarIndicatorStyle: { backgroundColor: '#F2F2F2', position: 'absolute' },
                    }}
                >
                    <Tab.Screen name="Content" component={Content} />
                    <Tab.Screen name="Favoris" component={Favoris} />
                    <Tab.Screen name="Events" component={Events} />
                </Tab.Navigator>
            );
        case false:
            return (
                <Tab.Navigator
                    screenOptions={{
                        tabBarStyle: { backgroundColor: '#2E2E2E', position: 'relative' },
                        tabBarActiveTintColor: '#F2F2F2',
                        tabBarInactiveTintColor: '#C5C5C5',
                        tabBarIndicatorStyle: { backgroundColor: '#F2F2F2', position: 'absolute' },
                    }}
                >
                    <Tab.Screen name="Content" component={Content} />
                    <Tab.Screen name="Dates" component={Dates} />
                </Tab.Navigator>
            );
    }
}
