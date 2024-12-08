import React from "react"
import { Route , Routes } from 'react-router-dom'
import Login from "./Screens/Login/Login";

const App = () => {
  return (
      <Routes>
       <Route path="/" index element={<Login />} />
      
    
      </Routes>
  );
}

export default App;
