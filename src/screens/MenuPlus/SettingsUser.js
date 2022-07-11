import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign, Octicons } from '@expo/vector-icons';
import { Header } from '../../components/menuPlusItems/Header';
import { stylesPlus } from '../../theme/stylesWylohn';
import { useState } from 'react';
import { Popup } from '../../containers/menuPlus/Popup';
import React from "react";

export const SettingsUser = ({ navigation }) => {

    let popupRef = React.createRef();
    let textInPopup = "";

    const onclickDelete = () => {
        onTextDelete()
        onShowPopup()
    }

    const onclickReset = () => {
        onTextReset()
        onShowPopup()
    }

    const onTextReset = () => {
        popupRef.textReset()
    }

    const onTextDelete = () => {
        popupRef.textDelete()
    }

    const onShowPopup = () => {
        popupRef.show()
    }

    const onClosePopup = () => {
        popupRef.close()
    }

  return (
    <View style={stylesPlus.container}>
        <Header navigation={navigation}>
            Paramètres de compte
        </Header>
        <View style={stylesPlus.containChoice}>
            <TouchableOpacity style={stylesPlus.choice} onPress={onclickReset}>
                <Octicons name="sync" size={28} color="white" />
                <Text style={stylesPlus.choiceText}>
                    Réinitialiser le compte
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylesPlus.choice} onPress={onclickDelete}>
                <AntDesign name="closecircleo" size={24} color="white" />
                <Text style={stylesPlus.choiceText}>
                    Supprimer le compte
                </Text>
            </TouchableOpacity>

            <Popup
                ref={(target) => popupRef = target}
                onTouchOutside={onClosePopup}
            >
                {textInPopup}
            </Popup>
        </View>
    </View>
  )
}
