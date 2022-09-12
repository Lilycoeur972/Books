import {existItem} from '../../Allapps/common/fonction';
import {ADD_CATEGORIE} from '../type';

//initailisation de l'état initiale de catégorie dans un tableau de valeur à vide pour débuter..
const initStateCategories = [];

//initailisation de l'état initiale d'article dans un tableau de valeur à vide pour débuter.

// Exportation default function. Initialisation initSateCategories
export default function (state = initStateCategories, action) {

  

  //return state;

  //Mise à jour de l'action ADD_CATEGORIE

   if (action.type==ADD_CATEGORIE){

    console.log('reducer', action.payload);

           //Destructuring catégorie à partir de state. Action .payload correspond à la valeur dans le dispacht.c
           // Retourne la fonction existItem .
           
            return !existItem(state,action.payload.id)?[...state,action.payload]:state;
            

        } else{
            return state;
        }
}
