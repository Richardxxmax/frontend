import React,{useState,useEffect} from 'react'
import Logo from "../assets/logo.jpeg"
import "./Login.css"
import Header from '../../Views/Header/Header'
import Footer from '../../Views/Footer/footer'
import { useNavigate } from 'react-router-dom'
import { SuccessAlert,WarningAlert,ErrorAlert } from '../../components/Alerts/Alerts'

import CircularProgress, {
    circularProgressClasses,
  } from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import API from "../../API/API";


const Login = ()=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isLoading, setLoading] = useState(false);
    const [mismatch,setMismatch] = useState(0)
    const [validation,setValidation]= useState(false)
    const [emailExisted,setEmailExisted] = useState(0)
    const [invalidEmail,setInvalideEmail] = useState(0)
    const [state,setState] = useState([]);
    const [serverStatus,setServerStatus] = useState(0);
    const [serverMessage,setServerMessage] = useState("");
    const navigate = useNavigate();


    function FacebookCircularProgress(props) {
        return (
          <Box sx={{ position: 'relative', margin:1 }}>
            <CircularProgress
              variant="determinate"
              sx={(theme) => ({
                color: theme.palette.grey[200],
                ...theme.applyStyles('dark', {
                  color: theme.palette.grey[800],
                }),
              })}
              size={30}
              thickness={4}
              {...props}
              value={100}
            />
            <CircularProgress
              variant="indeterminate"
              disableShrink
              sx={(theme) => ({
                color: 'red',
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round',
                },
                ...theme.applyStyles('dark', {
                  color: '#308fe8',
                }),
              })}
              size={30}
              thickness={4}
              {...props}
            />
          </Box>
        );
      }
      
      

    const SignIn = async ()=> {
 
           
              if(email===""){
                  setValidation(false);
                  setInvalideEmail(1);
              }else {
                  setInvalideEmail(0);
                  setValidation(true);
              }
          
             
          
             if(validation===true)
            {
                setLoading(true)
              const requestOptions = {
                method: 'POST',
                Accept:'application/json',
                headers: {
                       'Content-Type': 'application/json',
                     
                       
                   },
                body: JSON.stringify({"email":`${email}`,"password":`${password}`})
              };
              
              try {
              
                const response = await fetch(`${API.BASE_URL}/login`,requestOptions)
                const json = await response.json();
                var data = json
                setState(data);   
             
              } 
              catch (error) 
              {
                console.error(error);
              }
               finally 
               {
                   setLoading(false)
                  
              } 
             }
          
          
          
          




    }


    useEffect(()=>{
        if(state.status===202){//Login successfully
              const {id,email,firstName,lastName,isAdmin} = state.user
             //dispatch(setToken(state.token))
             //dispatch(setIsLoggedIn(true))
             //dispatch(SetEmail(email))
             //dispatch(setFirstName(firstName))
             //dispatch(setLastName(lastName))
             //dispatch(SetAdmin(isAdmin))
             //dispatch(setIsLoggedOut(false)) //Prevent double login
             //dispatch(setID(id))
             setTimeout(()=>{
               // navigate("/home")
            },1000)
       
            
            }else if(state.status===401){//Incorrect password
              setLoading(false)
              setMismatch(1)
              
            }else if(state.status===403){//Incorrect password
              setLoading(false)
              setMismatch(1)
              
            }else if(state.status===404){//Invalid email 
                   setEmailExisted(0);
                   setInvalideEmail(1);
                   setLoading(false)
        
            }
  },[state]);


    return(
        <div>
        <Header />
   
        <div className='s1c1' >
          <img src={Logo} className='login-logo' alt = "capitalone logo" />
          <h6 className='s1t1'>Sign in</h6>

          <p className='s1t3'>Username</p>
          <input  onChange={(e)=>setEmail(e.target.value)} type='text' className='s1I1' />


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

         <h6 onClick={()=>navigate("signup")} className='s1t8'>Set Up an Online Access?</h6>
        </div>
        <Footer />
        </div>
    )



}


export default Login;
