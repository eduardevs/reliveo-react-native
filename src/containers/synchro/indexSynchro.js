import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Button, Text} from 'react-native';
import {BottomSheet} from 'react-native-btr';
// import {BottomSheet} from "react-native-btr/src/Components/BottomSheet";

import styles from './styles'
import SyncInfoQrCode from "./content/syncInfoQrCode";
import SyncQrCodeScan from "../camera/qrCode/syncQrCodeScan";
import {BarCodeScanner} from "expo-barcode-scanner";
import SyncInfoEvent from "./content/syncInfoEvent";
import SyncGeolocation from "./content/syncGeolocation";
import SyncChooseScene from "./content/syncChooseScene";
import SyncPosterReliveo from "./content/syncPosterReliveo";
import IndexVideo from "../camera/video/indexVideo";
import SyncDesynchro from "./content/syncDesynchro";

export default function IndexSynchro({synchroEtape, setSynchroEtape, visible, toggleBottomNavigationView}) {
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);




    const whySynchroEtape = () => {
        if (hasPermission === false || hasPermission === null) {
            return <Text>Nous avons besoin de la caméra !</Text>;
        } else {
            switch (synchroEtape) {
                case "SyncInfoQrCode":
                    return <SyncInfoQrCode setSynchroEtape={setSynchroEtape}/>;
                case "SyncQrCodeScan":
                    return (
                        <View style={styles.overBottomContainer}>
                            <SyncQrCodeScan setSynchroEtape={setSynchroEtape}/>
                        </View>
                    );
                case "SyncInfoEvent":
                    return <SyncInfoEvent setSynchroEtape={setSynchroEtape}/>;
                case "SyncGeolocation":
                    return <SyncGeolocation setSynchroEtape={setSynchroEtape}/>;
                case "SyncChooseScene":
                    return <SyncChooseScene setSynchroEtape={setSynchroEtape}/>;
                case "SyncPosterReliveo":
                    return <SyncPosterReliveo setSynchroEtape={setSynchroEtape}/>;
                case "IndexVideo":
                    return (
                        <View style={styles.overBottomContainer}>
                            <IndexVideo setSynchroEtape={setSynchroEtape}/>
                        </View>
                    );
                case "SyncDesynchro":
                    return <SyncDesynchro setSynchroEtape={setSynchroEtape}/>;
                default:
                    return;
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <BottomSheet
                    visible={visible}
                    onBackButtonPress={toggleBottomNavigationView}
                    onBackdropPress={toggleBottomNavigationView}
                >
                    <View style={styles.bottomNavigationView}>
                        <View style={styles.bottomContainer}>
                            {whySynchroEtape()}
                        </View>
                    </View>
                </BottomSheet>
            </View>
        </SafeAreaView>
    );
}
