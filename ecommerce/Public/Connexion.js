import { View, Text } from 'react-native';
import React from 'react';

//Importation du boutton 
import { Button } from '@rneui/themed';

//importation de useNavigation
import { useNavigation } from '@react-navigation/native';


// Création de la constance  Connexion 
const Connexion = () => {
  const navigation=useNavigation();

  const goToInscription=()=>{
    navigation.navigate("Inscription");
  }
 
  return (
    <View>
      <Text>Connexion</Text>
      <Button onPress={goToInscription} title="Veuillez-vous inscrire !" type="clear" />
    </View>
  )
}

export default Connexion