import React,{useState,useEffect,useRef} from 'react'
import Logo from "../assets/logo.jpeg"
import "./Home.css"
import Header from '../../Views/Header/Header'
import Footer from '../../Views/Footer/footer'
import { useNavigate } from 'react-router-dom'

import { useDispatch} from 'react-redux';
import page1 from "./p1.png"


const Home = ()=>{
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const WindowWith = windowSize.current[0]

    const dispatch = useDispatch();
    


    const navigate = useNavigate();


          
        
    return(
        <div>
        <Header />
   
         <div >
        <img src={page1}  style={{width: WindowWith * 1.0 }} />

            
         </div>
        <Footer />
        </div>
    )



}


export default Home;
