import { View, Text } from 'react-native';
import React from 'react';

//Importation de create StackNavigation 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Mes créations 
//Importation de Connexion
import Connexion from './Connexion';

//Importation d'Inscription.
import Inscription from './Inscription';

const Stack = createNativeStackNavigator();

const Public= () => {
  return (

    //Création de la Tab Navigator.
    <Stack.Navigator>
        <Stack.Screen name='Connexion'component={Connexion}/>
        <Stack.Screen name='Inscription'component={Inscription}/>
    </Stack.Navigator>
  )
}

export default Public
  
 