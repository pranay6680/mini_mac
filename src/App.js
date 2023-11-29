import React, { createContext ,useState , useRef, useEffect  } from "react";
import Poper from "./PopupMenu.js";
import "./App.css";
import "./StylesNavbar.css";
import img1 from "./cart.png";
import bgimg from "./LOGOSAM.png"
import InsideCart from "./Ordered.js";
import Usered from "./Usereducer.js";
import { ADDtoCart } from "./Actions.js";


const myContext = createContext();

function App() {
////////////////////////////////////////////////////////////////////////
  // const [menuVisible , menuHidden] = useState(false);
  // const visibility = () => {
  //     menuHidden(!menuVisible)
  // }
///////////////////////////////////////////////////////////////////////

// const [OrderedMenu , setOrderedMenu] = useState(false);
// const OrderedVisibility = () => {
//   setOrderedMenu(!OrderedMenu)
// }
///////////////////////////////////////////////////////////////////////
  // { the below one used as commener to pass data between three components
  
  const[pran , setPran] = useState([]);
 
  const PranItems = (foodinCart) =>{
    setPran((prans) => [...prans , foodinCart]);
  }




////////////////////////////////////////////////////////////////////////////
  const listNav = (
    <myContext.Provider value={{pran , setPran}}>
    
      <div className="navbar">
        <div className="navitems">
          <ul>
            <div className="H1">
              <button type="submit">HOME</button>
            </div>
            <div className="A1">
              <button type="submit">ABOUT</button>
            </div>
            <div className="M1" >
              <button type="submit">MENU</button>
            </div>
            <div className="img1" >
              <div className="updater">{0}</div>
             
              <img src={img1} alt="cartimage"  ></img>
            </div>
          </ul>
        </div>

{/* //////////////////////////////////////////////////////////////////////////   */}
        {/* <div className="bgimg">
          <img src={bgimg} alt="backgroundpic"></img>
        </div> */}
        <div style={{display : 'block' }}>
          <Poper ADDtoCart = {PranItems}/>
        </div>
        
        <div  style = {{display :  "block" }}>
          
               <Usered />   
         
        </div>
     <div>
         
        </div>
{/* //////////////////////////////////////////////////////////////////////////////////  */}
      </div>
    </myContext.Provider>
  );
  return <>{listNav}</>;
}
export {myContext};
export default App;
