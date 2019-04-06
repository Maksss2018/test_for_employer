import  {
  LOG_IN,
  LOG_OUT
} from "./../constans";
export default (state = null,action) => {
  switch (action.type) {
    case LOG_IN:
      return (action.payload);
    case LOG_OUT:
      return (action.payload);
    default:
      return false
  }
}
