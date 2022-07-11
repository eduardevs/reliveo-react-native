import { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { Header } from '../../components/menuPlusItems/Header';
import { stylesPlus } from '../../theme/stylesWylohn';
import { AuthContext } from '../../context/AuthContext';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

export const IndexPlus = (props) => {

const { logout } = useContext(AuthContext)

  return (
    <View style={stylesPlus.container}>
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <View style={stylesPlus.containChoice}>
                <TouchableOpacity style={stylesPlus.choice} onPress={() => logout()}>
                    <MaterialIcons name="logout" size={24} color="white" />
                    <Text style={stylesPlus.choiceText}>
                        Déconnexion
                    </Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    </View>
  )
}
