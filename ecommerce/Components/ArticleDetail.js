import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

// Importation de useDispacth.
import { useDispatch } from 'react-redux';

//Importation de addPanier
import { addPanier } from '../../redux/action';

const ArticleDetail = (article) => {

//Création de Dispatch.
const dispacth=useDispatch();

// Action sur le bouton ajouter au panier
  const ajouter =()=>{
    
     dispacth(addPanier(article))

    console.log("ajouter")
  }

  return (

    <View>

      <Text>{article.Nom}</Text>
      <Button title='Ajouter au panier'
      onPress={ajouter}
      />

    </View>
  )
}

export default ArticleDetail

const styles = StyleSheet.create({})