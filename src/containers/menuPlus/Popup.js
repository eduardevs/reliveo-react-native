import { View, Text, TouchableOpacity, Button } from 'react-native';
import styles from '../bottomNav/styles';

export const Popup = () => {
    return (

        <View style={styles.popupContainer}>
            <Text>
            Êtes vous sur de réinitialiser votre compte ?
            Ceci effacera tous vos posts ainsi que vos favoris, vos abonnement et toutes autres informations liées a votre compte (Sauf votre email
et votre mot de passe)
            </Text>
            <Button 
            style={styles.textPopup}
            onPress={console.log('ça marche')}
            title="J'accepte"
            color={"white"}
            />
        </View>

    )
}
