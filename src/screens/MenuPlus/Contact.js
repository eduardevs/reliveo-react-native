import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { stylesPlus } from '../../theme/stylesWylohn';
import { Header } from '../../components/menuPlusItems/Header';

export const Contact = ({ navigation }) => {
  return (
    <View style={stylesPlus.container}>
        <Header navigation={navigation}>
            Contact
        </Header>
        <View style={stylesPlus.containChoice}>
            <TouchableOpacity style={stylesPlus.containText} onPress={() => Linking.openURL('mailto:d_canonne@hetic.eu')}>
                <Text style={stylesPlus.choiceText}>
                    Design & Gestion de projet
                </Text>
                <Text style={stylesPlus.choiceSubText}>
                    d_canonne@hetic.eu
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesPlus.containText} onPress={() => Linking.openURL('mailto:r_dasilva1@hetic.eu')}>
                <Text style={stylesPlus.choiceText}>
                    Back-end | Devops
                </Text>
                <Text style={stylesPlus.choiceSubText}>
                    r_dasilva1@hetic.eu
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesPlus.containText} onPress={() => Linking.openURL('mailto:b_lombard@hetic.eu')}>
                <Text style={stylesPlus.choiceText}>
                    Front-end
                </Text>
                <Text style={stylesPlus.choiceSubText}>
                    b_lombard@hetic.eu
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
