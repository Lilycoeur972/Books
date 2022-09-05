import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

// Création de la constance data.

const data=[{id:1,nom:"cat1"},
            {id:2,nom:"cat2"},
            {id:3,nom:"cat3"},
            {id:4,nom:"cat4"},
            {id:5,nom:"cat5"},
            {id:6,nom:"cat6"}];


     // Création de la constance RenderCatégorie.
    const RenderCategorie=({categorie})=>{

        return (

         // Bouton TouchableOpacity avec style+ texte.
            <TouchableOpacity style={styles.touchCategorie}>

                {/*Application du style de texte catégorie */}
                <Text style={styles.textCategorie}>{categorie.nom}
                </Text>

            </TouchableOpacity>
        )
    }


        const Categories = () => {
        return (

            /* Création du style de la view. */
            <View style={styles.content}>

           {/*Création du style du titre. */} 
            <Text style={styles.title}>Categories</Text>

            {/* Création de la FlaTist. */}
            <FlatList
            data={data}
            horizontal={true}
            renderItem={({item})=><RenderCategorie categorie={item}/>}
            keyExtractor={item=>item.id}
            />
            </View>
        )
        }

export default Categories


const styles = StyleSheet.create({

    content:{
        width:"100%",
       // backgroundColor:'red',
        height:100,
    },

  // Style du titre.
    title:{
        fontSize:25,
        fontWeight:'600',
    },

    //Bouton toucher 
    touchCategorie:{
        backgroundColor:'red',
        margin:10,
        padding:10,
        width:60,
        borderRadius:5,
        height:40,
    }, 

    // style du texte Catégorie.
    textCategorie:{
        fontSize:18,
        color:"#fff",
        fontWeight:"500"
    }

})