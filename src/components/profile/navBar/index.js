import 'react-native-gesture-handler';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ProfileNavBar({ navigation }) {

    const [showPopup, setshowPopup] = useState(false)
    const [showReportOption, setshowReportOption] = useState(false)
    const [showAgreeReport, setshowAgreeReport] = useState(false)
    const [iscurrentUser] = useState(true)
    


    switch (iscurrentUser) {
        case true:
            return (
                <View style={styles.container}>
                    <TouchableOpacity

                        onPress={() =>
                            navigation.goBack()
                        }

                        style={{ padding: 10, display: 'flex', alignItems: 'center' }}
                    >
                        <Entypo name="chevron-left" size={24} color="white" style={{}} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('EditProfile')
                            
                        }}
                        style={styles.gear}

                    >
                        <FontAwesome name="gear" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            );
        case false:
            return (
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.goBack()
                        }
                        style={{ padding: 10, display: 'flex', alignItems: 'center' }}
                    >
                        <Entypo name="chevron-left" size={24} color="white" style={{}} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setanimateBtn(!animateBtn);

                            setshowPopup(!showPopup);
                        }}
                        style={animateBtn ? styles.gear : styles.gearPressed}
                    >
                        <FontAwesome5 name="ellipsis-v" size={24} color="white" />
                    </TouchableOpacity>

                    <View style={showPopup ? styles.popupcontainer : styles.popupnocontainer}>
                        <TouchableOpacity
                            onPress={() => {
                                setshowReportOption(!showReportOption);
                                setshowPopup(!showPopup);
                            }}
                            style={{ flexDirection: 'row', display: 'flex' }}
                        >

                            <Ionicons name="flag-sharp" size={20} color="white" />
                            <Text style={styles.textpopup}>Signaler</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={showReportOption ? styles.reportOption : styles.noreportOption}>
                        <View style={styles.reportButton}>
                            <Text style={styles.reportButtonTitre}>Signalement</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                setshowAgreeReport(!showAgreeReport);
                                setshowReportOption(!showReportOption);
                            }}
                            style={styles.reportButton}
                        >
                            <Text style={styles.reportButtonText}>Contenu à caractère sexuel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setshowAgreeReport(!showAgreeReport);
                                setshowReportOption(!showReportOption);
                            }}
                            style={styles.reportButton}
                        >
                            <Text style={styles.reportButtonText}>Contenu discriminant</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setshowAgreeReport(!showAgreeReport);
                                setshowReportOption(!showReportOption);
                            }}
                            style={styles.reportButton}
                        >
                            <Text style={styles.reportButtonText}>Contenu sans lien avec l'évènement</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setshowAgreeReport(!showAgreeReport);
                                setshowReportOption(!showReportOption);
                            }}
                            style={styles.reportButton}
                        >
                            <Text style={styles.reportButtonText}>Contenu offensant</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={showAgreeReport ? styles.accordMessage : styles.noaccordMessage}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>
                            Votre signalement a bien été pris en compte.
                        </Text>
                        <Text style={{ textAlign: 'center', color: 'white' }}>
                            Notre équipe de modération va analyser votre signalement dans les plus brefs délais.
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                setshowAgreeReport(!showAgreeReport);
                            }}
                            style={styles.btnaccord}
                        >
                            <Text style={styles.btnaccordtext}>D'accord</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            );
    }
}
