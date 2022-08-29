import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './Allapps/First';
import AppNewScreen from './Allapps/AppNews';
import Insta from './Allapps/Insta';
import Tuto from './Allapps/TutoFlatList';
//importation du fournisseur store.


/* Importation de DetailScren. 
import DetailScreen from './Detail/Detail';*/

/* Création de la constance Stack. */
const Stack = createNativeStackNavigator(); 

const App = () => {
  return (

    /* Création de la Navigation Container.*/ 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={FirstScreen} />

        {/* je traite les vues de mon appscreen.*/ }
        <Stack.Screen name="NewsApp" component={AppNewScreen}/>
        {/* Création de la 
        <Stack.Screen name="DetailScreen" component={DetailScreen}/>*/ }
        <Stack.Screen name="Insta" component={Insta}/>
        <Stack.Screen name="AppTuto" component={Tuto}/>

        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})