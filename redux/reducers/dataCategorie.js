import { ADD_CATEGORIE } from "../type";

//initailisation de l'état initiale de catégorie dans un tableau de valeur à vide pour débuter..
const initStateCategories =[{id:7,nom:"Nicolas"}];

// Exportation default function. Initialisation initSateCategories
export default function(state= initStateCategories,action ){

//Mise à jour de l'action ADD_CATEGORIE

        if (action.type==ADD_CATEGORIE){
            //return nextState  

            //Destructuring catégorie à partir de state. Action .payload correspond à la valeur dans le dispacht.c
            return [...state,action.payload];

        } else{
            return state;
        }
        }