import React,{useState,useEffect,useRef} from 'react'
import Logo from "../assets/logo.jpeg"
import "./Home.css"
import Header from '../../Views/Header/Header'
import Footer from '../../Views/Footer/footer'
import { useNavigate } from 'react-router-dom'

import { useDispatch} from 'react-redux';
import page0 from "./p0.png"
import page1 from "./p1.png"
import page2 from "./p2.png"
import page3 from "./p3.png"
import page4 from "./p4.png"


const Home = ()=>{
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const WindowWith = windowSize.current[0]

    const dispatch = useDispatch();
    


    const navigate = useNavigate();


          
        
    return(
        <div>

         <div >
        <img src={page0}  style={{width: WindowWith * 1.0 }} onClick={()=>navigate("/login")} />
        <img src={page1}  style={{width: WindowWith * 1.0 }} />
        <img src={page2}  style={{width: WindowWith * 1.0 }} />
        <img src={page3}  style={{width: WindowWith * 1.0 }} />
        <img src={page4}  style={{width: WindowWith * 1.0 }} />


            
         </div>
        <Footer />
        </div>
    )



}


export default Home;
