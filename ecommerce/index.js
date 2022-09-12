import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Screen/Home';
import Setting from './Screen/Setting';

import {useContext} from 'react';

import {FirebaseContext} from '../firebaseContext';

import {useEffect} from 'react';

{/*Importation de useDispatch.*/}
import { useDispatch } from 'react-redux';

{/*Importation de createStackNavigator.*/}
import {createNativeStackNavigator} from '@react-navigation/native-stack';

{/* importation de detailartiticle.*/}
import Detailarticle from './Screen/Detailarticle';

{/*Importation de addArticle; addCategorie. */}
import {addArticle, addCategorie} from'../redux/action';

{/*Importation de Panier*/}
import Panier from './Screen/Panier';

const Tab = createBottomTabNavigator();

{/*Creation de la constance Stack.*/}
const Stack= createNativeStackNavigator();

{/* Création de la constance Accueil.*/}
const Accueil=()=>{

  return(
    /*Création de la Stack Navigator. */
    <Stack.Navigator>
      <Stack.Screen name='Accueil'component={Home}/>
      <Stack.Screen name='Detailarticle'component={Detailarticle}/>  
      
    </Stack.Navigator>
  )
}

const App = () => {

{/*Création de la constance dispacth.*/}
  const dispacth = useDispatch();

  {/*Création de la constance first*/}
  const firebase = useContext(FirebaseContext);

  {/* Création d'une constance intérmédiaire.*/}
  const initCategories = async () => {

    const categories = await firebase.getCategories(); 
  { /* console.log("categories.empty:",categories.empty).*/}

    {/* Si Résultat afficher.*/}
    if (!categories.empty) {
      {/*console.log("categories.empty:",categories.empty).*/}

      {/* Boucler sur les catégories.*/}
      categories.forEach(categorieData=>{

      {/*  console.log("categorieData.id:", categorieData.id).*/}
        const tempCategorie={id:categorieData.id,
                            ...categorieData.data()}

                            console.log(tempCategorie)
                           // addCategorie(tempCategorie).

       dispacth(addCategorie(tempCategorie))
        
        
        /*console.log("first ", {id:categorieData.id,
                       ...        nom:categorieData.data().nom}*/
      })
      /* const tempCategorie={id:categorieData.id,
      ... categorieData.data().nom}*/
      // Console log vide .
      //console.log('pas vide');
    }

  };
  // console.log("catégories:" ,categories);
  const initArticles = async () => {

    const articles = await firebase.getArticles();
    
    // Si Résultat afficher
    if (!articles.empty) {

      // Boucler sur les catégories.
      articles.forEach(articleData=>{
        const tempArticle={id:articleData.id,
                            ...articleData.data()}
                            //console.log(tempArticle)
      dispacth(addArticle(tempArticle))
        
        
        /*console.log("first ", {id:categorieData.id,
                       ...        nom:categorieData.data().nom}*/
      })
      /* const tempCategorie={id:categorieData.id,
      ... categorieData.data().nom}*/
      // Console log vide .
      //console.log('pas vide');
    }

  };

  // iNITIALISATION DE LA PAGE : chargement de la vue..

   useEffect(() => {
    initCategories();
     initArticles();
  }, []);

  return (

    /*Cacher les entêtes :.  */
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Accueil" component={Accueil} />
      <Tab.Screen name="Mon Compte" component={Setting} />
      <Tab.Screen name="Panier" component={Panier}/>
      
    </Tab.Navigator>
  );

};
export default App;
