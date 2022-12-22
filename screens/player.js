import React from 'react';
import { Text, View, Button, TouchableOpacity, Image} from 'react-native';
import { globalStyles } from '../styles/global';

import logo from '../assets/Blue-Lotus-logo-text.png';
import wavyTop from '../assets/wavyLines-top.png';
import wavyBottom from '../assets/wavyLines-bottom.png';

export default function Player(){

    return(
        <View style={globalStyles.homeContainer}>
            <View style={globalStyles.wavyBlockTop}>
                <Image style={globalStyles.wavyTopImage} source={wavyTop}/>
            </View>

            <View style={globalStyles.titleBlock}>
                <Text style={globalStyles.titleText}>Audio Player goes here</Text>
            </View>

            <View style={globalStyles.wavyBlockBottom}>
                <Image style={globalStyles.wavyBottomImage} source={wavyBottom}/>
            </View>
            
        </View>
    )
}