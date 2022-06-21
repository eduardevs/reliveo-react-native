import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Button, Dimensions} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';


export default function SyncQrCodeScan({setSynchroEtape}) {


    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={() => setSynchroEtape('SyncInfoEvent')}
                style={styles.camera}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top:"-11%",
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:"center",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
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
