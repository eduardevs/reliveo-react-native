import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';
import gpsLocation from "../../../assets/gpsLocation.png";

import styles from "../styles";
import SyncGeolocationSuccess from "./SyncGeolocationContent/syncGeolocationSuccess";
import SyncGeolocationError from "./SyncGeolocationContent/syncGeolocationError";

export default function SyncGeolocation({setSynchroEtape}) {
    const [locationIs, setLocationIs] = useState()
    const [userLocation, setUserLocation] = useState(null)
    const [eventInfo, setEventInfo] = useState(
        {
            "latitude": 48.859416,
            "longitude": 2.4337297,
            "rue": "Rue du Champ Louet",
            "postalCode": "44190",
            "city": "Clisson",
            "concertDate": "18/06/2022",
            "concertHeur": "8h"
        }
    )

    useEffect(() => {
        CompareGeoLocation()
    }, [userLocation]);

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
        setUserLocation(coords)
        console.log(userLocation)

        // if (coords) {
        //     const {latitude, longitude} = coords
        //     let response = await Location.reverseGeocodeAsync({
        //         latitude,
        //         longitude,
        //     })
        //     console.log(coords)
        //     for (let item of response) {
        //         let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`
        //
        //
        //     }
        // }
    }

    const CompareGeoLocation = () => {
        if (userLocation) {

            if (userLocation.longitude > eventInfo.longitude - 0.0001 &&
                userLocation.longitude < eventInfo.longitude + 0.0001 &&
                userLocation.latitude > eventInfo.latitude - 0.001 &&
                userLocation.latitude < eventInfo.latitude + 0.001) {
                setLocationIs(true)

            } else {
                setLocationIs(false)
            }
        }

    }
    const LocationIs = () => {
        switch (locationIs) {
            case true:
                return <SyncGeolocationSuccess eventInfo={eventInfo} setSynchroEtape={setSynchroEtape}/>
            case false:
                return <SyncGeolocationError eventInfo={eventInfo}/>
            default:
                return <Text style={styles.bottomWarningText}>Position Inconue</Text>
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
                             latitude: eventInfo.latitude,
                             longitude: eventInfo.longitude,
                             latitudeDelta: 0.09,
                             longitudeDelta: 0.04,
                         }}
                >
                    <Marker
                        coordinate={{
                            latitude: eventInfo.latitude,
                            longitude: eventInfo.longitude,
                        }}
                        title={'Lat: ' + eventInfo.latitude + ', Long: ' + eventInfo.longitude}
                    />
                </MapView>
                <TouchableOpacity
                    onPress={() => GetCurrentLocation()}
                    style={styles.ImageGpsLocationBtnContainer}
                >
                    <Image source={gpsLocation}/>
                </TouchableOpacity>
            </View>
            {LocationIs()}
        </>
    )
}