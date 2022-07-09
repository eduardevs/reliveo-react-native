import {StyleSheet, Text, View, TouchableOpacity, Image, Button} from 'react-native'
import React, {useEffect, useState} from 'react'
import {Camera} from 'expo-camera'
import {Feather} from '@expo/vector-icons'


import styles from '../styles'

export default function CameraPhoto({setRecord, record, setImage}) {

    const [cameraRef, setCameraRef] = useState(null)

    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
    const [cameraFlash, setCameraFlash] = useState(Camera.Constants.FlashMode.off)

    const [isCameraRedy, setIsCameraRedy] = useState(false)


    useEffect(async () => {
        if (record) {
            setImage(record)
            navigation.navigate('EditProfile')
        }
    }, [record]);

    const takePicture = async () => {
        if (cameraRef) {
            try {
                const data = await cameraRef.takePictureAsync()
                await setRecord(data.uri)
            } catch (error) {
                console.warn(error)
            }
        }
    }


    return (
        <>
            {/* Section pour enregitrer une vidéo */}
            <View style={styles.cameraContainer}>
                <Camera
                    ref={ref => setCameraRef(ref)}
                    style={styles.camera}
                    ratio={'16:9'}
                    type={cameraType}
                    flashMode={cameraFlash}
                    onCameraReady={() => setIsCameraRedy(true)}
                />
                <View style={styles.buttonCameraContainer}>
                    <View style={styles.sideBarContainer}>
                        <TouchableOpacity
                            style={styles.sideBarButton}
                            onPress={() => setCameraType(cameraType === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)}
                        >
                            <Feather name="refresh-ccw" size={24} color={'#A65AFF'}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.sideBarButton}
                            onPress={() => setCameraFlash(cameraFlash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off)}
                        >
                            <Feather name="zap" size={24} color={'#A65AFF'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomBarContainer}>
                        <View style={styles.recordButtonContainer}>
                            <TouchableOpacity
                                disabled={!isCameraRedy}
                                onPress ={() => takePicture()
                                }
                                style={styles.recordButton}
                                
                            />
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}