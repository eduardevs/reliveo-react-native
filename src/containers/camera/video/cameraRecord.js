import {StyleSheet, Text, View, TouchableOpacity, Image, Button} from 'react-native'
import React, {useEffect, useState} from 'react'
import {Camera} from 'expo-camera'
import {Feather} from '@expo/vector-icons'


import styles from '../styles'
import * as Location from "expo-location";

export default function CameraRecord({setRecord, setRecordFinish, record}) {

    const [cameraRef, setCameraRef] = useState(null)

    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
    const [cameraFlash, setCameraFlash] = useState(Camera.Constants.FlashMode.off)

    const [isCameraRedy, setIsCameraRedy] = useState(false)

    useEffect(async () => {
        if (record) {
            setRecordFinish(true)
        }
    }, [record]);

    const recordVideo = async () => {
        console.log(Date.now())
        if (cameraRef) {
            try {
                const options = {maxDuration: 7}
                const data = await cameraRef.recordAsync(options)
                await setRecord(data.uri)
            } catch (error) {
                console.warn(error)
            }
        }
    }


    const stopVideo = async () => {
        if (cameraRef) {
            cameraRef.stopRecording()
            await console.log(Date.now())
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
                            onPress={() => setCameraFlash(cameraFlash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off)}
                        >
                            <Feather name="zap" size={24} color={'#A65AFF'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomBarContainer}>
                        <View style={styles.recordButtonContainer}>
                            <TouchableOpacity
                                disabled={!isCameraRedy}
                                onLongPress={() => recordVideo()}
                                onPressOut={() => stopVideo()}
                                style={styles.recordButton}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}