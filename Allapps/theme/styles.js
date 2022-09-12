import { BottomTabBarHeightCallbackContext } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import {colors} from'./colors';



   export const styles = StyleSheet.create({
    content:{
        flex:1,
        backgroundColor:colors.BgColorPrimary ,
        paddingTop:10,
        paddingHorizontal:10
    },

    //Style de la catégorie début
    categorieContent:{
        width:"100%",
       // backgroundColor:'red',
        height:100,
        color:'black'
        
    },

  // Style du titre.
    categorieTitle:{
        fontSize:25,
        fontWeight:'600',
       
    },

    //Bouton toucher 
    touchCategorie:{
        backgroundColor:'red',
        margin:10,
        padding:10,
        width:110,
        borderRadius:5,
        height:40,
    }, 

    // style du texte Catégorie.
    textCategorie:{
        fontSize:18,
        color:colors.TextPrima,
        fontWeight:"500"
    },
    //fIN DU STYLE DE LA CATEGORIE.

    //Article card debut
    articleContent:{
        flex:1,
        
     },
 
   // Style du titre.
     articleTitle:{
         fontSize:25,
         fontWeight:'600',
         color:'red',
     },
 
     //Bouton toucher 
     touchArticle:{
         backgroundColor:'black',
         margin:10,
         padding:10,
         width:160,
         borderRadius:15,
         height:200,
     }, 
 
     // style du texte Catégorie.
     textArticle:{
         fontSize:18,
         color:'red',
         fontWeight:"500"
     },
     
     // Style d'image 
     image:{
         width: 150,
         height:150,
 
     }
 //fin du article card 
})