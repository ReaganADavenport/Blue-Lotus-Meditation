import React from 'react';
import { Text, View, Button, TouchableOpacity, Image} from 'react-native';
import { globalStyles } from '../styles/global';

import logo from '../assets/Blue-Lotus-logo-text.png';
import wavyTop from '../assets/wavyLines-top.png';
import wavyBottom from '../assets/wavyLines-bottom.png';

export default function Player({ route }){

    return(
        <View style={globalStyles.playerContainer}>
            <View style={globalStyles.wavyBlockTop}>
                <Image style={globalStyles.wavyTopImage} source={wavyTop}/>
            </View>

            <View style={globalStyles.playerBlock}>
                <Text style={globalStyles.playerText}>Audio Player goes here</Text>
                <Text style={globalStyles.playerText}> { route.params.paramKey.title }</Text>
            </View>

            <View style={globalStyles.wavyBlockBottom}>
                <Image style={globalStyles.wavyBottomImage} source={wavyBottom}/>
            </View>
            
        </View>
    )
}