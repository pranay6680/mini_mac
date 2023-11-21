import {useState} from "react";
import React from "react";
import "./StylesNavbar.css";
import { useReducer } from "react";
import {itemReducer} from "./Ordered"
function Poper({getter}){
    const [ArrayItems,setArray] = useState([{id:1,name:"food",price:25,location :"uk"},
                    {id:2,name:"food",price:25,location :"uk"},
                    {id:3,name:"food",price:25,location :"uk"},
                    {id:4,name:"food",price:25,location :"uk"},
                    {id:5,name:"food",price:25,location :"uk"},
                    {id:6,name:"food",price:25,location :"uk"}
                ]);
             

    return (

        <>
        <div className="parentCont">
            <>
            <ul className="childCont">
             {ArrayItems.map((items)=> (
               <li className="arraylist" key = {items.id}>
                    <h3>Name:{items.name}</h3>
                    <h3>Price :{items.price}</h3>
                    <h3>Location :{items.location}</h3>
                    <button type="submit" className="btn1" onClick={()=> getter(items)}>Add Item</button>
               </li>
             ))}
                
            
            </ul>
            
            </>
        </div>
        </>
    )
}
export default Poper;