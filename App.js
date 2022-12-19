import React, {useState} from 'react';
import {Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/home';

const Stack = createNativeStackNavigator();


const getFonts = () => Font.loadAsync({
  'vesper-regluar': require('./assets/fonts/VesperLibre-Regular.ttf'),
  'vesper-bold': require('./assets/fonts/VesperLibre-Bold.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "",
              // headerStyle: { backgroundColor:'#000'},
              // headerTitleStyle: { color: '#fff'}
            }}
          />
          {/* <Stack.Screen
            name="Review Details"
            component={ReviewDetails}
            options={{
              headerStyle: { backgroundColor:'#eee' },
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
     );
  } else {
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.log("Huston, we have a problem.")}
      ></AppLoading>
    )
  }
}
