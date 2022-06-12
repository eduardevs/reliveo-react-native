import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';
import gpsLocation from "../../../assets/gpsLocation.png";

import styles from "../styles";

export default function SyncGeolocation(setSynchroEtape) {
    const [userLocation, setUserLocation] = useState(null)
    const [eventLocation, setEventLocation] = useState(
        {
            "latitude": 48.8593938,
            "longitude": 2.4337298,
        }
    )


    async function GetCurrentLocation() {
        let {status} = await Location.requestForegroundPermissionsAsync()
        if (status !== "granted") {
            Alert.alert(
                "Permission not granted",
                "Allow the app to use location service.",
                [{text: "OK"}],
                {cancelable: false}
            )
        }

        let {coords} = await Location.getCurrentPositionAsync()

        if (coords) {
            const {latitude, longitude} = coords
            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude,
            })
            let location = await Location.getCurrentPositionAsync({});

            for (let item of response) {
                let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`

                setUserLocation(location.coords)
                console.log(location.coords)
            }
        }
    }

    return (
        <>
            <Text style={styles.bottomTitle}>Veuillez vous géolocaliser pour vous synchroniser</Text>
            <Text style={styles.bottomText}>La géolocalisation nous permet de savoir si vous êtes bel et bien sur le
                lieu de l’événement.</Text>
            <View style={styles.mapContainer}>
                <MapView style={styles.map}
                         initialRegion={{
                             latitude: eventLocation.latitude,
                             longitude: eventLocation.longitude,
                             latitudeDelta: 0.09,
                             longitudeDelta: 0.04,
                         }}
                >
                    <Marker
                        coordinate={{
                            latitude: eventLocation.latitude,
                            longitude:  eventLocation.longitude,
                        }}
                        title={'Lat: ' + eventLocation.latitude + ', Long: ' + eventLocation.longitude}
                    />
                </MapView>
                <TouchableOpacity
                    onPress={() => GetCurrentLocation()}
                    style={styles.ImageGpsLocationBtnContainer}
                >
                    <Image source={gpsLocation}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.bottomWarningText}>Position inconnue</Text>
        </>
    )
}