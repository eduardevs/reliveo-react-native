import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Camera } from 'expo-camera'
import { Audio, Video } from 'expo-av'
import * as ImagePicker from "expo-image-picker"
import * as MediaLibrary from "expo-media-library"

import styles from '../styles'
import CameraRecord from './cameraRecord'
import PreviewVideo from './previewVideo'
import Gallery from '../Gallery'

export default function IndexVideo () {
  const [hasCameraPermissions, setHasCameraPermissions] = useState(false)
  const [hasAudioPermissions, setHasAudioPermissions] = useState(false)
  const [hasGalleryPermissions, setHasGalleryPermissions] = useState(false)
  const [galleyItems, setGalleyItems] = useState([])

  const [recordFinish, setRecordFinish] = useState(false);
  const [record, setRecord] = useState(false);

  const [timestampStart, setTimestampStart] = useState()
  const [timestampEnd, setTimestampEnd] = useState()

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
    
    const previewOrRecord = () => {
      switch (recordFinish) {
          case false:
              return (
                  <View style={styles.container}>
                      <CameraRecord setRecord={setRecord} setRecordFinish={setRecordFinish} record={record} setTimestampStart={setTimestampStart} setTimestampEnd={setTimestampEnd} />
                  </View>
              )
          case true:
              return (
                  <View style={styles.container}>
                      <PreviewVideo record={record} setRecord={setRecord} setRecordFinish={setRecordFinish} timestampStart={timestampStart} timestampEnd={timestampEnd}/>
                  </View>
              )
          default:
              return
      }
    }
 
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
            {previewOrRecord()}
        </>
      )
    }
}
