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
}

export default Firebase;