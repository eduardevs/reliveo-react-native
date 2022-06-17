import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { Ionicons, Octicons } from '@expo/vector-icons'
import { styles, Colors } from '../../../theme/styles/styleEduardo'

const { LeftIcon, RightIcon, StyledInputLabel, StyledTextInput } = styles
const { darkLight, secondary } = Colors

export const InputText = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <View style={LeftIcon}>
        <Octicons name={icon} size={30} color={secondary} />
      </View>
      <Text style={StyledInputLabel}>{label}</Text>
      <TextInput style={StyledTextInput} {...props} />
      {isPassword && (
        <TouchableOpacity style={RightIcon} onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </TouchableOpacity>
      )}
    </View>
  )
}
