//Importation de l'action EDIT_LOGIN.
import login from "./reducers/login";
import nombre from "./reducers/nombre";
import { ADD_ARTICLE, ADD_CATEGORIE, EDIT_LOGIN,EDIT_NOMBRE } from "./type";



// Exportation de la constance editLogin qui se compose de son type et son payload.
export const editLogin=(login)=>({ 
    type:EDIT_LOGIN,
    payload: login
})  

// Exportation de constance nombre.
export const editNombre=(nombre)=>({
    type:EDIT_NOMBRE,
    payload:nombre
})
// Reçoit les catégories.
export const addCategorie = (categorie)=>({
    
    //Création du type et de l'action.
 type:ADD_CATEGORIE,
 payload: categorie
})

// Recoit les articles.
export const addArticle = (article)=>({
    
    //Création du type et de l'action.
    type:ADD_ARTICLE,
    payload: article,
})