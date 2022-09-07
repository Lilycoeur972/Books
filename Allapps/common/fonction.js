export const existItem=(data = [], id = '' ) => {
    
    // Retourne la ligne de dta, ou l'élément 
    return  data.find(item => item.id ==id) != undefined;
}