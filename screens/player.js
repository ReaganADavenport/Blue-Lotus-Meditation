import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

import wavyTop from '../assets/wavyLines-top.png';
import wavyBottom from '../assets/wavyLines-bottom.png';

export default function Player({ route }){

    const [pause, setPause] = useState(false);

    function togglePlayPauseBtn(){
        setPause(!pause);
    };

    return(
        <View style={globalStyles.playerContainer}>
            <View style={globalStyles.wavyBlockTop}>
                <Image style={globalStyles.wavyTopImage} source={wavyTop}/>
            </View>

            <View style={globalStyles.playerBlock}>
            
                <TouchableOpacity>
                    <AntDesign name="banckward" size={40} color="#3ea0c7" />
                </TouchableOpacity>
                
                {pause ? (
                    <TouchableOpacity onPress={togglePlayPauseBtn}>
                        <AntDesign name="play" size={40} color="#3ea0c7" />
                    </TouchableOpacity>
                ) :
                (
                    <TouchableOpacity onPress={togglePlayPauseBtn}>
                        <AntDesign name="pausecircle" size={40} color="#3ea0c7" />
                    </TouchableOpacity>
                )
                }
                

                <TouchableOpacity>
                    <AntDesign name="forward" size={40} color="#3ea0c7" />
                </TouchableOpacity>
                
                
                
            </View>
            <Text style={globalStyles.playerText}> { route.params.paramKey.title }</Text>
            <View style={globalStyles.wavyBlockBottom}>
                <Image style={globalStyles.wavyBottomImage} source={wavyBottom}/>
            </View>
            
        </View>
    )
}