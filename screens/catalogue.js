import React from 'react';
import { Text, View, Button, TouchableOpacity, Image} from 'react-native';
import { globalStyles } from '../styles/global';

import wavyTop from '../assets/wavyLines-top.png';
import sleep from '../assets/images/sleep-logo.png'
import wavyBottom from '../assets/wavyLines-bottom.png';

export default function Catalogue(){

    return(
        <View style={globalStyles.logContainer}>
            <View style={globalStyles.wavyBlockTop}>
                <Image style={globalStyles.wavyTopImage} source={wavyTop}/>
            </View>

            <View style={globalStyles.titleBlock}>
                <Text style={globalStyles.titleText}>Time to Relax</Text>
            </View>

            <View style={globalStyles.listBlock}>
                <Image style={globalStyles.meditationImage} source={sleep}/>
            </View>


            <View style={globalStyles.wavyBlockBottom}>
                <Image style={globalStyles.wavyBottomImage} source={wavyBottom}/>
            </View>
            
        </View>
    )
}