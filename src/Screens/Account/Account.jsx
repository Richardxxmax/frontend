import  React,{useState,useEffect,useRef} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import './Account.css'
import logo from "../assets/logo.png"
import { useSelector } from 'react-redux';
import { NumberFormatter } from '../../components/Controllers/NumberFormater';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import creditwiselogo from "../assets/creditwise.png"
import { useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EventIcon from '@mui/icons-material/Event';
import HistoryIcon from '@mui/icons-material/History';
import API from '../../API/API';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';



const  Account = () => {

  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const WindowWith = windowSize.current[0]
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const username =  useSelector((data)=>data.appState.firstName)
  const availableBalance =  useSelector((data)=>data.appState.availableBalance)
  const userID =  useSelector((data)=>data.appState.userID)
  const availableBalanceWhole = availableBalance.split('.')[0];
  const availableBalanceFraction = availableBalance.split('.')[1];
  const [loading,setLoading] = useState(false);
  const [state,setState] = useState([])


  const currentBalance =  useSelector((data)=>data.appState.currentBalance)
  const createdAt =  useSelector((data)=>data.appState.createdAt)
  const currentBalanceWhole = currentBalance.split('.')[0];
  const currentBalanceFraction = currentBalance.split('.')[1];
  
  const creditScore =  useSelector((data)=>data.appState.creditScore)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [accountType,setAccounType] = useState("Available Balance");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dat = [
    {
      id: 1,
      userID: 10,
      amount: '345',
      transactionType: 'card',
      transactionDate: 'December 15th 2024, 8:46:35 pm',
      status: 'pending',
      purpose: 'Grocery',
      receiver: 'CREDIT-TRAVEL REWARD',
      updatedAt: 'December 15th 2024, 8:46:35 pm',
      createdAt: 'December 15th 2024, 8:46:35 pm'
    },
    {
      id: 2,
      userID: 10,
      amount: '6.29',
      transactionType: 'Merchandise',
      transactionDate: 'December 15th 2024, 8:46:35 pm',
      status: 'pending',
      purpose: 'Merchandise',
      receiver: 'Safeway',
      updatedAt: 'December 15th 2024, 8:46:35 pm',
      createdAt: 'December 15th 2024, 8:46:35 pm'
    }
  ]
  

  const updateAccoutType = (text)=>{

          setAccounType(text);
          handleClose();

  }


  const BasicMenu  = ()=> {

  
    return (
      <div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={()=>updateAccoutType("Available Balance")}>Available Balance</MenuItem>
          <MenuItem onClick={()=>updateAccoutType("Current Balance")}>Current Balance</MenuItem>
        </Menu>
      </div>
    );
  }



  const fetchTransactions = async () =>{
        const requestOptions = {
        method: 'POST',
        Accept:'application/json',
        headers: {
               'Content-Type': 'application/json',
           },
        body: JSON.stringify({"userID":`${userID}`})
      };
      
      try {
      
        const response = await fetch(`${API.BASE_URL}/gettransactions`,requestOptions)
        const json = await response.json();
        var data = json
        setState(data);  
        
         
     
      } 
      catch (error) 
      {
        console.error(error);
      }
     
     
  }
  



      useEffect(()=>{
          if(state.status===200){//data received successfully
                setLoading(false);
          }else if(state.status!==202){
            setLoading(true)
          }
        
        },[state]);
  
  if(value===2&&loading===true){
   fetchTransactions(); 
  }


  return (
    <div className='s3c0'>
      
        
        {value===0?
         <div>
                    <div className='s3c1'>
               <img src={logo} alt='capitalone logo' />
               <p>Welcome {username}</p>
        </div>

        <div className='s3c2'>
             <p className='s3p2'>360 Checking ...<span style={{fontSize:8}}>7642</span></p>
             <p className='s3p3'><sup>$</sup>{NumberFormatter(Number(availableBalanceWhole))} <sup style={{fontSize:20}}>{availableBalanceFraction}</sup></p>
             <p className='s3p2'>Available Balance</p>
         
        </div>


      
        <div className='s3c3'>
             <p className='s3p2'>V E N T U R E<sup style={{fontSize:8}}>(R)</sup>  ...<span style={{fontSize:8}}>8292</span></p>
             <p className='s3p3'><sup>$</sup>{NumberFormatter(Number(currentBalanceWhole))}<sup style={{fontSize:20}}>{currentBalanceFraction}</sup></p>
             <p className='s3p2'>Current Balance</p>
        </div>

        <div className='s3c4' onClick={()=>navigate("/signup")}>
            <AddCircleOutlineIcon   style={{color:"rgb(30, 89, 109)",marginRight:10}}/>
            <p>Open a New Account</p>

        </div>

        <div className='s3c5'>
            <img src={creditwiselogo} alt='capitalone logo' />
            <p className='s3p4'>Your Credit Score:</p>
            <div className='s3c6'>
            <p className='s3p5'>{creditScore}</p>
            <div className="vl"></div>
            <div>
                <p className='s3p6'>Good</p>
                <p className='s3p7'>Updated:{createdAt}</p>
            </div>
            </div>

          </div>

          </div>:

          <div>
           {value===1?
           <div>

              { window.location.href = "https://www.capitalone.com/help-center"}

           </div>:


          <div>


           <div className='s3c1A'>
      
    
             {accountType==="Available Balance"?<p className='s3p3A'><sup>$</sup>{NumberFormatter(Number(availableBalanceWhole))} <sup style={{fontSize:40}}>{availableBalanceFraction}</sup></p>:<p className='s3p3A'><sup>$</sup>{NumberFormatter(Number(currentBalance))} <sup style={{fontSize:40}}>{currentBalanceFraction}</sup></p>}
              <div className='s3c3A'>
                  <p className='s3p2A' onClick={handleClick} >{accountType}</p>
                  <KeyboardArrowDownIcon  onClick={handleClick} color='white' style={{color:"white"}} />
                  <BasicMenu />

              </div>
              <hr className="hr"></hr>
              <div className='s3c1A2'>
                 <p className='s3p3A2'><sup>$</sup>{NumberFormatter(Number(1786))} <sup style={{fontSize:20}}>68</sup></p>
                 <p className='s3p3A2'>{NumberFormatter(Number(652))}</p>
              </div>

           
       
           </div>


 
          
           <div className='s3c8'>
                   <div className='s3c9'>
                      <EventIcon style={{color:"black"}} />
                      <p className='s3p8'> No Payment Due</p>
                   </div>
                    <div onClick={()=>navigate("/transfer")}>
                        <p className='s3p9'> PAY BILL</p>
                   </div>
              </div>
          
              <div className='s3c10'>
                   <div className='s3c11'>
                      <HistoryIcon  style={{color:"black"}} />
                      <p className='s3p9'> Transactions</p>
                   </div>
                    <div>
                        <p className='s3p10'>View All</p>
                   </div>
              </div>

               {
                  loading===true&value===2?
                    <div className='s3c12'>
                      <Stack spacing={1}>
                          {/* For variant="text", adjust the height via font-size */}
                         <Skeleton animation={true} variant="rounded" width={WindowWith * 0.91} height={60} />
                         <Skeleton animation={true} variant="rounded" width={WindowWith * 0.91} height={60} />
                         <Skeleton animation={true} variant="rounded" width={WindowWith * 0.91} height={60} />
                         <Skeleton animation={true} variant="rounded" width={WindowWith * 0.91} height={60} />
                         <Skeleton animation={true} variant="rounded" width={WindowWith * 0.91} height={60} />
                         <Skeleton animation={true} variant="rounded" width={WindowWith * 0.91} height={60} />
                      </Stack>
                    </div>:
                     <div>
                       {
                         state.transactions.slice(0, 5).map((data)=>
                          <div className='s3c13'>
                          <div className='s3c14'>
                             <p className={data.status==="pending"?"s3p11":"s3p12"} >{data.receiver}</p>
                             <p className={data.status==="pending"?"s3p11":"s3p13"}>{data.status==="pending"?" ":"-"}${data.amount}</p>
                          </div>
                          <div className='s3c14'>
                             <p className={data.status==="pending"?"s3p11":"s3p11"}>{data.purpose}</p>
                             {data.status==="pending"?<p className={data.status==="pending"?"s3p11":"s3p11"}>{data.status}</p>:<p className={data.status==="pending"?"s3p11":"s3p11"}>{data.createdAt.slice(0,3)} {data.createdAt.slice(16,18)}</p>}
                          </div>
                          </div>
                         )

                       }
                     
                    </div>
              
               }
      

            


          

          

       








          </div>
         }
          </div>
         }














    <Box sx={{ width: "100%" }}>
      <BottomNavigation
         value={value}
         onChange={(event, newValue) => setValue(newValue)}
         sx={{
           position: "fixed",
           bottom: 0,
           left: 0,
           right: 0,
           zIndex: 10, // Optional for layering
         }}
       >
      
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Help" icon={<ContactSupportIcon />} />
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
      </BottomNavigation>
    </Box>
    </div>

  );
}

export default Account;
