import React,{useState,useEffect} from 'react'
import Logo from "../assets/logo.jpeg"
import "./SignUp.css"
import Header from '../../Views/Header/Header'
import Footer from '../../Views/Footer/footer'
import Box from '@mui/material/Box';

import { SuccessAlert,WarningAlert,ErrorAlert } from '../../components/Alerts/Alerts'

import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';

import { useNavigate } from "react-router-dom";
import API from "../../API/API";
import { useDispatch } from "react-redux";


const SignUp = ()=>{


    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [SSN,setSSN] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("ConfirmedPassword");
    const [DOB,setDOB] = useState("");
    const [phone,setPhone] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [mismatch,setMismatch] = useState(0)
    const [validation,setValidation]= useState(false)
    const [emailExisted,setEmailExisted] = useState(0)
    const [invalidFirstName,setInvalideFirstName] = useState(0)
    const [invalidLastName,setInvalideLastName] = useState(0)
    const [invalidEmail,setInvalideEmail] = useState(0)
    const [invalidSSN,setInvalidSSN] = useState(0)
    const [invalidDOB,setInvalidDOB] = useState(0)
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


    const SignIn  = async () =>{

        if(firstName===""){
            setValidation(false);
            setInvalideFirstName(1);
        }else {
           setInvalideFirstName(0);
           setValidation(true);
        }
        if(lastName===""){
            setValidation(false);
            setInvalideLastName(1);
        } else {
           setInvalideLastName(0);
           setValidation(true);
        }
        if(email===""){
            setValidation(false);
            setInvalideEmail(1);
        }else {
            setInvalideEmail(0);
            setValidation(true);
        }
        if(SSN===""){
            setValidation(false);
            setInvalidSSN(1);
        }else {
            setInvalidSSN(0);
            setValidation(true);
        }
        if(DOB===""){
            setValidation(false);
            setInvalidDOB(1);
        }else {
            setInvalidDOB(0);
            setValidation(true);
        }
        if(password!==confirmPassword){
            setValidation(false);
            setMismatch(1)
        }else if(password === confirmPassword){
           setMismatch(0)
           setValidation(true);
        }
       
    
       if(validation===true)
      {
        setLoading(true)
        const requestOptions = {
          method: 'POST',
          Accept:'application/json',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({"firstName":`${firstName}`,"lastName":`${lastName}`,"email":`${email}`,"password":`${password}`,"phone":`${phone}`,"DOB":`${DOB}`,"SSN":`${SSN}`})
        };
        
        try {
        
          const response = await fetch(`${API.BASE_URL}/createaccount`,requestOptions)
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
        if(state.status===200)
        {
         setServerStatus(state.status)
         setServerMessage(state.message)
         setEmailExisted(0)
         //dispatch(setSuccessMessage("Account Created Successfully"))
         setTimeout(()=>{
           navigate("/")
         },4000)

        }else if(state.status===403){
            setEmailExisted(1)
            setServerStatus(state.status)
            setServerMessage(state.message)
            setLoading(false)
        }else if(state.status===404){
            setEmailExisted(1)
            setServerStatus(state.status)
            setServerMessage(state.message)
            setLoading(false)
        }else if(state.status===500){
            setEmailExisted(1)
            setServerStatus(state.status)
            setServerMessage(state.message)
            setLoading(false)
        }
     
  },[state]);

    return(
        <div>
        <Header />
        {serverStatus===200?<SuccessAlert text={serverMessage} />:<div></div>}
        {serverStatus===403?<WarningAlert text={serverMessage} />:<div></div>}
        {serverStatus===404?<WarningAlert text={serverMessage} />:<div></div>}
        {serverStatus===500?<ErrorAlert text={serverMessage} />:<div></div>}
        
        <div className='s1c1' >
          <img src={Logo} className='login-logo' alt = "capitalone logo" />
          <h6 className='s1t1'>Sign Up</h6>

          <p className='s1t3'>First Name</p>
          <input  onChange={(e)=>setFirstName(e.target.value)} type='text' className='s1I1' />
          <p style={{color:"red",fontWeight:"bold",fontSize:12,margin:0}}>{invalidFirstName===1?<p style={{color:"red",fontWeight:"bold",fontSize:12,margin:0}}>Please enter your firstname</p>:""}</p>
         
          <p className='s1t3'>Last Name</p>
          <input  onChange={(e)=>setLastName(e.target.value)} type='text' className='s1I1' />
          <p style={{color:"red",fontWeight:"bold",fontSize:12,margin:0}}>{invalidLastName===1?<p style={{color:"red",fontWeight:"bold",fontSize:12,margin:0}}>Please enter your lastname</p>:""}</p>

          <p className='s1t3A'>Email(User Name)</p>
          <input  onChange={(e)=>setEmail(e.target.value)} type='text' className='s1I1' />
          <p style={{color:"red",fontWeight:"bold",fontSize:12,margin:0}}>{invalidEmail===1?<p style={{color:"red",fontWeight:"bold",fontSize:12,margin:0}}>Please enter your email</p>:""}</p>

          
          <p className='s1t3B'>Social Security Number(SSN)</p>
          <input  onChange={(e)=>setSSN(e.target.value)} type='text' className='s1I1' />
          <p style={{color:"red",fontWeight:"bold",fontSize:12,margin:0}}>{invalidSSN===1?<p style={{color:"red",fontWeight:"bold",fontSize:12,margin:0}}>Please enter your SSN</p>:""}</p>

            
          <p className='s1t3A'>Phone (Optional)</p>
          <input  onChange={(e)=>setPhone(e.target.value)} type='text' className='s1I1' />

   
          <p className='s1t3A'>Date of Birth(DOB)</p>
          <input  onChange={(e)=>setDOB(e.target.value)} type='text' className='s1I1' />
          <p style={{color:"red",fontWeight:"bold",fontSize:12,margin:0}}>{invalidDOB===1?<p style={{color:"red",fontWeight:"bold",fontSize:12,margin:0}}>Please enter your Date of birth</p>:""}</p>


          <p className='s1t4'>Password</p>
          <input onChange={(e)=>setPassword(e.target.value)} type='password' className='s1I2' />
          <p style={{color:"red",fontWeight:"bold",fontSize:12,margin:0}}>{mismatch===1?<p style={{color:"red",fontWeight:"bold",fontSize:12,margin:0}}>password mismatch</p>:""}</p>

          <p className='s1t3A'>Confirm Password</p>
          <input onChange={(e)=>setConfirmPassword(e.target.value)} type='password' className='s1I2' />
          <p style={{color:"red",fontWeight:"bold",fontSize:12,margin:0}}>{mismatch===1?<p style={{color:"red",fontWeight:"bold",fontSize:12,margin:0}}>password mismatch</p>:""}</p>

         <div className='s1c2'> 
         <input className='s1I3' type="checkbox"  />
         <p className='s1t5'>Keep Me Signed In</p>
         </div>

         <div onClick={()=>SignIn()} className='s1c3'>
            {isLoading?<FacebookCircularProgress />:<p className='s1t6'>Sign Up</p>}
         </div>

        
 
         <h6 onClick = {()=>navigate("/")}className='s1t7'>Already have an account? Sign In</h6>
       
         
     
        </div>
        {serverStatus===200?<SuccessAlert text={serverMessage} />:<div></div>}
        {serverStatus===403?<WarningAlert text={serverMessage} />:<div></div>}
        {serverStatus===404?<WarningAlert text={serverMessage} />:<div></div>}
        {serverStatus===500?<ErrorAlert text={serverMessage} />:<div></div>}
        <Footer />
        </div>
    )



}


export default SignUp;
