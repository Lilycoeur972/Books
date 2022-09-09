import {existItem} from '../../Allapps/common/fonction';
import {ADD_CATEGORIE, ADD_PANIER, REMOVE_PANIER, REMOVE_ONE_PANIER
} from '../type';

//initailisation de l'état initiale de panier dans un tableau de valeur à vide pour débuter..
const initStatePanier = [];

//initailisation de l'état initiale d'article dans un tableau de valeur à vide pour débuter.

// Exportation default function. Initialisation initStatePanier
export default function (state = initStatePanier, action) {

   

  //return state;

  //Mise à jour de l'action ADD_PANIER

   if (action.type==ADD_PANIER){
    console.log('reducer', action.payload);

           //Destructuring catégorie à partir de state. Action .payload correspond à la valeur dans le dispacht.c
           // Retourne la fonction existItem .
            return !existItem(state,action.payload.id)?[...state,action.payload]:state;
            
 
                     {/* Vider mon panier. */}
        } else if (action.type==REMOVE_PANIER){ 
        
                        return action.payload
                        
             // Vider un élément de mon panier.
        } else if (action.type==REMOVE_ONE_PANIER){ 

                 
              

         /* 1.Rechercher la position de l'élément dans le tableau.. */  
         /*2.Supprimer l'élément dans le tableau. */   
         
         /*Retourner tous les éléments qui n'ont pas cet identifiant. */
         return state.filter(item=>item.id!=action.payload.id)
        } else{
            return state;
        }
}
