import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import React from 'react';
{/*Importation de removePanier */}
import { removePanier, removeOnePanier } from '../../redux/action';

// Importation de uselector.
import {useSelector, useDispatch} from 'react-redux';



  const PanierItem = ({item}) => {
    //Dispatch de mon panier
 const dispacht=useDispatch();

   // Supprimer un article.
    const removeOne =()=>{
   dispacht(removeOnePanierz)

    }
    return (

      // Création du style du Panier
      <View style={styles.contentPanier}>
        <Text style={styles.nom}>{item.Nom}</Text>

        {/*Style du Text pour le prix. */}
        <Text style={styles.Prix}>{item.Prix}</Text>
      </View>
    );
  };


      const Panier = () => {
        {
          /*Vérification des articles. */
        }
        const {dataPanier} = useSelector(state => state);

        // Console log de dataPanier
        console.log('dataPanier:', dataPanier);


         //Dispatch de mon panier
         const dispacht=useDispatch();


        // Action pour vider le panier.
        const remove=()=>{


          // Je vide mon panier.
          dispacht(removePanier());
          console.log("remove")
        }

        return (
          <View>
            {/* Création de la FlatList du Panier. */}
            <FlatList
              data={dataPanier}
              renderItem={({item}) => <PanierItem item={item} />}
              keyExtractor={item => item.id}
            />

           {/*Création du boutton vidé le panier */}
            <Button
            onPress={remove}
            title='Vider le panier'
            />


           {/*Création du boutton supprimer les articles */}
            <Button
            onPress={removeOnePanier}
            title='Supprimer'
            />

          </View>
        );
      };

export default Panier;

const styles = StyleSheet.create({

  //Style du Panier après ajout d'articles.

  contentPanier:{
    width:'100%',
    height:100,
    backgroundColor:'red',
    padding:5,
    margin:5,
    borderRaduis:10,
    alignSelf:'center',
  },

  nom:{
    color:'#fff',
    fontSize:25,

  },
  
});
