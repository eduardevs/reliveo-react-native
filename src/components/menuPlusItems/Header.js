import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { stylesPlus } from '../../theme/stylesWylohn';

export const Header = ({ navigation, children }) => {

  return (
    <View style={stylesPlus.header}>
        <TouchableOpacity  onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={stylesPlus.headerText}>
            {children}
        </Text>
    </View>
  )
}
