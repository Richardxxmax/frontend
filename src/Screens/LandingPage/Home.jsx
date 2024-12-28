import React,{useState,useEffect} from 'react'
import Logo from "../assets/logo.jpeg"
import "./Home.css"
import Header from '../../Views/Header/Header'
import Footer from '../../Views/Footer/footer'
import { useNavigate } from 'react-router-dom'

import { useDispatch} from 'react-redux';
import page1 from "./p1.png"


const Home = ()=>{

    const dispatch = useDispatch();
    


    const navigate = useNavigate();


          
        
    return(
        <div>
        <Header />
   
         <div >
        <img src={page1}  className='page1' />

            
         </div>
        <Footer />
        </div>
    )



}


export default Home;
