import {useReducer} from "react";
import InsideCart from "./Ordered";

const itemReducer = (newCart, action) => {
    
    switch (action.type) {
      case "DEL":
        return {
          ...newCart,
          insideItems: newCart.insideItems.filter(
            (its) => its.id !== action.payload
          ),
        };

      default:
        return newCart;
    }
  };



function Reducer({initial}) {
    console.log(initial)
    const [newCart , setNewCart] = useReducer(itemReducer , {insideItems :initial})
   const disp = (id) => {
    setNewCart({type: "DEL" , payload : id})
   }
  return <>
      <InsideCart inside={newCart.insideItems} />
       
  </>;
}
export default  Reducer;

// {i have used useReducer to remove the item on selected but i dont know its not working as expected rest all of the code is ok 
// if you try agian check the props is not passing as expected why?}
