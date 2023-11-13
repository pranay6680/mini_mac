

import Reducer from "./reducer";


function InsideCart({inside}){
    
   
   return(
        <div className="insideParent">
            <ul className="childlist">
            {inside.map((insfood , index) => (
                
                <li className="listedelements" key={index}>
                    <h3>Name:{insfood.name}</h3>
                    <h3>Price:{insfood.price}</h3>
                    <div>
                        
                        <button type="submit">Remove</button>
                    </div>
                </li>
              
            ))}
            </ul>
        </div>
   )
    
}
export default InsideCart;
 