import {View, Text, FlatList, Button} from 'react-native';
import React from 'react';
import {useState} from 'react';

//Importation firestore 
import firestore from '@react-native-firebase/firestore';

/* Création de la constance Tuto. */
const Tuto = () => {
  const [getNombres, setNombres] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

 // Création de la constance readStagiaire.
  const readStagiaire=async()=>{

    // one read-time(deuxième ligne)
    const user = await firestore().collection('stagiaires').doc('HWrYXipshU7wxGRMtnF8').get();
    //Console log de user.
    console.log('user',user);
  }

  /* Création de la constance addNombres.*Add nombre est en mode asynchrone.*/
  const addNombres = async() => {
    await readStagiaire();

    /* Création du console log.*/
    console.log('addNombre', getNombres.length);

    /*Mise à jour des données.desturing*/
    //const tempNombres = [...getNombres, getNombres.length + 1];
    //setNombres(tempNombres);
  };

  return (
    /* Création de la FlatList.*/ 
    <FlatList

      /* Création du bouton. */
      ListHeaderComponent={
        <Button

          /* titre du bouton. */
          title="Add"

          /* Animation du bouton.*/
          onPress={addNombres}
        />
      }
      /* Récupération des données */
      data={getNombres}

      /*affichage du composant item */
      renderItem={({item}) => <Text> {item}</Text>}

      /*Application d'une clef  */
      keyExtractor={item => item}

      /*distance de déclenchements d'action du bouton.*/
      onEndReached={addNombres}
      onEndReachedThreshold={0.2}
    />
  );
};

export default Tuto;
