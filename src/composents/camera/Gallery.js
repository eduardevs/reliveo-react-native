import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from "expo-media-library"

import styles from './styles'
import { Video } from 'expo-av'

export default function Gallery() {
    const [hasGalleryPermissions, setHasGalleryPermissions] = useState(false)
    const [galleyItems, setGalleyItems] = useState([])
    const [image, setImage] = useState(null);


    useEffect(() => {
        (async () => {    
          const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
          setHasGalleryPermissions(galleryStatus.status == "granted")
    
          if(galleryStatus.status == "granted") {
            const userGalleryMedia = await MediaLibrary.getAssetsAsync({sortBy: ['creationTime'], mediaType: ['video']})
            setGalleyItems(userGalleryMedia.assets)
          }
        })()
      }, [])
      const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
      const photo = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          quality: 1,
        });
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
    
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Gallery" onPress={pickImage} />
          {/* <Button title="Caméra" onPress={photo} /> */}
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 100, margin:10}} />}
        </View>
      );
    }