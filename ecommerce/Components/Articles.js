import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';


     // Création de la constance RenderCatégorie.
    const RenderArticle=({article})=>{

        

        return (

         // Bouton TouchableOpacity avec style+ texte.
            <TouchableOpacity style={styles.touchArticle}>

                {/*Application du style de texte catégorie */}
                <Text style={styles.textArticle}>{article.Nom}
                </Text>

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
    }

})