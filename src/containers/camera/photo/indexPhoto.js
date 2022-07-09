import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Camera } from 'expo-camera'
import { Audio, Video } from 'expo-av'
import * as ImagePicker from "expo-image-picker"
import * as MediaLibrary from "expo-media-library"

import styles from '../styles'
import CameraPhoto from './cameraPhoto'


export default function IndexPhoto ({setImage, navigation}) {
  const [hasCameraPermissions, setHasCameraPermissions] = useState(false)
  const [hasAudioPermissions, setHasAudioPermissions] = useState(false)
  const [hasGalleryPermissions, setHasGalleryPermissions] = useState(false)
  const [galleyItems, setGalleyItems] = useState([])

  const [record, setRecord] = useState(false);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync()
      setHasCameraPermissions(cameraStatus.status == "granted")

      const audioStatus = await Audio.requestPermissionsAsync()
      setHasAudioPermissions(audioStatus.status == "granted")

      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
      setHasGalleryPermissions(galleryStatus.status == "granted")

      if(galleryStatus.status == "granted") {
        const userGalleryMedia = await MediaLibrary.getAssetsAsync({sortBy: ['creationTime'], mediaType: ['video']})
        setGalleyItems(userGalleryMedia.assets)
      }
    })()
  }, [])


    if(!hasCameraPermissions || !hasAudioPermissions) {
        return (
            <View>
                <Text>
                    Nous n'avons pas toutes les permissions... ;-;
                </Text>
            </View>
        )

    } else {
        return (
            <>
                <View style={styles.container}>
                    <CameraPhoto setRecord={setRecord} record={record}  setImage={setImage}  />
                </View>
            </>
        )
    }
}

