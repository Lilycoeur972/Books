import { StyleSheet, View, Text,Button } from 'react-native';
import React from 'react';
import {useDispatch ,useSelector} from'react-redux';
//Importation  editLOgin
import{editLogin, editNombre} from '../../redux/action';

//Création de la constante Connexion.
const Connexion = () => {

  //Aficher l'information. J'ai besoin de la valeur de nombre donc je crée une constante nombre.destructuring.
  const {nombre} = useSelector(state=>state)

  // Création de la constance dispatch. distribuer l'information.
  const dispatch = useDispatch();

  // Création de la constance pressConnexion.
  const pressConnexion=()=>{

    //Dispatch editLogin.
    dispatch(editLogin(true))

    //Console log de connexion.
     console.log("connexion")
  }

  // fonction flêchée de nombre+.
   const nombrePlus=() =>{
 
    //Console log de nombrePlus.
   console.log("nombrePlus",nombre);

    // Dispatch editNombre.
    dispatch(editNombre(1))


    // Console log de nombrePlus.
   
  }

  return (

    <View>

      <Text>Login</Text>
        
      <Text> Nombre:{nombre}</Text>

      {/*Création du bouton de connexion. */}
      <Button onPress={pressConnexion} title='Connexion'/>

      {/*Incrémentation du bouton nombrePlus */}
      <Button onPress={nombrePlus} title='Incrémentation'color='green'/>

      
    </View>
  )
}

export default Connexion