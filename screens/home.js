import React from 'react';
import { Text, View, Button, TouchableOpacity, Image} from 'react-native';
import { globalStyles } from '../styles/global';

import logo from '../assets/Blue-Lotus-logo.png'

export default function Home(){

    return(
        <View style={globalStyles.homeContainer}>
            <Text style={globalStyles.titleText}>Blue Lotus Mediation</Text>
            <Image style={globalStyles.logoImage} source={logo}/>
            <Button title='Get Started'/>
        </View>
    )
}