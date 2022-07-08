import React from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Modal } from 'react-native';
import { stylesPlus } from '../../theme/stylesWylohn.js';

export class Popup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    show = () => {
        this.setState({show: true})
    }

    close = () => {
        this.setState({show: false})
    }

    renderOutsideTouchable(onTouch) {
        const view = <View style={{height: '100%', width: '100%', position: 'absolute'}}/>
        if (!onTouch) return view
        
        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{height: '100%', width: '100%', position: 'absolute'}}>
                {view}
            </TouchableWithoutFeedback>
        )
    }

    render() {

        let {show} = this.state
        const {onTouchOutside} = this.props

    return (

        <Modal
        transparent={true}
        visible={show}
        onRequestClose={this.close}
        >
            <View style={stylesPlus.containerPopup}>
                {this.renderOutsideTouchable(onTouchOutside)}
                <View style={stylesPlus.containPopup}>
                    <View style={stylesPlus.popupContain}>
                        <Text style={stylesPlus.textPopup}>
                        Êtes vous sur de réinitialiser votre compte ?{'\n'}
                        Ceci effacera tous vos posts ainsi que vos favoris, vos abonnement et toutes autres informations liées à votre compte (Sauf votre email
            et votre mot de passe)
                        </Text>
                        <TouchableOpacity style={stylesPlus.buttonPopup} onPress={() => console.log('ça marche')}>
                            <Text style={stylesPlus.textButtonPopup}>J'accepte</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
        )
    }
}