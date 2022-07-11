import { View, Text, Image, Animated, TouchableOpacity, TouchableHighlight } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import styles from './styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from '../../../context/AuthContext';
import useGetEventsList from '../../../utils/hooks/useGetEventList';
import moment from 'moment';

export default function Events() {
    const [activeBtn, setActiveBtn] = useState(false);
    const { eventInfo, event } = useContext(AuthContext);
    const [eventTitle, setEventTitle] = useState();
    useEffect(() => {
        if (eventInfo) {
            const dataI = eventInfo;
            if (dataI) {
                setEventTitle(dataI);
            }
        }
    }, [eventInfo]);

    // const date = new Date()
    // let date = moment(new Date()).format('DD/MM/YYYY')
    // useEffect(() => {

    // useGetEventsList()
    //         .then((res) => event(res))
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [eventTitle])
    // const handleSubmitt = () =>{
    //     useGetEventsList().then((res) => event(res))
    // }
    console.log(eventInfo);
    
    return (
        <ScrollView showsVerticalScrollIndicator={false} 
        
        >
            <View
                style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: 30,
                    backgroundColor: '#2E2E2E',
                }}
                    
            >
                {eventTitle &&
                    eventTitle.map((event, index) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0}
                                key={event.id}
                                onPress={() => {
                                    setActiveBtn(event.id);
                                    if(activeBtn !==false){
                
                                        setActiveBtn(false)
                                        console.log('text' + activeBtn)
                                    }
                                }}
                            >
                                <Image
                                    style={activeBtn == event.id ? styles.rectangleActive : styles.rectangle}
                                    value={event.id}
                                    source={{ uri: event.photo }}
                                >
                                    
                                </Image>
                                <View style={styles.rectangleBis}>
                                    <View style={styles.eventContent}>
                                        <Text style={styles.eventTitle}>{event.name}</Text>
                                        <Text style={styles.eventDate}>
                                            {moment(event.dateStart).format('MMMM Do YYYY,')}
                                        </Text>
                                        <Text style={styles.eventPlace}>{event.ville}</Text>
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
}
