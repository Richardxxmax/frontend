import  React,{useState,useEffect} from 'react';
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

const  Account = () => {
  const [value, setValue] = useState(0);

  const username =  useSelector((data)=>data.appState.firstName)
  const availableBalance =  useSelector((data)=>data.appState.availableBalance)
  const availableBalanceWhole = availableBalance.split('.')[0];
  const availableBalanceFraction = availableBalance.split('.')[1];


  const currentBalance =  useSelector((data)=>data.appState.currentBalance)
  const currentBalanceWhole = currentBalance.split('.')[0];
  const currentBalanceFraction = currentBalance.split('.')[1];
  return (
    <div className='s3c0'>

        <div className='s3c1'>
               <img src={logo} alt='capitalone logo' />
               <p>Welcome {username}</p>
        </div>

        <div className='s3c2'>
             <p className='s3p2'>360 Checking ...<span style={{fontSize:8}}>7642</span></p>
             <p className='s3p3'><sup>$</sup>{NumberFormatter(Number(availableBalanceWhole))} <sup style={{fontSize:20}}>{availableBalanceFraction}</sup></p>
             <p className='s3p2'>Available Balance{availableBalance}</p>
        </div>


      
        <div className='s3c3'>
             <p className='s3p2'>V E N T U R E<sup style={{fontSize:8}}>(R)</sup>  ...<span style={{fontSize:8}}>8292</span></p>
             <p className='s3p3'><sup>$</sup>{NumberFormatter(Number(currentBalanceWhole))}<sup style={{fontSize:20}}>{currentBalanceFraction}</sup></p>
             <p className='s3p2'>Current Balance</p>
        </div>

        <div className='s3c4'>
            <AddCircleOutlineIcon   style={{color:"rgb(30, 89, 109)",marginRight:10}}/>
            <p>Open a New Account</p>

        </div>












    <Box sx={{ width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
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