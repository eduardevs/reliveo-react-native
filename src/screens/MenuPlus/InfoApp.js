import { View, Image, Text, ScrollView } from 'react-native';
import { Header } from '../../components/menuPlusItems/Header';
import { stylesPlus } from '../../theme/stylesWylohn';
import whatIsReliveo from "../../assets/whatIsReliveo.png";
import serviceReliveo from "../../assets/serviceReliveo.png";
import whichTarget from "../../assets/whichTarget.png";

export const InfoApp = ({ navigation }) => {

  return (
    <View style={stylesPlus.container}>
      <Header navigation={navigation}>
        Informations sur l'application
      </Header>
      <ScrollView style={stylesPlus.containInfos}>
        <Image source={whatIsReliveo} style={stylesPlus.blocImage}>
        </Image>

        <Image source={serviceReliveo} style={stylesPlus.blocImage}>
        </Image>

        <Image source={whichTarget} style={stylesPlus.blocImage}>
        </Image>

      </ScrollView>
    </View>
  )
}
