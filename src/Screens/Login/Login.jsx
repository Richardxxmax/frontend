import React,{useState} from 'react'
import Logo from "../assets/logo.jpeg"
import "./Login.css"
import Header from '../../Views/Header/Header'
import Footer from '../../Views/Footer/footer'

const Login = ()=>{

    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const SignIn  = () =>{
 
        // alert("userName:" + userName + '\n' + "password:" + password)


    }

    return(
        <div>
        <Header />
   
        <div className='s1c1' >
          <img src={Logo} className='login-logo' alt = "capitalone logo" />
          <h6 className='s1t1'>Sign in</h6>

          <p className='s1t3'>Username</p>
          <input  onChange={(e)=>setUserName(e.target.value)} type='text' className='s1I1' />


          <p className='s1t4'>Password</p>
          <input onChange={(e)=>setPassword(e.target.value)} type='password' className='s1I2' />

         <div className='s1c2'> 
         <input className='s1I3' type="checkbox"  />
         <p className='s1t5'>Remember Me</p>
         </div>

         <div onClick={()=>SignIn()} className='s1c3'>
            <p className='s1t6'>Sign in</p>
         </div>
 
         <h6 className='s1t7'>Forgot Username or Password?</h6>

         <h6 className='s1t8'>Set Up an Online Access?</h6>
        </div>
        <Footer />
        </div>
    )



}


export default Login;
