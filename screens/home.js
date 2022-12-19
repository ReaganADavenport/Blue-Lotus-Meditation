import React from 'react';
import { Text, View, Button, TouchableOpacity, Image} from 'react-native';
import { globalStyles } from '../styles/global';

import logo from '../assets/Blue-Lotus-logo-text.png';
import wavyTop from '../assets/wavyLines-top.png';
import wavyBottom from '../assets/wavyLines-bottom.png';

export default function Home(){

    return(
        <View style={globalStyles.homeContainer}>
            <Image style={globalStyles.wavyTopImage} source={wavyTop}/>
            <Text style={globalStyles.titleText}>Welcome to</Text>
            <Image style={globalStyles.logoImage} source={logo}/>
            <Button title='Get Started'/>
            <Image style={globalStyles.wavyBottomImage} source={wavyBottom}/>
        </View>
    )
}