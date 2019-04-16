import ItemsReducer from './../reducers/ItemsReducer';
import UserReducer from './../reducers/UserReducer';
import OptionsReducer from '../reducers/OptionsReducer';
import NewListReducer from '../reducers/NewListReducer';

//import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
//import thunk from 'redux-thunk';
const initialState = {
    items:[],
    options:[],
    user:[],
    newList: []
};
const reducers =  (state,action) => ({
    items: ItemsReducer(state["items"],action),
    options: OptionsReducer(state["options"],action),
    user:UserReducer(state["user"],action),
    newList:NewListReducer(state["newList"],action)
});

export   {reducers, initialState};
