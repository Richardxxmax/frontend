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

  return (
    <div className='s3c0'>

        <div className='s3c1'>
               <img src={logo} alt='capitalone logo' />
               <p>Welcome {username}</p>
        </div>

        <div className='s3c2'>
             <p className='s3p2'>360 Checking ...<span style={{fontSize:8}}>7642</span></p>
             <p className='s3p3'><sup>$</sup>{NumberFormatter(2145)} <sup style={{fontSize:20}}>05</sup></p>
             <p className='s3p2'>Available Balance</p>
        </div>


      
        <div className='s3c3'>
             <p className='s3p2'>V E N T U R E<sup style={{fontSize:8}}>(R)</sup>  ...<span style={{fontSize:8}}>8292</span></p>
             <p className='s3p3'><sup>$</sup>873 <sup style={{fontSize:20}}>33</sup></p>
             <p className='s3p2'>Current Balance</p>
        </div>

        <div className='s3c4'>
            <AddCircleOutlineIcon   style={{color:"rgb(30, 89, 109)"}}/>
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
