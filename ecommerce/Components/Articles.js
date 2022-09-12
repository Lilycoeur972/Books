import { StyleSheet, Text, View, FlatList ,TouchableOpacity } from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { styles } from '../../Allapps/theme/styles';



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
            <View style={styles.articleContent}>

           {/*Création du style du titre. */} 
            <Text style={styles.articleTitle}>Articles</Text>

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


