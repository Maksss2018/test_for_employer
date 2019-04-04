import  {
    GET_DATA,
    GET_OPTIONS
} from "./../constans";
import  {items,options} from "./../data.js";

export const getData = (options) => {
    return (dispatch) => {
        return  dispatch ({
            type: GET_DATA,
            payload: items
        })
    }
};

export const getOptions = (username, password) => {
    return (dispatch) => {
        return {
            type:GET_OPTIONS,
            payload:options
        }
    }
};
