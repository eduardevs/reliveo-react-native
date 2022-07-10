import React, {useState, useEffect, useContext} from 'react';
import {Text, View, StyleSheet, Button, Dimensions, Picker} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import getEvents from "../../fileVideo/getEvents";
import event from "../../synchro/JSON/FakeData.json";
import {SyncEventContext} from "../../../context/SyncEventContext";


export default function SyncQrCodeScan({setSynchroEtape}) {
    const getAllEvents = getEvents()

    const [events, setEvents] = useState()
    const {setEventContext} = useContext(SyncEventContext)

    useEffect(() => {
        try {
            getAllEvents()
                .then(res => {
                    setEvents(res.data)
                    console.log(res.data.length)
                })
        } catch (error) {
            console.error(error)
        }
    }, []);


    const scanQrCode =  ({ type, data }) => {
        events.map((item, index) => {
            console.log(item)
            if(item.qrcode === data) {
                console.log(data)
                setEventContext(item)
                setSynchroEtape('SyncInfoEvent')
            }
        })
    }


    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanQrCode}
                style={styles.camera}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:"center",
        width: "100%",
        height: "100%",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,

    },
    camera: {
        flex: 1,
        aspectRatio: 9 / 16,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,

    },
});
