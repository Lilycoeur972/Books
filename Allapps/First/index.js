import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {dataApp} from '../../datas/fisrt';
import RenderItem from './components/RenderItem';

/* Création de la constance Index. */
const Index = () => {
  return (
    /* Création de la FlatList  */
    <FlatList data={dataApp}
    
          renderItem={({item})=> <RenderItem item ={item}/>}
          keyExtrator={item=>item.id}

          />
  );
};

export default Index;

const styles = StyleSheet.create({});
