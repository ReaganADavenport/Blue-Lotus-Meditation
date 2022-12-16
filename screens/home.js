import React from 'react';
import { Text, View, Button, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home(){

    return(
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Review Details", {paramKey: item})}>
                        <Text style={globalStyles.titleText}>{ item.title }</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}