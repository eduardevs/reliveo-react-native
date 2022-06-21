import { StyleSheet, Dimensions } from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { Colors } from '../palette'

let ScreenHeight = Dimensions.get("window").height;

const { primary, ReliveoBrand, secondary, ReliveoBrandLight } = Colors

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 25,
    // ${StatusBarHeight + 30}px
    paddingTop: 30,
    backgroundColor: primary,
    height: ScreenHeight
  },
  InnerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center"
  },
  PageLogo: {
    width: 250,
    height: 200
  },
  // welcome page
  //innerContainer
  WelcomeContainer: {
    padding: 25,
    paddingTop: 10,
    justifyContent: 'center'
  },
  // Image
  Avatar: {
    width: 100,
    height: 100,
    margin: 'auto',
    borderRadius: 50,
    borderColor: ReliveoBrand,
    marginBottom: 10,
    marginTop: 10
  },

  WelcomeImage: {
    height: "50%",
    minWidth: 100
  },
  PageTitle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: ReliveoBrand,
    padding: 10
    // ${(props) => props.welcome && `
    // fontSize: 35
    //`}
  },
  SubTitle: {
    fontSize: 18,
    marginBottom: 20,
    letterSpacing: 1,
    fontWeight: "bold",
    color: ReliveoBrand
    // ${(props) => props.welcome && `
    // marginBottom: 5,
    // fontWeight: normal,
    //`}
  },
  // FORM
  StyledFormArea: {
    width: "90%",
  },
  StyledTextInput: {
    backgroundColor: "white",
    padding: 15,
    paddingLeft: 55,
    paddingRight: 55,
    borderRadius: 5,
    fontSize: 16,
    marginVertical: 3,
    marginBottom: 10,
    color: "black"
  },
  StyledInputLabel: {
    color: "white",
    fontSize: 13,
    textAlign: 'left'
  }
  // ICON
  ,
  LeftIcon: {
    left: 15,
    top: 38,
    position: 'absolute',
    zIndex: 1
  },
  RightIcon: {
    right: 15,
    top: 38,
    position: 'absolute',
    zIndex: 1
  },
  StyledButton: {
    padding: 15,
    backgroundColor: ReliveoBrand,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 5,
    height: 60
    //     ${(props)=> props.google == true && `
    //     background-color: ${F2F2F2};
    //     flex-direction: row;
    //     justify-content: center;
    // `}
  },
  GoogleBtn: {
    color: "black",
    padding: 15,
    backgroundColor: secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 5,
    height: 60,
  },
  ButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
    //     ${(props)=> props.google == true && `
    // padding: 25px;
    // `}
  },
  ButtonTextGoogle: {
    color: 'black',
    fontSize: 16
    //     ${(props)=> props.google == true && `
    // padding: 25px;
    // `}
  },
  // text
  MsgBox: {
    // display: '',
    textAlign: 'center',
    fontSize: 13,
    color: 'red'
  },
  // view
  Line: {
    height: 1,
    width: "100%",
    backgroundColor: ReliveoBrandLight,
    marginVertical: 10
  },
  //view
  ExtraView: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  // text
  ExtraText: {
    justifyContent: "center",
    alignContent: "center",
    color: secondary,
    fontSize: 15
  },
  // TouchableOpacity
  TextLink: {
    justifyContent: 'center',
    alignItems: 'center',
    color: ReliveoBrand,
    marginLeft: 5
  },
  // text
  TextLinkContent: {
    color: ReliveoBrand,
    fontSize: 15
  },

})
