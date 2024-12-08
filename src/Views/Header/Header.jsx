import React from "react"
import logo from "./assets/logo.jpeg"
import './Header.css'
import { useNavigate } from "react-router-dom"

const  Header =()=>{

       const navigate = useNavigate();


    return(
        <header className="headerContainer">
          <img onClick={()=>navigate('/')} src={logo}  className="profilephoto"  alt="kelvin"  />
        
  
    
        </header>
    )
}

export default Header;