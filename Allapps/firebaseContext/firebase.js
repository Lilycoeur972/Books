import firestore from'@react-native-firebase/firestore';

// Création de la classe, orientée objet js.
class Firebase{
    firestore;

 // Création du constructeur de la class.
    constructor(){
            this.firestore=firestore();
    }
}