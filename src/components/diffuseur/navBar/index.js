import 'react-native-gesture-handler';
import { View, Text, Image, TouchableOpacity, Dimensions, Modal } from 'react-native';
import React, { createRef, useState } from 'react';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { BottomPopup } from '../modalInfo';


export default function DiffuseurNavBar({ navigation }) {
    const [showPopup, setshowPopup] = useState(true);
    const [showReportOption, setshowReportOption] = useState(false);
    const [showAgreeReport, setshowAgreeReport] = useState(false);
    const [animateBtn, setanimateBtn] = useState(false);
 

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ padding: 10, display: 'flex', alignItems: 'center' }}
            >
                <Entypo name="chevron-left" size={24} color="white" style={{}} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setanimateBtn(!animateBtn);
                    setshowPopup(!showPopup);
                }}
                style={animateBtn ? styles.chevron : styles.chevronPressed}
            >
                <FontAwesome5 name="ellipsis-v" size={24} color="white" />
            </TouchableOpacity>

            <View style={showPopup ? styles.dpopupcontainer : styles.dpopupnocontainer}>
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
                <TouchableOpacity style={{ flexDirection: 'row', display: 'flex' }}>
                    <AntDesign name="plus" size={20} color="white" />
                    <Text style={styles.textpopup}>Ajouter au profil</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={onShowPopup}
                style={{ flexDirection: 'row', display: 'flex' }}>
                    <Feather name="info" size={20} color="white" />
                    <Text style={styles.textpopup}>Infos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', display: 'flex' }}>
                <Feather name="minus-circle" size={20} color="white" />
                    <Text style={styles.textpopup}>Se désabonner</Text>
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
