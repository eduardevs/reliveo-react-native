import React from 'react'
import * as ImagePicker from 'expo-image-picker'


const Gallery = async (setImage) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
        setImage(result.uri)
    }
};

export default Gallery