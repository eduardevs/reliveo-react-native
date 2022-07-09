import {View, TouchableOpacity, Text, Button, Platform, Alert, ActivityIndicator} from 'react-native'
import React, {useState, useEffect, useRef} from 'react'
import * as Notifications from 'expo-notifications'
import {Audio, Video} from 'expo-av'
import {Feather} from '@expo/vector-icons'
import * as MediaLibrary from 'expo-media-library'


import {firebase} from '../../../../firebaseConfig'

import styles from '../styles'
import alert from "react-native-web/dist/exports/Alert";
import {Activity} from "react-native-feather";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});


export default function PreviewVideo({record, setRecordFinish, setRecord}) {
    const [status, setStatus] = React.useState({});
    const video = React.useRef(null);

    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();


    const [uploding, setUploding] = useState(false);


    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });
        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

    const uplodVideo = async () => {
        const response = await fetch(record)
        const blob = await response.blob()
        console.log(record)
        const filename = `reliveo/reliveo${record.slice(-40, -4)}`
        const ref = firebase.storage().ref().child(filename).put(blob)
        ref.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
                setUploding(true)
            },
            (error) => {
                setUploding(false)
                console.log(error)
                return
            },
            () => {
                ref.snapshot.ref.getDownloadURL().then((url) => {
                    setUploding(false)
                    console.log("download url : " + url)
                    blob.close()
                    return url
                })
            })
    }


    async function schedulePushNotification() {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Reliveo",
                body: 'Ta vidéo est téléchargé !',
            },
            trigger: null,
        });
    }

    const downloadFile = async (uri) => {
        await MediaLibrary.saveToLibraryAsync(uri)
        await schedulePushNotification()
    }
    return (
        <>
            {/* Section pour regarder la vidéo enregistré */}
            <View style={styles.cameraContainer}>
                <Video
                    ref={video}
                    style={styles.video}
                    source={{
                        uri: record,
                    }}
                    resizeMode="contain"
                    isLooping
                    shouldPlay
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
                <View style={styles.buttonCameraContainer}>
                    <View style={styles.sideBarContainer}>
                        <TouchableOpacity
                            style={styles.sideBarButton}
                            onPress={() => {
                                setRecordFinish(false);
                                setRecord(null)
                            }}
                        >
                            <Feather name="x-circle" size={24} color={'#A65AFF'}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.sideBarButton}
                            onPress={async () => {
                                await downloadFile(record);
                            }}
                        >
                            <Feather name="download" size={24} color={'#A65AFF'}/>
                        </TouchableOpacity>
                        {!uploding ?
                            <TouchableOpacity
                                style={styles.sideBarButton}
                                onPress={uplodVideo}
                            >
                                <Feather name="upload" size={24} color={'#A65AFF'}/>
                            </TouchableOpacity>
                            :
                            <ActivityIndicator size="large" color="white"/>
                        }
                    </View>
                </View>
            </View>
        </>
    )

    async function registerForPushNotificationsAsync() {
        let token;
        if (Constants.isDevice) {
            const {status: existingStatus} = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const {status} = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                alert('Failed to get push token for push notification!');
                return;
            }
            token = (await Notifications.getExpoPushTokenAsync()).data;
            console.log(token);
        } else {
            alert('Must use physical device for Push Notifications');
        }

        if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }
    }
}