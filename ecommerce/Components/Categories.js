import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import { styles } from '../../Allapps/theme/styles';

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
        // Création de la constance dataCategorie.
             const {dataCategorie}= useSelector(state=>state);

             console.log("dataCategorie", dataCategorie);

        return (

            /* Création du style de la view. */
            <View style={styles.categorieContent}>

           {/*Création du style du titre. */} 
            <Text style={styles.categorieTitle}>Categories</Text>

            {/* Création de la FlatList de la catégorie. */}
            <FlatList
            data={dataCategorie}
            horizontal={true}
            renderItem={({item})=><RenderCategorie categorie={item}/>}
            keyExtractor={item=>item.id}
            />
            
            {/*  Création de la FlatList articles */}
            </View>
        )
        }

export default Categories




