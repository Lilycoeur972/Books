import { View, Text } from 'react-native';
import React, {useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button , Input} from '@rneui/themed';

//iMPORTATION DE FIREBASE CONTEXT
import Firebase from '../../firebaseContext/firebase';


import {Icon } from 'react-native'

{/*Importation de MaterialIcons */}
import MaterialIcons from'react-native-vector-icons/MaterialIcons' ;

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import auth from '@react-native-firebase/auth';


const Inscription = () => {
    const navigation=useNavigation();

    //Création de la constance pour afficher le mot de passe.

    //SetAffMotDePasse met à jour 
  const [affMotDePasse, setAffMotDePasse] = useState(true);

  const [email, setEmail] = useState();

  const [motDePasse, setMotDePasse] = useState();


  const firebase =useContext(Firebase)

    const goToConnexion =()=>{
        navigation.navigate("Connexion");
    }

    //Action sur le Bouton
    const save =()=>{
        console.log("fisrt",email,motDePasse);
        //Ecouteur
        auth().
        createUserWithEmailAndPassword(email, motDePasse)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    
    

    console.error(error);
  });
    }

  return (
    <View>
      <Text>Inscription</Text>

    {/*Création du texte input de l'adresse mail */}
      <Input
      placeholder='Entrer votre adresse email.'

      //Mise à jour de la variable email.
      onChangeText={value=>setEmail(value)}
      leftIcon={
        <MaterialIcons
          name='email'
          size={24}
          color='black'
        />
      }
    />
   {/*Création du texte input du mot de passe */}
    <Input
      placeholder='Entrer votre mot de passe.'

      //Mise à jour de la variable  mot de passe
      onChangeText={value=>setMotDePasse(value)}

      //Sécurisation du mot de passe.
      secureTextEntry={affMotDePasse}

      leftIcon={
        <MaterialIcons
          name='keyboard'
          size={24}
          color='black'
        />
      }

      /*Création de l'icone qui se situe à côté du mot de passe. */
      rightIcon={
        <MaterialIcons 
        name={affMotDePasse?'remove-red-eye':'remove-red-eye'}

        //Bouton du mot de passe
        onPress={()=>setAffMotDePasse(!affMotDePasse)}
        size={24}
        color='black'
        />
      }
    />

     {/*Bouton de Connexion  */}
      <Button  title="Veuillez-vous inscrire " type="clear" 

      /*Fonction du bouton save. */
      onPress={save}/>

      
      

      {/*Bouton de Inscription  */}
      <Button onPress={goToConnexion} title="Veuillez-vous connecter. " type="outline" />


     
    </View>
  )
}

export default Inscription