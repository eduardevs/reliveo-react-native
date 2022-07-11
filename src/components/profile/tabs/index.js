import { View, Text, Image, Animated, TouchableOpacity, TouchableHighlight } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import styles from './styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from '../../../context/AuthContext';
import Content from '../contentstab/index'
import Favoris from '../favoristab/index'
import Events from '../eventstab/index';
import useGetEventsList from '../../../utils/hooks/useGetEventList';
import useGetPostsList from '../../../utils/hooks/useGetPostList';


export default function ProfileTabs({navigation, children, eventName}) {
    const Tab = createMaterialTopTabNavigator();
    const [events, setEvents] = useState([1, 2, 3, 4, 5, 6]);
    
    const [favoris, setFavoris] = useState([1, 2, 3, 4, 5]);
    const { eventInfo, event } = useContext(AuthContext);
    const { postInfo, post} = useContext(AuthContext);
    // const { eventInfo, event } = useContext(AuthContext);
    // useEffect(() => {
    //     console.log(eventInfo)
    //     useGetEventsList()
    //             .then((res) => event(res))
    //             .catch((error) => {
    //                 console.log(error)
    //             })
    // }, [])

    
    
    const [iscurrentUser] = useState(true);
    switch (iscurrentUser) {
        case true:
            const handleSubmitt = () =>{
                useGetEventsList().then((res) => event(res))
            }
            
            return (
                <Tab.Navigator
                    screenOptions={{
                        tabBarStyle: { backgroundColor: '#2E2E2E', position: 'relative' },
                        tabBarActiveTintColor: '#F2F2F2',
                        tabBarInactiveTintColor: '#C5C5C5',
                        tabBarIndicatorStyle: { backgroundColor: '#F2F2F2', position: 'absolute' },
                    }}
                >
                    <Tab.Screen 
                    name="Content" 
                    component={Content}
                    
                    />
                    <Tab.Screen name="Favoris" component={Favoris} />
                    <Tab.Screen 
                    name="Events" 
                    component={Events}
                    listeners={{
                        tabPress: e => {
                          handleSubmitt()
                        },
                      }}
                    />
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
