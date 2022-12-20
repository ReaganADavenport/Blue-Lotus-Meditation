import React from 'react';
import { Text, View, Button, TouchableOpacity, ScrollView, Image, FlatList} from 'react-native';
import { globalStyles } from '../styles/global';

import wavyTop from '../assets/wavyLines-top.png';
import sleep from '../assets/images/sleep-logo.png';
import mindful from '../assets/images/mindful-logo.png';
import relax from '../assets/images/relax-logo.png';
import reflect from '../assets/images/reflect-logo.png';
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
                <ScrollView style={globalStyles.imageBlock}>
                    <Image style={globalStyles.sleepImage} source={sleep}/>
                    <Image style={globalStyles.mindfulImage} source={mindful}/>
                    <Image style={globalStyles.meditationImage} source={relax}/>
                    <Image style={globalStyles.meditationImage} source={reflect}/>
                </ScrollView>
            </View>


            <View style={globalStyles.wavyBlockBottom}>
                <Image style={globalStyles.wavyBottomImage} source={wavyBottom}/>
            </View>
            
        </View>
    )
}