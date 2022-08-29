//importation Axios.
import axios from 'axios';

//Création de la constance de l'API. paramètre de l'url de mon Api.
const urlApi = 'https://newsapi.org/v2/everything';

// Création de la constance apiKey et paramètre d'appel de mon api.
const apiKey = '21acc36fdc82493a85f2e7303a0af3ee';

/*Exportation de la constance apiNews. */
//Déclaration de l'asynchrone
export const apiNews = async () => {

  //Envoi de paramètre Api. Création de la constance paramètre.Copier le paramètrage à partir de la documentation newsapi.org. Ecriture en javascript

  const params = {
    q: 'Apple',
    from: '2022-08-24',
    sortBy: 'popularity',
    apiKey: apiKey,

    //Pagination de Api
    page:page ,
    pageSize: 10,
  };

  // Création de la constance response. Création de la fonction de l'api.
  const {data} = await axios.get(urlApi,{params:params});

  // Création du console log.
 // console.log('apiNews', response, data.articles);
 return data.articles
};
