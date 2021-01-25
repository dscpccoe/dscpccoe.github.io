import React from 'react';
import '../css/Demo.css';
import ReactPlayer from 'react-player'

// Render a YouTube video player

function Connect() {


    return (
        <div className="about" style={{minHeight:"75vh"}}>
            <ReactPlayer className="about-video" style={{maxWidth:"100%"}} url='https://www.youtube.com/watch?v=kfDKxzQ_fRQ' />
        <div className="inner-section border">
            <h1 style={{fontSize:"30px"}}>Join our community!</h1>
            <p className="text" style={{fontSize:"20px"}}>
            Be part of the Developer Students Club PCCOE community where we create impact together!
            </p>
            <div className="skills" >
                <a target="blank" href="https://dsc.community.dev/pimpri-chinchwad-college-of-engineering/">Join Us</a>
            </div>
            
        </div>
    </div>
        );
}

export default Connect;
