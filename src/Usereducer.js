import InsideCart from "./Ordered"
import {useReducer , useContext} from "react";
import itemReducer from "./reducer";
import { myContext } from "./App";


function Usered(){
    const {pran} = useContext(myContext);
   console.log(pran , "context")
    const [state , setState] = useReducer(itemReducer , pran);
   console.log(itemReducer, "usereducer pran")

    const handleAdd = (newItem) => {
        setState({type : "ADD" , payload : newItem})
    }
   return (
    <> 
      
       <InsideCart />
    </>
   )
   
}
export default Usered;
