//Importation de l'action EDIT_LOGIN.
import { EDIT_LOGIN } from "./type";

// Exportation de la constance editLogin qui se compose de son type et son payload.
export const editLogin=(login)=>({
    type:EDIT_LOGIN,
    payload: login
})