import React from 'react';
import { Text, View, Button, TouchableOpacity, Image} from 'react-native';
import Slider from 'react-native-slider';
import { AntDesign } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

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
                <AntDesign name="banckward" size={24} color="black" />
                <AntDesign name="play" size={24} color="black" />
                <AntDesign name="pausecircle" size={24} color="black" />
                <AntDesign name="forward" size={24} color="black" />
                <Text style={globalStyles.playerText}> { route.params.paramKey.title }</Text>
            </View>

            <View style={globalStyles.wavyBlockBottom}>
                <Image style={globalStyles.wavyBottomImage} source={wavyBottom}/>
            </View>
            
        </View>
    )
}