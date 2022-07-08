import React, {useEffect, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Ionicons, AntDesign, MaterialIcons, Entypo} from '@expo/vector-icons';
import {Video} from "expo-av";
import dimensions from "react-native-web/dist/exports/Dimensions";

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import * as Notifications from "expo-notifications";

export default function IndexFileVideo({navigation}) {
    const [IsLike, setIsLike] = useState(false);
    const [videos, setVideos] = useState([
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.pexels.com/photos/1152359/pexels-photo-1152359.jpeg?cs=srgb&dl=pexels-marctutorials-1152359.jpg&fm=jpg"
    ]);
    const [videoNumber, setVideoNumber] = useState(0);


    const onSwipe = (gestureName, gestureState) => {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        const swipeDorection = gestureName
        const videoMax = videos.length - 1
        switch (swipeDorection) {
            case SWIPE_UP:
                if (videoNumber >= videoMax) {
                    setVideoNumber(videoMax)
                } else if (videoNumber < videoMax) {
                    setVideoNumber(videoNumber + 1)
                }
                break;
            case SWIPE_DOWN:
                if (videoNumber <= 0) {
                    setVideoNumber(0)
                } else if (videoNumber > 0) {
                    setVideoNumber(videoNumber - 1)
                }
                break;
            case SWIPE_LEFT:
                navigation.navigate('Profile')
                break;
            case SWIPE_RIGHT:
                console.log("right")
                break;
        }
    }

    return (
        <>
            <View style={styles.containerVideo}>
                <GestureRecognizer
                    onSwipe={(direction, state) => onSwipe(direction, state)}
                    config={{
                        velocityThreshold: 0.3,
                        directionalOffsetThreshold: 80
                    }}
                    style={styles.containerVideo}
                >


                    <Image
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: Dimensions.get("window").height,
                            width: Dimensions.get("window").width,
                        }}
                        source={{
                            uri: videos[videoNumber]
                        }}
                        resizeMode="cover"
                    />
                    {/*<Video*/}
                    {/*    style={{*/}
                    {/*position: 'absolute',*/}
                    {/*top: 0,*/}
                    {/*left: 0,*/}
                    {/*height: Dimensions.get("window").height,*/}
                    {/*width: Dimensions.get("window").width,*/}
                    {/*    }}*/}
                    {/*    source={{*/}
                    {/*        uri: videos[videoNumber]*/}
                    {/*    }}*/}
                    {/*    resizeMode="cover"*/}
                    {/*    isLooping*/}
                    {/*    shouldPlay*/}
                    {/*/>*/}
                </GestureRecognizer>
            </View>
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
                            <Image/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonEvent} onPress={() => console.log('page event')}>
                            <Image/>
                        </TouchableOpacity>
                        <View style={styles.vueConter}>
                            <Ionicons name="eye-outline" size={20} color="#FFFFFF"/>
                            <Text style={styles.textVideo}>660k</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}
