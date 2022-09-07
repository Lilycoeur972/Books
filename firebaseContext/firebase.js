{/*Importation de firestore. */}
import firestore from'@react-native-firebase/firestore';

// Création de la classe, orientée objet js.
class Firebase{
    firestore;

 // Création du constructeur de la class.
    constructor(){
            this.firestore = firestore();
    }

 // Création de la fonction getCatégorie. Récupération des documents de la catégorie.
    getCategories=()=> this.firestore.collection("Categories").get();
    
    // Création de la fonction getArticle. Récupération des documents de la catégorie.
    getArticles=()=> this.firestore.collection("Articles").get();

    // Récupération d'un article dans la collection, réalisation d'une requête.
    getArticleById=(id)=>this.firestore.collection("Articles").doc(id).get();
}

export default Firebase;