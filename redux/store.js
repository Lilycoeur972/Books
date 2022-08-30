//Création du createStore et du rootReducers store.
import {legacy_createStore as createStore} from "redux";

import rootReducers from'./reducers';


//Exportation default createStore.
export default createStore(rootReducers);