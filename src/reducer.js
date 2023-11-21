import react from "react";

 const itemReducer = (state , action) => {
   switch(action.type){
    case "ADD" :
        return   [...state ,action.payload]

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
export default itemReducer;