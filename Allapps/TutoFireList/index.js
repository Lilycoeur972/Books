import React, {useEffect, useState} from 'react';
import { SafeAreaView, View,FlatList, StyleSheet,Text,StatusBar,Image} from 'react-native';
import firestore from '@react-native-firebase/firestore';




const Item = ({ item}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.nom}</Text>
    <Text style={styles.title}>{item.prenom}</Text>
    <Image  style={styles.image} source={{uri:item.image}}/>
  </View>
);

    const App = () => {
    const renderItem = ({item}) => <Item item={item} />;

    const [data, setData]=useState([]);
    
  /*  //Fonction fléchée: onResult.
    onResult = () => {
        console.log('result');
    };

    // Fonction fléchée error.
    onError = () => {
        console.log('Error');
    }; */

    //Chargement de mon composant useEffect.
    useEffect(() => {

        //Configuration de l'écouteur actif.
        firestore()
        .collection('stagiaires')
        .onSnapshot(snapShot => {
            //console.log('snapShot',snapShot)

            // Création d'un tableau temporaire.
            let dataTemps =[];
        
            snapShot.forEach(document=>{

         // Ajout de données reçues dans un tableau. 
          dataTemps.push({id:document.id, ...document.data()});

          setData(dataTemps)
        console.log('document',dataTemps)
            })
        });
    },[]);

    return (
        <SafeAreaView style={styles.container}>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
        </SafeAreaView>
    );
    };

        const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
        },
        item: {
            backgroundColor: '#f9c2ff',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
        },
        title: {
            fontSize: 32,
        },

        image:{
        width:100,
        height:100,
    }
        });

export default App;
