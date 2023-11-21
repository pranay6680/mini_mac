import InsideCart from "./Ordered"
import {useReducer} from "react";
import itemReducer from "./reducer"
function Usered({inside}){
    const [state , setState] = useReducer(itemReducer , {inside : inside});
    return (
        <InsideCart updateState = {state.inside} dispatch = {setState}/>
    )
}
export default Usered;
