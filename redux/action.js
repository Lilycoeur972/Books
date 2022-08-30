//Importation de l'action EDIT_LOGIN.
import login from "./reducers/login";
import nombre from "./reducers/nombre";
import { EDIT_LOGIN,EDIT_NOMBRE } from "./type";



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