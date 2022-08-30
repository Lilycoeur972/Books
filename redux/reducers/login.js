// Initialisation de la valeur du state login.
import { EDIT_LOGIN } from "../type";


// Création de la constance initStateLogin.
const initStateLogin=false;

//Exportation default.
export default function(state=initStateLogin,action){

   switch(action.type){

     case EDIT_LOGIN:{
      return action.payload;
     }
   
     
     default:
        return state;
}
   
}