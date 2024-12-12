import React from "react"
import "./footer.css"
import logo from './footerlogo.jpg'


const Footer = () =>{


  return(
     <footer>

      <a href="https://www.capitalone.com/help-center/contact-us/"><p> Contact us</p></a>
      <a href="https://www.capitalone.com/help-center/contact-us/"><p> Legal</p></a>
      <a href="https://www.capitalone.com/help-center/contact-us/"><p> Privacy</p></a>
      <a href="https://www.capitalone.com/help-center/contact-us/"><p> Security</p></a>
      <a href="https://www.capitalone.com/help-center/contact-us/"><p> Terms & Conditions</p></a>
      <a href="https://www.capitalone.com/help-center/contact-us/"><p> Accessibility</p></a>

     <img src={logo} className="footerlogo" />
     </footer>

  )


}


export default Footer;