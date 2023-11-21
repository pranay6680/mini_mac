import React, { useState , useRef  } from "react";
import Poper from "./PopupMenu.js";
import "./App.css";
import "./StylesNavbar.css";
import img1 from "./cart.png";
import bgimg from "./LOGOSAM.png"
import InsideCart from "./Ordered.js";
import Usered from "./Usereducer.js";

function App() {
////////////////////////////////////////////////////////////////////////
  const [menuVisible , menuHidden] = useState(false);
  const visibility = () => {
      menuHidden(!menuVisible)
  }
///////////////////////////////////////////////////////////////////////

const [OrderedMenu , setOrderedMenu] = useState(false);
const OrderedVisibility = () => {
  setOrderedMenu(!OrderedMenu)
}
///////////////////////////////////////////////////////////////////////
  // { the below one used as commener to pass data between three components

  const[pran , setPran] = useState([]);
  
  const PranItems = (foodinCart) =>{
    setPran([...pran , foodinCart]);
  console.log(pran)
 
  }
  
 
    
 
 
//////////////////////////////////////////////////////////////////////////////}
// let Updater = {
//   quantity : 0
// }
// const [newCart, setNewCart] = useReducer(itemReducer, Updater);
// const increase = () => {
//   setNewCart({type : "INC" })
// }


////////////////////////////////////////////////////////////////////////////
  const listNav = (
    <>
      <div className="navbar">
        <div className="navitems">
          <ul>
            <div className="H1">
              <button type="submit">HOME</button>
            </div>
            <div className="A1">
              <button type="submit">ABOUT</button>
            </div>
            <div className="M1" onClick={visibility}>
              <button type="submit">MENU</button>
            </div>
            <div className="img1" onClick={OrderedVisibility}>
              <div className="updater">{0}</div>
             
              <img src={img1} alt="cartimage"  ></img>
            </div>
          </ul>
        </div>

{/* //////////////////////////////////////////////////////////////////////////         */}
        {/* <div className="bgimg">
          <img src={bgimg} alt="backgroundpic"></img>
        </div> */}
        <div style={{display : menuVisible ? 'block' : "none" }}>
          <Poper getter = {PranItems}/>
        </div>
        
        <div  style = {{display : OrderedMenu ? "block" : "none"}} >
          
        {OrderedMenu && <Usered inside = {pran}/>}
         
        </div>
     
       
{/* //////////////////////////////////////////////////////////////////////////////////  */}
      </div>
    </>
  );
  return <>{listNav}</>;
}

export default App;
