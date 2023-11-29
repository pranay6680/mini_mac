



const ItemReducer = (state   , action) => {
    
    console.log(state , "reducerstate")
   switch(action.type){
    case "ADD" :
        return   {...state , pran : action.payload}

    case "DEL" :
        return {
            ...state,
             inside : state.inside.filter((item) => item !== action.payload)
        }
        case "INC" :
            return {

            }
        default :
        return state;
   }
}
export default ItemReducer;