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
import page5 from "./p5.png"
import page6 from "./p6.png"
import page7 from "./p7.png"



const Home = ()=>{
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const WindowWith = windowSize.current[0]

    const dispatch = useDispatch();
    


    const navigate = useNavigate();


          
        
    return(
        <div>

         <div  className='a' >
        <img src={page0}  style={{width: WindowWith * 1.0 }} onClick={()=>navigate("/login")} />
        <img src={page1}  style={{width: WindowWith * 1.0 }} />
        <img src={page2}  style={{width: WindowWith * 1.0 }} />
        <img src={page3}  style={{width: WindowWith * 1.0 }} />
        <img src={page4}  style={{width: WindowWith * 1.0 }} />
        <img src={page5}  style={{width: WindowWith * 1.0 }} />
        <img src={page6}  style={{width: WindowWith * 1.0 }} />
        <img src={page7}  style={{width: WindowWith * 1.0 }} />


            
         </div>
        <Footer />
        </div>
    )



}


export default Home;
