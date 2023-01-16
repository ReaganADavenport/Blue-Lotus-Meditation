import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';

import { Audio } from 'expo-av';

import { AntDesign } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

import wavyTop from '../assets/wavyLines-top.png';
import wavyBottom from '../assets/wavyLines-bottom.png';

export default function Player({ route }){

    const [pause, setPause] = useState(false);
    const [Loaded, SetLoaded] = React.useState(false);
    const [Loading, SetLoading] = React.useState(false);
    
    const meditation = route.params.paramKey.url;
    
              
    React.useEffect(() => {
        LoadAudio();
      }, []);

    function togglePlayPauseBtn(){
        setPause(!pause);

        if(!PlayAudio){
            PlayAudio;
        } else {
            PauseAudio;
        }
    };

    const PlayAudio = async () => {
        try {
          const result = await sound.current.getStatusAsync();
          if (result.isLoaded) {
            if (result.isPlaying === false) {
              sound.current.playAsync();
              console.log("I'm playing")
            }
          }
        } catch (error) {}
      };
    
      const PauseAudio = async () => {
        try {
          const result = await sound.current.getStatusAsync();
          if (result.isLoaded) {
            if (result.isPlaying === true) {
              sound.current.pauseAsync();
              console.log("I'm pausing")
            }
          }
        } catch (error) {}
      };

    const LoadAudio = async () => {
        SetLoading(true);
        const checkLoading = await sound.current.getStatusAsync();
        if (checkLoading.isLoaded === false) {
          try {
            const result = await sound.current.loadAsync(meditation, {}, true);
            if (result.isLoaded === false) {
              SetLoading(false);
              console.log('Error in Loading Audio');
            } else {
              SetLoading(false);
              SetLoaded(true);
            }
          } catch (error) {
            console.log(error);
            SetLoading(false);
          }
        } else {
          SetLoading(false);
        }
      };



    return(
        <View style={globalStyles.playerContainer}>
            <View style={globalStyles.wavyBlockTop}>
                <Image style={globalStyles.wavyTopImage} source={wavyTop}/>
            </View>

            <View style={globalStyles.playerBlock}>
                
                {pause ? (
                    <TouchableOpacity onPress={togglePlayPauseBtn}>
                        <AntDesign name="play" size={80} color="#3ea0c7" />
                    </TouchableOpacity>
                ) :
                (
                    <TouchableOpacity onPress={togglePlayPauseBtn}>
                        <AntDesign name="pausecircle" size={80} color="#3ea0c7" />
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