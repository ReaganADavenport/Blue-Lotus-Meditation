import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import { globalStyles } from '../styles/global';

import wavyTop from '../assets/wavyLines-top.png';

import sleep from '../assets/images/sleep-logo.png';
import mindful from '../assets/images/mindful-logo.png';
import relax from '../assets/images/relax-logo.png';
import reflect from '../assets/images/reflect-logo.png';

import wavyBottom from '../assets/wavyLines-bottom.png';



export default function Catalogue({navigation}){

    const [data, setData] = useState([
        {title: 'Sleep', src: sleep, key: '1'},
        {title: 'Mindfulness', src: mindful, key: '2'},
        {title: 'Relax', src: relax, key: '3'},
        {title: 'Reflection', src: reflect, key: '4'},
    ]);

    return(
        <View style={globalStyles.logContainer}>
            <View style={globalStyles.wavyBlockTop}>
                <Image style={globalStyles.wavyTopImage} source={wavyTop}/>
            </View>

            <View style={globalStyles.logBlock}>
                <Text style={globalStyles.logText}>Time to Relax</Text>
            </View>

            <View style={globalStyles.imageBlock}>
                <FlatList
                    data = {data}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("Player", {paramKey: item})}>
                            <Image style={globalStyles.meditationImage} source={item.src}/>
                        </TouchableOpacity>
                        
                    )}
                />
            </View>
            

            <View style={globalStyles.wavyBlockBottom}>
                <Image style={globalStyles.wavyBottomImage} source={wavyBottom}/>
            </View>
            
        </View>
    )
}