import React from 'react';
import 'react-typewriting-effect/dist/index.css';
import Img from '../assets/Capture.JPG';
import FadeIn from 'react-fade-in';
import {useState} from "react";

 

function Header(){
  
    return(
        <div>
            <div className="container-fluid  d-flex justify-content-center  mt-4" style={{minHeight:"70vh"}}>
            <div className="row" style={{display:"flex", width:"100%" , justifyContent:"center", alignItems:"center"}}>
            
              <div className="col-lg-5 header-text" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"start"}}>
                  <FadeIn delay="190">
                      <div class="typewriter" style={{width:"fit-content"}}>
                      <h1 className="font-weight-bold head " style={{color:"#404040", }}>Developer Student Clubs</h1>

                    </div>
                    <br/>
                    <h4 className="" style={{color:"#404040"}}>Pimpri Chinchwad College of Engineering</h4>
                    <br/>
                    <p className="" style={{width:"fit-content"}} >Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. 
                    A community of <span className="text-success font-weight-bold">Developers</span>, <span className="text-danger font-weight-bold">Designers</span> and <span className="text-primary font-weight-bold">Programmers</span> 
                    . By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.

                    </p>
                    <br/>
                    <div className="developer-logo" style={{display:"flex",alignItems:"center"}}>
                    
                    <h4 className="mr-2 mt-1">Powered By</h4>
                    <a href="https://gdg.community.dev/" target="blank"><img alt = "img" src={Img}/></a>
                    </div>
                    </FadeIn>
              </div>
              
              <div className="col-lg-7 pl-5" >
              <FadeIn delay="180">
                <lottie-player className=" " src="https://assets8.lottiefiles.com/packages/lf20_atgjqorh.json"  background="transparent"  speed="1.5"  style={{maxWidth:"100%", height : 'auto'}}  loop  autoplay></lottie-player>
              </FadeIn>
              </div>
            </div>
          </div>
        </div>
    )
}
export default Header;