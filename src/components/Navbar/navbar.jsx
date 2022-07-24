import React from 'react'
import './navbar.css';
import {BsSearch,BsUser} from "react-icons/bs"
import {AiOutlineUser}  from "react-icons/ai"
import {BsHandbag} from "react-icons/bs"

function Navbar() {
  let common ={
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      cursor:"pointer"
  }
   
 
  return (
    <div className="app">
          <div className="div1">
                <p1 style={{color:"white"}}>Delivering in Mumbai and Delhi | Same day delivery!</p1>
          </div>
           <div className="div2">
                <div style={{
                    display:"flex",
                    gap:"3rem",
                    marginLeft:"40px"
                }}>
                    <div style={common}>SHOP</div>
                    <div style={common} >LEARN</div>
                    <div style={common} >GROW</div>
                   
                </div>
                <div style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    marginLeft:"200px",
                }}>
                  <img style={{height:"35px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x@2x.png?v=1596288204"/>
                </div>
                <div  style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    gap:"1.5rem",
                    marginLeft:"200px"
                }}>
                  <div style={common}>
                     <img style={{height:"20px",width:"20px"}}src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_map_location_logo_icon_159350.png"/>
                     <p>Mumbai</p>
                  </div>
                  <div style={common}>
                     <BsSearch/>
                  </div>
                  <div style={common}>
                     <AiOutlineUser/>
                  </div>
                  <div style={common}>
                    <BsHandbag/>
                  </div>
                </div> 
            
              </div>
              
    </div>
  )
}

export default Navbar