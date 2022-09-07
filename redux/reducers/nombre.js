// Initialisation de la valeur du state Nombre.
import { EDIT_NOMBRE} from "../type";


// Création de la constance initStatenNombre.
const initStateNombre=0;

//Exportation default.
export default function(state=initStateNombre,action){
   
       //  console.log(action.payload, state);

            switch(action.type){

            case EDIT_NOMBRE:{

               return action.payload;
            }
            
            
            default:
               return state;
         }
   
}