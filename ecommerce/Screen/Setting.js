import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

//Importation de Private.
import Private from'../Private';

//Importation de useSelector.
import { useSelector } from 'react-redux';

//Importation de Public
import Public from'../Public';

const Setting = () => {

  const{dataUser} =useSelector(state=>state);
  console.log("dataUser:",dataUser)

  return (
    dataUser?<Public/>:<Private/>
  )
}

export default Setting

const styles = StyleSheet.create({})