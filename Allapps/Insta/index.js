import { StyleSheet, Text, View } from 'react-native';
import React, { useReducer } from 'react';

import {useSelector} from'react-redux';

const Insta = () => {
  //Création de la constance de connextion login.
   const {login }= useSelector(state=>state)
  return (
    <View>
      {login?<Text>Tu es connecté!</Text>:
             <Text> Tu n'es pas connecté!</Text>}
    </View>
  )
}

export default Insta

const styles = StyleSheet.create({})