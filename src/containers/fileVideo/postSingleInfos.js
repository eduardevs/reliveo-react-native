import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Ionicons, AntDesign, Entypo} from '@expo/vector-icons';
import axios from "axios";

export default function PostSingleInfos({navigation, item}) {
    const [IsLike, setIsLike] = useState(false);

    const [event, setEvent] = useState()
    const [user, setUser] = useState()


    // useEffect(() => {
    //     console.log(user.customPayload.photo)
    // }, [event, user]);

    const fetchEvent = () => {
      if (event) {
          return (
              <Image
                  style={{flex:1}}
                  source={{
                      uri: event[0].photo
                      // uri: "https://firebasestorage.googleapis.com/v0/b/reliveo-f50d4.appspot.com/o/photoEvent%2Funknown.png?alt=media&token=862cd0b3-e457-492b-955d-5cadeb251123"
                  }}
              />
          )
      }
    }

    const fetchUser = () => {
        if (user) {
            return (
                <Image
                    style={{flex:1, borderRadius:8000}}
                    source={{
                        uri: user.customPayload.photo
                        // uri: "https://firebasestorage.googleapis.com/v0/b/reliveo-f50d4.appspot.com/o/photoEvent%2Funknown.png?alt=media&token=862cd0b3-e457-492b-955d-5cadeb251123"
                    }}
                />
            )
        }
    }

    useEffect(() => {
        try {
            axios(`http://reliveoapi.com${item.author}`, {
                method: 'GET'
            })
                .then(res => {
                    setUser(res.data)
                })
                .catch(error => console.log(error.message))

            axios(`http://reliveoapi.com/api/events?posts=${item.event}`, {
                method: 'GET'
            })
                .then(res => {
                    setEvent(res.data)
                })
                .catch(error => console.log(error.message))

        } catch (error) {
            console.error(error.message)
        }
    }, []);
    return (
        <View style={styles.containerVideoButton}>
            <View style={styles.containerVideoButtonSectionTop}>
                <View style={styles.containerVideoButtonSectionInterne}>
                    {/*<TouchableOpacity onPress={() => console.log('return')}>*/}
                    {/*    <MaterialIcons name={'keyboard-arrow-left'} size={30} color="black" />*/}
                    {/*</TouchableOpacity>*/}
                </View>
                <View style={styles.containerVideoButtonSectionInterne}>
                    <TouchableOpacity
                        style={styles.buttonUserProfil}
                        onPress={
                            () => navigation.navigate('Profile')
                            // console.log('heey')
                        }
                    >
                        <Image/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('menu')}>
                        <Entypo name={'dots-three-vertical'} size={30} color="black"/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerVideoButtonSectionBottom}>
                <View style={styles.containerVideoButtonSectionInterne}>
                    <Text style={{color: "white"}}>At Hellfest 2022</Text>
                </View>
                <View style={styles.containerVideoButtonSectionInterne}>
                    <TouchableOpacity onPress={() => setIsLike(!IsLike)}>
                        <AntDesign name={IsLike ? 'star' : 'staro'} size={52} color="#FBBC05"/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonCreatorProfil}
                        onPress={() => console.log('page createur')}
                    >
                        {fetchUser()}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonEvent} onPress={() => console.log('page event')}>
                        {fetchEvent()}
                    </TouchableOpacity>
                    <View style={styles.vueConter}>
                        <Ionicons name="eye-outline" size={20} color="#FFFFFF"/>
                        <Text style={styles.textVideo}>660k</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

