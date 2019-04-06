import  {
    GET_DATA,
    UPDATE_DATA,
    GET_OPTIONS,
    DELETE_ITEM,
    LOG_IN,
    LOG_OUT
} from "./../constans";
//import  {items,options} from "./../data.js";
import  {items,options} from "./../data.json";

export const updateList = (array) => (dispatch) => {
    console.log("!!!!");
    return  dispatch ({
        type: UPDATE_DATA,
        payload: array
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