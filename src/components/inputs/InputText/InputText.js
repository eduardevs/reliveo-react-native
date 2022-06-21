import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { Ionicons, Octicons } from '@expo/vector-icons'
import { styles } from '../../../theme/styles/styleEduardo'
import { Colors } from '../../../theme/palette'

const { LeftIcon, RightIcon, StyledInputLabel, StyledTextInput } = styles
const { ReliveoBrandLight, ReliveoBrand } = Colors

export const InputText = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <View style={LeftIcon}>
        <Octicons name={icon} size={30} color={ReliveoBrand} />
      </View>
      <Text style={StyledInputLabel}>{label}</Text>
      <TextInput style={StyledTextInput} {...props} />
      {isPassword && (
        <TouchableOpacity style={RightIcon} onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={ReliveoBrandLight} />
        </TouchableOpacity>
      )}
    </View>
  )
}
