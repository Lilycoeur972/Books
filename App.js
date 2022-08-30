import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from './Allapps/First';
import AppNewScreen from './Allapps/AppNews';
import Insta from './Allapps/Insta';
import Tuto from './Allapps/TutoFlatList';

import ecommerce from './ecommerce';
//importation du fournisseur store.
import store from './redux/store';

//Importation du providers: acces aux données.
import {Provider} from 'react-redux';



/* Importation de DetailScren. 
import DetailScreen from './Detail/Detail';*/

/* Création de la constance Stack. */
const Stack = createNativeStackNavigator();

const App = () => {
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

          {/* E-commerce app Screen*/ }
          <Stack.Screen name="Appecommerce" component={ecommerce}/>
        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
