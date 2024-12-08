import React from "react"
import "./footer.css"
import logo from './footerlogo.jpg'


const Footer = () =>{


  return(
     <footer>

      <p> Contact us</p>
      <p> Legal</p>
      <p> Privacy</p>
      <p> Security</p>
      <p> Terms & Conditions</p>
      <p> Accessibility</p>

     <img src={logo} className="footerlogo" />
     </footer>

  )


}


export default Footer;