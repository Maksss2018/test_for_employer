import  {
    GET_OPTIONS
} from "./../constans";
export default (state = null,action) => {
   switch (action.type) {
    case GET_OPTIONS:
      return (action.payload);
    default:
      return state
  }
}
