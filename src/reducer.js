import react from "react";
import { useReducer,useContext } from "react";
import Usered from "./Usereducer";
import { myContext } from "./App";

 const itemReducer = (state  , action) => {
    
    console.log(state , "reducerstate")
   switch(action.type){
    case "ADD" :
        return   {...state , inside : action.payload}

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