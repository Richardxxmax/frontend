import React,{useState} from 'react'
import Logo from "../assets/logo.jpeg"
import "./SignUp.css"
import Header from '../../Views/Header/Header'
import Footer from '../../Views/Footer/footer'
import { useNavigate } from 'react-router-dom'

const SignUp = ()=>{

    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    const SignIn  = () =>{
 
        // alert("userName:" + userName + '\n' + "password:" + password)


    }

    return(
        <div>
        <Header />
   
        <div className='s1c1' >
          <img src={Logo} className='login-logo' alt = "capitalone logo" />
          <h6 className='s1t1'>Sign Up</h6>

          <p className='s1t3'>First Name</p>
          <input  onChange={(e)=>setUserName(e.target.value)} type='text' className='s1I1' />

         
          <p className='s1t3'>Last Name</p>
          <input  onChange={(e)=>setUserName(e.target.value)} type='text' className='s1I1' />


          <p className='s1t3A'>Email(User Name)</p>
          <input  onChange={(e)=>setUserName(e.target.value)} type='text' className='s1I1' />

          
          <p className='s1t3B'>Social Security Number(SSN)</p>
          <input  onChange={(e)=>setUserName(e.target.value)} type='text' className='s1I1' />

          <p className='s1t4'>Password</p>
          <input onChange={(e)=>setPassword(e.target.value)} type='password' className='s1I2' />

          <p className='s1t3A'>Confirm Password</p>
          <input onChange={(e)=>setPassword(e.target.value)} type='password' className='s1I2' />

         <div className='s1c2'> 
         <input className='s1I3' type="checkbox"  />
         <p className='s1t5'>Keep Me Signed In</p>
         </div>

         <div onClick={()=>SignIn()} className='s1c3'>
            <p className='s1t6'>Sign Up</p>
         </div>
 
         <h6 onClick = {()=>navigate("/")}className='s1t7'>Already have an account? Sign In</h6>

     
        </div>
        <Footer />
        </div>
    )



}


export default SignUp;
