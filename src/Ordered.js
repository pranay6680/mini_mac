import { useContext ,useReducer , useState , useEffect} from "react";
import Reducer from "./reducer";
import React from "react"
import addtoCart from "./Actions";



// creating to check weather pasing from other function can give updated state immediatly.


function InsideCart({state}) {


// const [tone , settone] = useState(updateState);



  return (
    <>
    <div className="insideParent">
      <ul className="childlist">
        {state?.map((insfood, index) => (
         
          <li className="listedelements" key={index}>
           
            <h3>Name:{insfood.name}</h3>
            <h3>Price:{insfood.price}</h3>
            <div>
              <button type="submit" onClick={() => addtoCart(insfood)}>
                Remove
              </button>
            </div>
          </li>
        ))}
     
      </ul>
    </div>
   
   </>
  );
}


export default InsideCart;
