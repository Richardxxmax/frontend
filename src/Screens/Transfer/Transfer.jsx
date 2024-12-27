import React,{useState,useEffect} from 'react'
import Logo from "../assets/logo.jpeg"
import "./Transfer.css"
import Header from '../../Views/Header/Header'
import Footer from '../../Views/Footer/footer'
import { useNavigate } from 'react-router-dom'
import { SuccessAlert,WarningAlert,ErrorAlert } from '../../components/Alerts/Alerts'
import CircularProgress, {
    circularProgressClasses,
  } from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import API from "../../API/API";
import { useDispatch} from 'react-redux';
import { setFirstName,setLastName,setID,setIsLoggedIn,setIsLoggedOut,SetEmail,SetAdmin,setToken,setCreditScore,setCurrentBalance,setAvailableBalance,setCreatedAt } from "../../Redux/Reducers/appState";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
const Transfer = ()=>{

    const dispatch = useDispatch();
    const [email,setEmail] = useState("")
    const [amount,setAmount] = useState("")
    const [isLoading, setLoading] = useState(false);
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
      
      

    const TransferFunds = async ()=> {
 
           
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
                body: JSON.stringify({"email":`${email}`,"amount":`${amount}`})
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
        if(state.status===200){//Login successfully
              const {id,email,firstName,lastName,isAdmin} = state.user
              const {creditScore,currentBalance,availableBalance,createdAt} = state.account
              setLoading(false)
            dispatch(setAvailableBalance(availableBalance))
            dispatch(setCurrentBalance(currentBalance))
            dispatch(setCreditScore(creditScore))
             dispatch(setToken(state.token))
             dispatch(setCreatedAt(createdAt))
             dispatch(setIsLoggedIn(true))
             dispatch(SetEmail(email))
             dispatch(setFirstName(firstName))
             dispatch(setLastName(lastName))
             dispatch(SetAdmin(isAdmin))
             dispatch(setIsLoggedOut(false)) //Prevent double login
             dispatch(setID(id))
             setServerStatus(state.status)
             setServerMessage(state.message)
             setEmailExisted(0)
             setTimeout(()=>{
               navigate("/account")
            },1000)
       
            
            }else {//Incorrect password
              setServerStatus(state.status)
              setServerMessage(state.message)
              setLoading(false)
              
            }
  },[state]);


    return(
        <div>
        <Header />
        {serverStatus===200?<SuccessAlert text={serverMessage} />:<div></div>}
        {serverStatus===401?<WarningAlert text={serverMessage} />:<div></div>}
        {serverStatus===404?<WarningAlert text={serverMessage} />:<div></div>}
        {serverStatus===406?<WarningAlert text={serverMessage} />:<div></div>}
        {serverStatus===500?<ErrorAlert text={serverMessage} />:<div></div>}

        <div className='s4c1' >
        
          <MonetizationOnIcon className='logo' />
          <h6 className='s4t1'>Transfer Money</h6>

          <p className='s4t3'>Transfer To</p>
          <input  onChange={(e)=>setEmail(e.target.value)} type='text' className='s1I1' />

          <p className='s4t3'>Frequency </p>
          <input  onChange={(e)=>setEmail(e.target.value)} type='text' className='s1I1' />
           

          <p className='s4t9'>Transfer Date<ErrorOutlineIcon className='s4t9B' /></p>
          <input onChange={(e)=>setAmount(e.target.value)} type='date' className='s1I2' />

          <p className='s4t4'>Amount($)</p>
          <input onChange={(e)=>setAmount(e.target.value)} type='number' className='s1I2' />

         <div className='s4c2'> 
         <p className='s4t5'> + Add a memo</p>
         </div>


         <div onClick={()=>TransferFunds()} className='s4c3'>
            {isLoading?<FacebookCircularProgress />:<p className='s4t6'>Transfer</p>}
         </div>
 
         <p className='s4t7'>By clicking the "Transfer" button, I authorize Capital</p>
         <p className='s4t7'>One to transfer my money as indicated</p>
        </div>

        {serverStatus===200?<SuccessAlert text={serverMessage} />:<div></div>}
        {serverStatus===401?<WarningAlert text={serverMessage} />:<div></div>}
        {serverStatus===404?<WarningAlert text={serverMessage} />:<div></div>}
        {serverStatus===406?<WarningAlert text={serverMessage} />:<div></div>}
        {serverStatus===500?<ErrorAlert text={serverMessage} />:<div></div>}
        <Footer />
        </div>
    )



}


export default Transfer;
