//Importation de l'action EDIT_LOGIN.
import login from "./reducers/login";
import nombre from "./reducers/nombre";
import { ADD_ARTICLE, ADD_CATEGORIE, ADD_PANIER, EDIT_LOGIN,EDIT_NOMBRE, REMOVE_PANIER,REMOVE_ONE_PANIER } from "./type";



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
// Création de addPanier.action 
export const addPanier = (article)=>({
    
    //Création du type et de l'action.
    type:ADD_PANIER,
    payload: article,
})
// Création de l'action remove-one
export const removeOnePanier= (panier)=>({
    
    //Création du type et de l'action.
    type:REMOVE_ONE_PANIER,
    payload: panier,
})

//Création de Remove-Panier : action
export const removePanier =(panier)=>({
    type: REMOVE_PANIER,
    payload :[]
})