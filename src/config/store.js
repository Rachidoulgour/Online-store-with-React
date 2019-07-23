import {createStore, combineReducers} from 'redux';
import panierReducer from '../features/panier/reducer'
const rootReducer=combineReducers({
    panier: panierReducer

})
const store=createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)
export default store;