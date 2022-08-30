import { StyleSheet, View, Text,Button } from 'react-native';
import React from 'react';
import {useDispatch} from'react-redux';

import{editLogin} from '../../redux/action';

const Connexion = () => {
  // Création de la constance dispatch. distribuer l'information.
  const dispatch =useDispatch();

  // Création de la constance pressConnexion.
  const pressConnexion=()=>{
    dispatch(editLogin(true))
     console.log("connexion")
  }
  

  return (
    <View>
      <Text>Login</Text>
      {/*Création du bouton de connexion. */}
      <Button onPress={pressConnexion} title='Connexion'/>

      
    </View>
  )
}

export default Connexion