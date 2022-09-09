{/*Importation View et Text.*/}
import { View, Text, ActivityIndicator } from 'react-native';

{/*Importation de React et de useEffect.*/}
import React, { useEffect } from 'react';


{/*Importation de Firebase.*/}
import {FirebaseContext} from '../../firebaseContext';


{/*Importation de useState et useContext.*/}
import { useState, useContext } from 'react';

// importation de ArticleDetail.
import ArticleDetail from '../Components/ArticleDetail';

{/*Création de la constante pour dire qu'il n'y a pas d'article.*/}
const NoArticle=()=>{


   return (<Text>Il n'y a pas d'article.</Text>)
}


const Detailarticle = ({route}) => {

  {/*Récupération de l'id.à partir de la route.params.*/}
  const {id}= route.params;


  {/* Affichage des articles à partir de la constante article null.*/}
  const [article, setArticle] = useState(null);


{/*Création d'un setLoading loading: le chargement loading est égal à false.*/}
 const [loading, setLoading]=useState(false);


  {/*const firebase.*/}
  const firebase = useContext(FirebaseContext);


  // Récupération des données depuis firebase.
  const getArticle=async()=>{


    {/*Avant le chargement faire un setLoading true.*/}
    setLoading(true);

       
       const rqArticle= await firebase.getArticleById(id);

       {/*Indique le délai avant l'éxécution.*/}
       setTimeout(()=>{


       setArticle({id:id },rqArticle.data());
       setLoading(false);


       },500)


       {/*Console log de rqArticle.*/}
       console.log(rqArticle.data());
  }


  {/* Chargement de l'article avec useEffect.*/}
  useEffect(()=>{
    getArticle();
  },[])


 {/*Console log de l'id.*/}
  console.log('id',id)


  return (

    <View>
            {/*Vérification du chargement loading ==true */}   
          { (loading== true)?<ActivityIndicator/>:

          /*Si l'article est null appellé le composant detail. */
          (article== null)?<NoArticle/>

                           :<ArticleDetail article={article}/>
         }       
    </View>
  )
}

export default Detailarticle