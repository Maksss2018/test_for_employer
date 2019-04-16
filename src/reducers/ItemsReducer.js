import  {
  GET_DATA,
  DELETE_ITEM,
  UPDATE_DATA
} from "./../constans";
export default (state = null,action) => {

  console.dir(action);
  switch (action.type) {
    case GET_DATA:
      return (action.payload);
    case UPDATE_DATA:
      let {id, items} = action.payload;
      return (id!==null?items.filter(item => item._id!==id):[]);
    case  DELETE_ITEM:
      return (action.payload);
    default:
      return state
  }
}
