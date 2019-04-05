import  {
    GET_DATA,
    GET_OPTIONS,
    DELETE_ITEM
} from "./../constans";
//import  {items,options} from "./../data.js";
import  {items,options} from "./../data.json";

export const getData = (options) => {
    return (dispatch) => {
        return  dispatch ({
            type: GET_DATA,
            payload: items
        })
    }
};
/*
export const deleteItem = ({id,array}) => {
    return (dispatch) => {
        let result = array.filter(item => item._id!==id);
        return  dispatch ({
            type: DELETE_ITEM,
            payload:result
        })
    }
};
*/
export const getOptions = (username, password) => {
    return (dispatch) => {
        return {
            type:GET_OPTIONS,
            payload:options
        }
    }
};
