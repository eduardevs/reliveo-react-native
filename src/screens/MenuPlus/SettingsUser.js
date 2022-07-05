import { View, Text } from 'react-native';
import { AntDesign, Octicons } from '@expo/vector-icons';
import { Header } from '../../components/menuPlusItems/Header';
import { stylesPlus } from '../../theme/stylesWylohn';

export const SettingsUser = ({ navigation }) => {
  return (
    <View style={stylesPlus.container}>
        <Header navigation={navigation}>
            Paramètres de compte
        </Header>
        <View style={stylesPlus.containChoice}>
            <View style={stylesPlus.choice}>
                <Octicons name="sync" size={28} color="white" />
                <Text style={stylesPlus.choiceText}>
                    Réinitialiser le compte
                </Text>
            </View>
            <View style={stylesPlus.choice}>
                <AntDesign name="closecircleo" size={24} color="white" />
                <Text style={stylesPlus.choiceText}>
                    Supprimer le compte
                </Text>
            </View>
        </View>
    </View>
  )
}
