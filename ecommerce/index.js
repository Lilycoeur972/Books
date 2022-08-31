import { View, Text } from 'react-native';
import React from 'react';

// Importation de Connexion.
import Connexion from './Public/Connexion';

//Importation Private.
import Private from'./Private';

// Importation de useSelector.
import {useSelector} from 'react-redux';

const Index= () => {

    

    //Récupération de la variable qui est dans le state.

     const {login}= useSelector(state=>state)

  return (
    
  //Affichage de la connexion: si le login est faux allé dans private.
    <View>
        
      {!login? <Connexion/>:
      <Private/>}

      
    </View>
  )
}

export default Index