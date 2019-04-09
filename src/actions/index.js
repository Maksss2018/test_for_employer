import  {
    GET_DATA,
    UPDATE_DATA,
    GET_OPTIONS,
    DELETE_ITEM,
    LOG_IN,
    LOG_OUT,
    GET_NEW_LIST,
    UPDATE_NEW_LIST,
    DELETE_ITEM_NEW_LIST
} from "./../constans";
//import  {items,options} from "./../data.js";
import  {items,options} from "./../data.json";

export const getNewList = () => async (dispatch) => {
    if(!localStorage.newList){
        localStorage.newList =  JSON.stringify( []);
    }
    return  dispatch ({
        type: GET_NEW_LIST,
        payload: await  JSON.parse(localStorage.newList) || []
    })
};

export const updateNewList = (item) => (dispatch) => {
    console.log(" NewList "+item);
    let trg =  JSON.parse(localStorage.newList);
    trg = [item,...trg];
    localStorage.newList =  JSON.stringify(trg);
    return  dispatch ({
        type: UPDATE_NEW_LIST,
        payload:  trg
    })
};
export const delNewListItem = (id) => (dispatch) => {

    let trg =  JSON.parse(localStorage.newList),
     res = trg.filter( item => item._id!==id);
    localStorage.newList =  JSON.stringify(res);
    return  dispatch ({
        type: DELETE_ITEM_NEW_LIST,
        payload:  res
    })
};

export const updateList = (id=null,array) => (dispatch) => {
    let result;
    console.log("!!!!");
    if(id!==null){
        result =  array.filter(item => item._id!==id)
    } else {
        result = []
    }
    return  dispatch ({
        type: UPDATE_DATA,
        payload: result
    })
};

export const getData = (options) => {
    return (dispatch) => {
        return  dispatch ({
            type: GET_DATA,
            payload: items
        })
    }
};
/*
export const getOptions = (username, password) => {
    return (dispatch) => {
        return {
            type:GET_OPTIONS,
            payload:options
        }
    }
};
*/
export const login = () => (dispatch) => dispatch ({
    type:LOG_IN,
    payload:true
});
export const logOut = () =>  (dispatch) =>  dispatch ({
    type:LOG_OUT,
    payload:false
});