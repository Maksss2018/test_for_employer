import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import ItemsReducer from './../reducers/ItemsReducer';
import UserReducer from './../reducers/UserReducer';
import OptionsReducer from '../reducers/OptionsReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = createStore(
    combineReducers({
        items: ItemsReducer,
        options: OptionsReducer,
        user:UserReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);

export default  configureStore;
