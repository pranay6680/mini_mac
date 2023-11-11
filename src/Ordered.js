import { useReducer } from "react";

const itemReducer = (newCart , action) => {
    console.log(newCart)
    switch (action.type){
        case "DEL":
            return{ 
            ...newCart,
            insideItems : newCart.insideItems.filter((its) => its.id !== action.payload),
           
            }
           
         default :
         return newCart;
    };
    
};


function InsideCart({insideItems}){

    const [newCart , setNewCart] = useReducer(itemReducer , {insideItems})
    console.log(newCart)
   const dispatcher = (id) => {
    setNewCart({type : "DEL" , payload : id})
   }
    return(
        <div className="insideParent">
            <ul className="childlist">
            {newCart.insideItems.map((insfood , index) => (
                
                <li className="listedelements" key={index}>
                    <h3>Name:{insfood.name}</h3>
                    <h3>Price:{insfood.price}</h3>
                    <div>
                        
                        <button type="submit" onClick={() => dispatcher(insfood.id)}>Remove</button>
                    </div>
                </li>
              
            ))}
            </ul>
        </div>
    )
}
export default InsideCart;