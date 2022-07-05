import { View, Image, Text, ScrollView } from 'react-native';
import { Header } from '../../components/menuPlusItems/Header';
import { stylesPlus } from '../../theme/stylesWylohn';
import presReliveo from "../../assets/presReliveo.jpg";
import members from "../../assets/members.jpg";
import memberProjectGestion from "../../assets/memberProjectGestion.jpg";
import devFront from "../../assets/devFront.jpg";
import devBack from "../../assets/devBack.jpg";
import products from "../../assets/products.jpg";
import mobileApp from "../../assets/mobileApp.jpg";
import webApp from "../../assets/webApp.jpg";
import projectGestion from "../../assets/projectGestion.jpg";
import enjeux from "../../assets/enjeux.jpg";
import solutions from "../../assets/solutions.jpg";
import outils from "../../assets/outils.jpg";
import methodo from "../../assets/methodo.jpg";
import principes from "../../assets/principes.jpg";
import pratiques from "../../assets/pratiques.jpg";
import techniques from "../../assets/techniques.jpg";
import webService from "../../assets/webService.jpg";
import briqueMobile from "../../assets/briqueMobile.jpg";
import briqueCMS from "../../assets/briqueCMS.jpg";
import briqueCloud from "../../assets/briqueCloud.jpg";
import whyReact from "../../assets/whyReact.jpg";
import whySymphonyMariaDB from "../../assets/whySymphonyMariaDB.jpg";
import whyAPI from "../../assets/whyAPI.jpg";
import whyHLS from "../../assets/whyHLS.jpg";

export const InfoProject = ({ navigation }) => {

  return (
    <View style={stylesPlus.container}>
      <Header navigation={navigation}>
        Informations sur l'application
      </Header>
      <ScrollView style={stylesPlus.containInfos}>
        <Image source={presReliveo} style={stylesPlus.blocImage}>
        </Image>

        <Image source={members} style={stylesPlus.blocImage}>
        </Image>

        <Image source={memberProjectGestion} style={stylesPlus.blocImage}>
        </Image>

        <Image source={devFront} style={stylesPlus.blocImage}>
        </Image>

        <Image source={devBack} style={stylesPlus.blocImage}>
        </Image>

        <Image source={products} style={stylesPlus.blocImage}>
        </Image>

        <Image source={mobileApp} style={stylesPlus.blocImage}>
        </Image>

        <Image source={webApp} style={stylesPlus.blocImage}>
        </Image>

        <Image source={projectGestion} style={stylesPlus.blocImage}>
        </Image>

        <Image source={enjeux} style={stylesPlus.blocImage}>
        </Image>

        <Image source={solutions} style={stylesPlus.blocImage}>
        </Image>

        <Image source={outils} style={stylesPlus.blocImage}>
        </Image>

        <Image source={methodo} style={stylesPlus.blocImage}>
        </Image>

        <Image source={principes} style={stylesPlus.blocImage}>
        </Image>

        <Image source={pratiques} style={stylesPlus.blocImage}>
        </Image>

        <Image source={techniques} style={stylesPlus.blocImage}>
        </Image>

        <Image source={webService} style={stylesPlus.blocImage}>
        </Image>

        <Image source={briqueMobile} style={stylesPlus.blocImage}>
        </Image>

        <Image source={briqueCMS} style={stylesPlus.blocImage}>
        </Image>

        <Image source={briqueCloud} style={stylesPlus.blocImage}>
        </Image>

        <Image source={whyReact} style={stylesPlus.blocImage}>
        </Image>

        <Image source={whySymphonyMariaDB} style={stylesPlus.blocImage}>
        </Image>

        <Image source={whyAPI} style={stylesPlus.blocImage}>
        </Image>

        <Image source={whyHLS} style={stylesPlus.blocImage}>
        </Image>

      </ScrollView>
    </View>
  )
}
