import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

import {FirebaseContext} from '../../firebaseContext';
import { useState, useContext } from 'react';

const Detailarticle = ({route}) => {
  //Récupération de l'id.
  const {id}= route.params;

  // constante article 
  const [article, setArticle] = useState();
  //const firebase
  const firebase = useContext(FirebaseContext);

  const getArticle=async()=>{
       const rqArticle=firebase.getArticleById(id);
  }

  // useEffect

  useEffect(()=>{
    getArticle();
  })


  //Console log de l'id 
  console.log('id',id)

  return (
    <View>
      <Text>Detailarticle</Text>
    </View>
  )
}

export default Detailarticle