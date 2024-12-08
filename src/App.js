import React from "react"
import { Route , Routes } from 'react-router-dom'
import Login from "./Screens/Login/Login";
import SignUp from "./Screens/Signup/SignUp";

const App = () => {
  return (
      <Routes>
       <Route path="/" index element={<Login />} />
       <Route path="/signup" index element={<SignUp />} />
      
    
      </Routes>
  );
}

export default App;
