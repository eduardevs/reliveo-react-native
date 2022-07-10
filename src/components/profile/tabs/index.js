import { View, Text, Image, Animated, TouchableOpacity, TouchableHighlight } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import styles from './styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from '../../../context/AuthContext';
import useGetEventsList from '../../../utils/hooks/useGetEventList';


export default function ProfileTabs({navigation, children, eventName}) {
    const Tab = createMaterialTopTabNavigator();
    const [events, setEvents] = useState([1, 2, 3, 4, 5, 6]);
    const [content, setContent] = useState([1, 2, 3, 4, 5]);
    const [favoris, setFavoris] = useState([1, 2, 3, 4, 5]);
    // const { eventInfo, event } = useContext(AuthContext);
    // useEffect(() => {
    //     console.log(eventInfo)
    //     useGetEventsList()
    //             .then((res) => event(res))
    //             .catch((error) => {
    //                 console.log(error)
    //             })
    // }, [])

    // const handleSubmitt = () =>{
    //     useGetEventsList().then((res) => event(res))
    // }

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
                    {content.map((content, index) => {
                        const [activeBtn, setActiveBtn] = useState(false);
                        const [isPrivate, setisPrivate] = useState(false);
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('DiffuseurScreen');
                                }}
                                style={styles.carre}
                            >
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
                    {favoris.map((favoris, index) => {
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

    const Events = () => {
        const [activeBtn, setActiveBtn] = useState(false);
        const { eventInfo, event } = useContext(AuthContext);
        const [eventTitle, setEventTitle] = useState()
        useEffect(() => {
            
            if (eventInfo) {
                const dataI = eventInfo;
                if (dataI) {
                    setEventTitle(dataI);
                }
            }
        }, [eventInfo]);

        // useEffect(() => {
        
        // useGetEventsList()
        //         .then((res) => event(res))
        //         .catch((error) => {
        //             console.log(error)
        //         })
        // }, [eventTitle])
        const handleSubmitt = () =>{
            useGetEventsList().then((res) => event(res))
        }
        
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
                <Text onPress={() => {handleSubmitt()}}>Click</Text>
                    {eventTitle && eventTitle.map((event, index) => {
                        
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
                                <View style={styles.rectangleBis}>
                                    <View style={styles.eventContent}>
                                        <Text style={styles.eventTitle}>{event.name}</Text>
                                        <Text style={styles.eventDate}>may 28, 2O15</Text>
                                        <Text style={styles.eventPlace}>Birmingham, UK</Text>
                                        <TouchableOpacity
                                            onPress={() => {
                                                navigation.navigate('EvenementScreen');
                                                
                                            }}
                                            style={styles.seeMore}
                                        >
                                            <Text style={styles.textMore}>Voir</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
        );
    };
    const [iscurrentUser] = useState(true);
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
                    <Tab.Screen name="Events" component={Events} />
                </Tab.Navigator>
            );
    }
}
