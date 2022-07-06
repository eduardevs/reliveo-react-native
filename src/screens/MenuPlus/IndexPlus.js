import { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { Header } from '../../components/menuPlusItems/Header';
import { stylesPlus } from '../../theme/stylesWylohn';
import { AuthContext } from '../../context/AuthContext';

export const IndexPlus = ({ navigation }) => {

const { logout } = useContext(AuthContext)

console.log(AuthContext)

  return (
    <View style={stylesPlus.container}>
        <View style={stylesPlus.header}>
            <AntDesign name="left" size={24} color="white" />
            <Text style={stylesPlus.headerText}>
                Plus
            </Text>
        </View>
        <View style={stylesPlus.containChoice}>
            <TouchableOpacity style={stylesPlus.choice} onPress={() => navigation.navigate('SettingsUser')}>
                <Ionicons name="settings-sharp" size={24} color="white" />
                <Text style={stylesPlus.choiceText}>
                    Paramètres de compte
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesPlus.choice} onPress={() => navigation.navigate('InfoApp')}>
                <Feather name="info" size={24} color="white" />
                <Text style={stylesPlus.choiceText}>
                    Informations sur l’application
                </Text>
                </TouchableOpacity>
            <TouchableOpacity style={stylesPlus.choice} onPress={() => navigation.navigate('Contact')}>
                <Feather name="mail" size={24} color="white" />
                <Text style={stylesPlus.choiceText}>
                    Contact
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesPlus.choice} onPress={() => navigation.navigate('InfoProject')}>
                <Ionicons name="open-outline" size={24} color="white" />
                <Text style={stylesPlus.choiceText}>
                    Informations projet
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesPlus.choice} onPress={() => logout()}>
                <MaterialIcons name="logout" size={24} color="white" />
                <Text style={stylesPlus.choiceText}>
                    Déconnexion
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
