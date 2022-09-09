import { StyleSheet, Text, View, FlatList ,TouchableOpacity } from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';



     // Création de la constance RenderCatégorie.
    const RenderArticle=({article})=>{
        
        //Création de la constance navigation 
        const navigation= useNavigation();

        //Création du bouton  onPressArticle
        const onPressArticle=()=>{
          navigation.navigate("Detailarticle", {id: article.id})
        }
        return (

         // Bouton TouchableOpacity avec style+ texte.
            <TouchableOpacity  onPress={onPressArticle} style={styles.touchArticle}>

                {/*Application du style de texte catégorie */}
                <Text style={styles.textArticle}>{article.Nom}</Text>
                <Image source={{uri: article.Image}} style={styles.image}/>
               

            </TouchableOpacity>
        )
    }


        const Article = () => {
        // Création de la constance dataCategorie.
             const {dataArticle}= useSelector(state=>state);

             console.log("dataCategorie", dataArticle);

        return (

            /* Création du style de la view. */
            <View style={styles.content}>

           {/*Création du style du titre. */} 
            <Text style={styles.title}>Articles</Text>

            {/* Création de la FlatList de la catégorie. */}
            <FlatList
            data={dataArticle}
            horizontal={false}
            
            //Nombre de colognes.
            numColumns={2}
            renderItem={({item})=><RenderArticle article={item}/>}
            keyExtractor={item=>item.id}
            />
            
            {/*  Création de la FlatList articles */}
            </View>
        )
        }

export default Article


const styles = StyleSheet.create({

    content:{
       flex:1
    },

  // Style du titre.
    title:{
        fontSize:25,
        fontWeight:'600',
    },

    //Bouton toucher 
    touchArticle:{
        backgroundColor:'red',
        margin:10,
        padding:10,
        width:160,
        borderRadius:15,
        height:200,
    }, 

    // style du texte Catégorie.
    textArticle:{
        fontSize:18,
        color:"#fff",
        fontWeight:"500"
    },
    // Style d'image 
    image:{
        width: 150,
        height:150,

    }

})