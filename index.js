/**
 * @format
 */
// Importation de React.
 import React from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Paramétrage de mon application Firebase. Importation de Firebase et FirebaseContext.
import Firebase,{FirebaseContext} from "./firebaseContext"


// Création de la constance AppContext. Fournisseur de Firebase.
const AppContext =()=>{

    return(

 <FirebaseContext.Provider value={new Firebase()}>

    <App/>
 </FirebaseContext.Provider>
    )
}

AppRegistry.registerComponent(appName, () => AppContext);
