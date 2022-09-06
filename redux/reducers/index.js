// Importation de la Combinaison des reducers.
import { combineReducers } from "@reduxjs/toolkit";

// importation de datacatégorie.
import dataCategorie from "./dataCategorie";

//importation de login.
import login from "./login";

//importation de nombre.
import nombre from './nombre';


//Exportation de combineReducers :login , nombre.
export default combineReducers({login,dataCategorie,nombre});

