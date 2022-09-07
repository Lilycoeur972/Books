
import { ADD_ARTICLE } from "../type";
import { existItem } from "../../Allapps/common/fonction";

//initailisation de l'état initiale d'article dans un tableau de valeur à vide pour débuter..
const initStateArticle =[];

//initailisation de l'état initiale d'article dans un tableau de valeur à vide pour débuter.


// Exportation default function. Initialisation initSateCategories
export default function(state= initStateArticle,action ){


    //console.log("action  article" , action)
//Mise à jour de l'action ADD_ARTICLE

        if (action.type==ADD_ARTICLE){
            //return nextState  

            //Destructuring ARTICLE à partir de state. Action .payload correspond à la valeur dans le dispacht.c
            return !existItem(state,action.payload.id)?[...state,action.payload]:state;
            //return [...state,action.payload];

        } else{

            return state;
        }

        }

  
