import React, {useState, useEffect, useContext} from 'react';
import {Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';
import gpsLocation from "../../../assets/gpsLocation.png";

import styles from "../styles";
import SyncGeolocationSuccess from "./SyncGeolocationContent/syncGeolocationSuccess";
import SyncGeolocationError from "./SyncGeolocationContent/syncGeolocationError";
import {SyncEventContext} from "../../../context/SyncEventContext";

const event = require('../JSON/FakeData.json');

export default function SyncGeolocation({setSynchroEtape}) {
    const [locationIs, setLocationIs] = useState()
    const [userLocation, setUserLocation] = useState(null)

    const {
        latitude,
        longitude,
    } = useContext(SyncEventContext)

    console.log(latitude + " - " + longitude)
    useEffect(async () => {
        CompareGeoLocation()
        let {status} = await Location.requestForegroundPermissionsAsync()
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
    }


    const CompareGeoLocation = () => {
        if (userLocation) {

            if (userLocation.longitude > Number(longitude) - 0.0001 &&
                userLocation.longitude < Number(longitude) + 0.0001 &&
                userLocation.latitude > Number(latitude) - 0.001 &&
                userLocation.latitude < Number(latitude) + 0.001) {
                setLocationIs(true)

            } else {
                setLocationIs(false)
            }
        }

    }
    const LocationIs = () => {
        switch (locationIs) {
            case true:
                return <SyncGeolocationSuccess eventInfo={event.event} setSynchroEtape={setSynchroEtape}/>
            case false:
                return <SyncGeolocationError eventInfo={event.event}/>
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
                         followsUserLocation={true}
                         showsUserLocation={true}
                         showsMyLocationButton={true}
                         showsCompass={true}
                         toolbarEnabled={true}
                         zoomEnabled={true}
                         rotateEnabled={true}

                         initialRegion={{
                             latitude: Number(latitude),
                             longitude: Number(longitude),
                             latitudeDelta: 0.09,
                             longitudeDelta: 0.04,
                         }}
                >
                    <Marker
                        coordinate={{
                            latitude: Number(latitude),
                            longitude: Number(longitude),
                        }}
                        title={'Lat: ' + latitude + ', Long: ' + longitude}
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