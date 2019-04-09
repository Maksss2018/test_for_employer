import  {
  GET_NEW_LIST,
  UPDATE_NEW_LIST,
  DELETE_ITEM_NEW_LIST
} from "./../constans";
export default (state = null,action) => {
  switch (action.type) {
    case GET_NEW_LIST:
      return (action.payload);
    case UPDATE_NEW_LIST:
      return (action.payload);
    case  DELETE_ITEM_NEW_LIST:
      return (action.payload);
    default:
      return state
  }
}
