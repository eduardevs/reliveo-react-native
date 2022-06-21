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

export default function IndexSynchro() {
    const [visible, setVisible] = useState(false);
    const [synchroEtape, setSynchroEtape] = useState('SyncInfoQrCode');
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);


    const toggleBottomNavigationView = () => {
        setVisible(!visible);
        setSynchroEtape('SyncInfoQrCode');
    };

    const whySynchroEtape = () => {
        if (hasPermission === false || hasPermission === null) {
            return <Text>Nous avons besoin de la caméra !</Text>;
        }else {
            switch (synchroEtape){
                case "SyncInfoQrCode":
                    return <SyncInfoQrCode setSynchroEtape={setSynchroEtape} />;
                case "SyncQrCodeScan":
                    return <SyncQrCodeScan setSynchroEtape={setSynchroEtape}/>;
                case "SyncInfoEvent":
                    return <SyncInfoEvent setSynchroEtape={setSynchroEtape} />;
                case "SyncGeolocation":
                    return <SyncGeolocation setSynchroEtape={setSynchroEtape} />;
                case "SyncChooseScene":
                    return <SyncChooseScene setSynchroEtape={setSynchroEtape} />;
                case "SyncPosterReliveo":
                    return <SyncPosterReliveo setSynchroEtape={setSynchroEtape} />;
                case "IndexVideo":
                    return <IndexVideo setSynchroEtape={setSynchroEtape} />;
                case "SyncDesynchro":
                    return <SyncDesynchro setSynchroEtape={setSynchroEtape} />;
                default:
                    return ;
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Button
                    onPress={toggleBottomNavigationView}
                    title="Synchronisation"
                />
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
