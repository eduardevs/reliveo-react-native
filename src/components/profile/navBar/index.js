import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function ProfileNavBar({ navigation }) {
    const [animateBtn, setanimateBtn] = useState(true);
    const [showPopup, setshowPopup] = useState(false);
    const [iscurrentUser] = useState(true)
    switch (iscurrentUser) {
      case true:
          return (
            <View style={styles.container}>
            <TouchableOpacity
                onPress={() =>
                    // setanimateBtn(!animateBtn)
                    navigation.goBack()
                }
                style={{ padding: 10, display: 'flex', alignItems: 'center' }}
            >
                <Entypo name="chevron-left" size={24} color="white" style={{}} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setanimateBtn(!animateBtn);
                    console.log('test');
                    setshowPopup(!showPopup);
                }}
                style={animateBtn ? styles.gear : styles.gearPressed}
            >
                <FontAwesome name="gear" size={24} color="white" />
            </TouchableOpacity>
            <View
                style={{
                    position: 'absolute',
                    right: 20,
                    padding: 10,
                    top: 80,
                }}
            >
                <TouchableOpacity
                style={showPopup ? styles.popupcontainer : styles.popupnocontainer}>
                    <Ionicons name="flag-sharp" size={20} color="white" />
                    <Text style={styles.textpopup}>WORK IN PROGRESS</Text>
                </TouchableOpacity>
            </View>
        </View>
          );
      case false:
          return (
            <View style={styles.container}>
            <TouchableOpacity
                onPress={() =>
                    // setanimateBtn(!animateBtn)
                    navigation.goBack()
                }
                style={{ padding: 10, display: 'flex', alignItems: 'center' }}
            >
                <Entypo name="chevron-left" size={24} color="white" style={{}} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setanimateBtn(!animateBtn);
                    console.log('test');
                    setshowPopup(!showPopup);
                }}
                style={animateBtn ? styles.gear : styles.gearPressed}
            >
                <FontAwesome5 name="ellipsis-v" size={24} color="white" />
            </TouchableOpacity>
            <View
                style={{
                    position: 'absolute',
                    right: 20,
                    padding: 10,
                    top: 80,
                }}
            >
                <TouchableOpacity
                style={showPopup ? styles.popupcontainer : styles.popupnocontainer}>
                    <Ionicons name="flag-sharp" size={20} color="white" />
                    <Text style={styles.textpopup}>Signaler</Text>
                </TouchableOpacity>
            </View>
        </View>
          );
  }

}
