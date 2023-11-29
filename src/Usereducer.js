import InsideCart from "./Ordered"
import {useReducer , useContext} from "react";

import { myContext } from "./App";
import ItemReducer from "./reducer"
import Poper from "./PopupMenu";
import { ADDtoCart } from "./Actions";



function Usered(){
    
    const pranay  = useContext(myContext);
   
      
     const [state , setState] = useReducer(ItemReducer , pranay.pran);

   console.log(state , "usereducer stater")


  
   return (
    <> 
      
       <InsideCart stater = {state} />
    </>
   )
   
}
export default Usered;
