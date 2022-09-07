import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//Importation de NavigationContainer.
import {NavigationContainer} from '@react-navigation/native';



//Importation des différentes pages de navigation de l'application.
import FirstScreen from './Allapps/First';
import AppNewScreen from './Allapps/AppNews';
import Insta from './Allapps/Insta';
import Tuto from './Allapps/TutoFlatList';

//Importation e-commerce
import ecommerce from './ecommerce';

//importation du fournisseur store.
import store from './redux/store';

//Importation du providers: acces aux données.
import {Provider} from 'react-redux';

//Importation Auth  à partir de react-native-firebase/auth.
import auth from '@react-native-firebase/auth';

//Importation de TutoFireList.
import TutoFireList from'./Allapps/TutoFireList';

//Importation index.js.
import index from'./Allapps/TutoFireList';

//  Importation de createNativeStackNavigation 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Importation de DetailScren. 
import DetailScreen from './Detail/Detail';*/

/* Création de la constance Stack. */
const Stack = createNativeStackNavigator();

        const App = () => {
          auth()
          .signInAnonymously()
          .then(() => {
            console.log('User signed in anonymously');
          })
          .catch(error => {
            if (error.code === 'auth/operation-not-allowed') {
              console.log('Enable anonymous in your firebase console.');
            }

            console.error(error);
          });
  return (
    <Provider store={store}>
      
      {/* Création de la Navigation Container.*/}

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="First" component={FirstScreen} />

          {/* je traite les vues de mon appscreen.*/}
          <Stack.Screen name="NewsApp" component={AppNewScreen} />

          {/* Création de la 

        <Stack.Screen name="DetailScreen" component={DetailScreen}/>*/}
          <Stack.Screen name="AppInsta" component={Insta} />
          <Stack.Screen name="AppTuto" component={Tuto} />

          {/* E-commerce app Screen. Cacher l'entête */ }
          <Stack.Screen name="Appecommerce" options={{headerShown:false}} component={ecommerce}/>

          {/*TutoFireList */}
          <Stack.Screen name="AppTutoFireList" component={TutoFireList}/>
          
          
        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
