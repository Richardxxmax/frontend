import React from "react"
import { Route , Routes } from 'react-router-dom'
import Login from "./Screens/Login/Login";
import SignUp from "./Screens/Signup/SignUp";
import Account from "./Screens/Account/Account";
import Transfer from "./Screens/Transfer/Transfer";

const App = () => {
  return (
      <Routes>
       <Route path="/" index element={<Login />} />
       <Route path="/signup" index element={<SignUp />} />
       <Route path="/account" index element={<Account />} />
       <Route path="/transfer" index element={<Transfer />} />
      
    
      </Routes>
  );
}

export default App;
