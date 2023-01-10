import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';

// import TrackPlayer, { State } from 'react-native-track-player';

import { AntDesign } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

import wavyTop from '../assets/wavyLines-top.png';
import wavyBottom from '../assets/wavyLines-bottom.png';

export default function Player({ route }){

    const [pause, setPause] = useState(false);

    function togglePlayPauseBtn(){
        setPause(!pause);

        // const togglePlayback = async(usePlaybackState) => {
        //     if ( playbackState == State.Paused ){
        //         await TrackPlayer.play();
        //     } else {
        //         await TrackPlayer.pause();
        //     }
        // }
        // togglePlayback();
    };

    
    // const setUpPlayer = async() => {
    //     await TrackPlayer.setUpPlayer();

    //     await TrackPlayer.add(route.params.paramKey.url);
    // }

    // const togglePlayback = async(usePlaybackState) => {
    //     if ( playbackState == State.Paused ){
    //         await TrackPlayer.play();
    //     } else {
    //         await TrackPlayer.pause();
    //     }
    // }


    return(
        <View style={globalStyles.playerContainer}>
            <View style={globalStyles.wavyBlockTop}>
                <Image style={globalStyles.wavyTopImage} source={wavyTop}/>
            </View>

            <View style={globalStyles.playerBlock}>
                
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
                

                
            </View>
            <Text style={globalStyles.playerText}> { route.params.paramKey.title }</Text>
            <View style={globalStyles.wavyBlockBottom}>
                <Image style={globalStyles.wavyBottomImage} source={wavyBottom}/>
            </View>
            
        </View>
    )
}