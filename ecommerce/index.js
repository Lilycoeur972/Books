import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Screen/Home';
import Setting from './Screen/Setting';

import {useContext} from 'react';

import {FirebaseContext} from '../firebaseContext';

import {useEffect} from 'react';

const Tab = createBottomTabNavigator();

const App = () => {
  /*Création de la constance first*/
  const firebase = useContext(FirebaseContext);

  // Création d'une constance intérmédiaire.
  const initCategories = async () => {

    const categories = await firebase.getCategories();
    // Si Résultat afficher
    if (!categories.empty) {

      // Boucler sur les catégories.
      categories.forEach(categorieData=>{
        console.log("first ", categorieData.data())
      })
      console.log('pas vide');
    }

  };
  // console.log("catégories:" ,categories);

  // iNITIALISATION DE LA PAGE : chargement de la vue..
  
  useEffect(() => {
    initCategories();
  }, []);

  return (
    /*Cacher les entêtes :.  */
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Accueil" component={Home} />
      <Tab.Screen name="Mon Compte" component={Setting} />
    </Tab.Navigator>
  );
};
export default App;
