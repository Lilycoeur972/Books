{/*Importation de StyleSheet, Text, View.*/}
import { StyleSheet, Text, View } from 'react-native';

{/*Importation de React  */}
import React from 'react';

{/*Importation de Catégorie. */}
import Categories from '../Components/Categories';

{/*importation article.*/}
import Articles from '../Components/Articles';

{/*Création de la constante Home. */}
const Home = () => {

  return (
    
    /*Création du style de la view. */
    <View style={styles.content}>
      <Categories/>
      <Articles/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    content:{flex:1,
    //backgroundColor:'red',
    margin:10,
    
    }
})