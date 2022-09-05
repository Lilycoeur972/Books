import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screen/Home';
import Setting from './Screen/Setting';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
     /*Cacher les entêtes :.  */
      <Tab.Navigator screenOptions={{headerShown:false}}>
       
        
        <Tab.Screen  name="Accueil" component={Home} />
        <Tab.Screen name="Mon Compte" component={Setting} />
      </Tab.Navigator>
  
  );
}