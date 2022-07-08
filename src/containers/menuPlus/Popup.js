import { View, Text, TouchableOpacity, Button } from 'react-native';
import { stylesPlus } from '../../theme/stylesWylohn.js';

export const Popup = () => {
    return (

        <View style={stylesPlus.containerPopup}>
            <View style={stylesPlus.containPopup}>
                <View style={stylesPlus.popupContain}>
                    <Text style={stylesPlus.textPopup}>
                    Êtes vous sur de réinitialiser votre compte ?{'\n'}
                    Ceci effacera tous vos posts ainsi que vos favoris, vos abonnement et toutes autres informations liées à votre compte (Sauf votre email
        et votre mot de passe)
                    </Text>
                    <TouchableOpacity style={stylesPlus.buttonPopup} onPress={() => console.log('ça marche')}>
                        <Text style={stylesPlus.textButtonPopup}>J'accepte</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
