import { useContext ,useReducer , useState , useEffect} from "react";
import Reducer from "./reducer";
import React from "react"

import { myContext } from "./App";



// creating to check weather pasing from other function can give updated state immediatly.


function InsideCart({state}) {





  return (
    <>
    <div className="insideParent">
      <ul className="childlist">
        {state.map((insfood, index) => (
         
          <li className="listedelements" key={index}>
           
            <h3>Name:{insfood.name}</h3>
            <h3>Price:{insfood.price}</h3>
            <div>
              <button type="submit" onClick={() => (insfood)}>
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
