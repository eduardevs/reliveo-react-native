import ButtonReliveau from '../../../assets/buttonReliveau.png';
import { TouchableOpacity, Image } from 'react-native';

export const ReliveoButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Image source={ButtonReliveau} />
    </TouchableOpacity>
);
