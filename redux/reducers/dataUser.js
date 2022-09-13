
import {EDIT_USER } from "../type";
import { existItem } from "../../Allapps/common/fonction";

//initailisation de l'état initiale d'user dans un tableau de valeur à vide pour débuter..
const initStateUser =[];

//initailisation de l'état initiale d'USER dans un tableau de valeur à vide pour débuter.


// Exportation default function. Initialisation initStateUser
export default function(state= initStateUser,action ){


    //console.log("action  article" , action)
//Mise à jour de l'action EDIT_USER

        if (action.type==EDIT_USER){
            //return nextState  

            //Destructuring USER à partir de state. Action .payload correspond à la valeur dans le dispacht.c
            return action.payload
            
            //return [...state,action.payload];

        } else{

            return state;
        }

        }

  
