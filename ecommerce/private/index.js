import { StyleSheet, Text, View,Button} from 'react-native'
import React from 'react';
import {useDispatch} from'react-redux';

import{editLogin} from '../../redux/action';


const Private = () => {
  // Création de la constance dispatch. distribuer l'information.
  const dispatch =useDispatch();

  // Création de la constance pressDeconnexion.
  const pressDeconnexion=()=>{
    dispatch(editLogin(false))
    console.log("deconnexion")
  }
  return (
    <View>
      
      <Text>Deconnexion</Text>
      <Button 
      onPress={pressDeconnexion}
      title='Deconnexion'
      color={"red"}
      />
    </View>
  )
}

export default Private

const styles = StyleSheet.create({})