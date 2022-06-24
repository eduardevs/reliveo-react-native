import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { style } from './style';
import { colors } from '../../../theme/palette';

const { LeftIcon, RightIcon, StyledInputLabel, StyledTextInput } = style;
const { ReliveoBrandLight, ReliveoBrand } = colors;

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
    );
};
