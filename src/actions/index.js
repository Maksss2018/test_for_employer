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
import  {items,options} from "./../data.json";

export const useActions = (state , dispatch) => {
    /*
        function addTechIfNotInList(newTech) {
            const techIndex = state.techList.indexOf(newTech);
            if (techIndex !== -1) {
                alert("Tech is defined in list");
            } else {
                dispatch({ type: types.ADD_TO_TECH_LIST, payload: newTech });
            }
        }
    */

    const getNewList = function(){
        if(!localStorage.newList){
            localStorage.newList =  JSON.stringify( []);
        }
         dispatch ({
            type: GET_NEW_LIST,
            payload:  JSON.parse(localStorage.newList)
        })
    };

    const updateNewList = (item) => (dispatch) => {
        console.log(" NewList "+item);
        let trg =  JSON.parse(localStorage.newList);
        trg = [item,...trg];
        localStorage.newList =  JSON.stringify(trg);
        return  dispatch ({
            type: UPDATE_NEW_LIST,
            payload:  trg
        })
    };
    const delNewListItem = (id) => (dispatch) => {

        let trg =  JSON.parse(localStorage.newList),
            res = trg.filter( item => item._id!==id);
        localStorage.newList =  JSON.stringify(res);
        return  dispatch ({
            type: DELETE_ITEM_NEW_LIST,
            payload:  res
        })
    };

    const updateList = (id=null,array) => (dispatch) => {
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

    const getData = function (){
        dispatch ({
            type: GET_DATA,
            payload: items
        })

    };

    const deleteItem = function (id=null,items){
        dispatch ({
            type: UPDATE_DATA,
            payload: {id,items}
        })
    };
    const login = () => (dispatch) => dispatch ({
        type:LOG_IN,
        payload:true
    });
    const logOut = () =>  (dispatch) =>  dispatch ({
        type:LOG_OUT,
        payload:false
    });
    return {
//        addTechIfNotInList
        getNewList,
        updateNewList,
        delNewListItem,
        updateList,
        getData,
        login,
        logOut,
        deleteItem
    };
};