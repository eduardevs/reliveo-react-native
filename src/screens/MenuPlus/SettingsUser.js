import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign, Octicons } from '@expo/vector-icons';
import { Header } from '../../components/menuPlusItems/Header';
import { stylesPlus } from '../../theme/stylesWylohn';
import { useState } from 'react';
import { Popup } from '../../containers/menuPlus/Popup';

export const SettingsUser = ({ navigation }) => {

    const [showPopup, setShowPopup] = useState(true);

  return (
    <View style={stylesPlus.container}>
        <Header navigation={navigation}>
            Paramètres de compte
        </Header>
        <View style={stylesPlus.containChoice}>
            <TouchableOpacity style={stylesPlus.choice}>
                <Octicons name="sync" size={28} color="white" />
                <Text style={stylesPlus.choiceText}>
                    Réinitialiser le compte
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylesPlus.choice} onPress={() => setShowPopup(!showPopup)}>
                <AntDesign name="closecircleo" size={24} color="white" />
                <Text style={stylesPlus.choiceText}>
                    Supprimer le compte
                </Text>
            </TouchableOpacity>

            {!showPopup ? 
                (
                    <Popup />
                ) : null}
        </View>
    </View>
  )
}
