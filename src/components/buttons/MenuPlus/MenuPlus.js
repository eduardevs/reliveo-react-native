import ButtonReliveau from '../../../assets/buttonReliveau.png';
import { TouchableOpacity, Text } from 'react-native';
import { Feather } from 'react-native-feather';
import styles from './styles';

export const MenuPlus = ({ onPress }) => (
    <TouchableOpacity style={styles.bottomMenuButton} onPress={onPress}>
        <Feather name="menu" size={24} color={'white'} />
        <Text style={styles.textButton}>Plus</Text>
    </TouchableOpacity>
);
