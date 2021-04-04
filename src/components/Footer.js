import React from 'react';
import {Link} from 'react-router-dom';
import Img from '../assets/logos/dscpccoe.png';

const Footer = ()=>{
    return(
        
            <div className="footer pt-2 pl-1 mb-n5" style={{backgroundColor:"#f2f2f2", minHeight:"120px", display:"flex", flexDirection:"column", justifyContent:"center"}} >
                    <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
                        <div className="image" style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                            <img src={Img} alt="im" />
                            <h6 className=" ml-2 font-weight-lighter" style={{fontWeight:"lighter !important",color:"gray", fontFamily:""}}><i style={{fontSize:"14px", fontWeight:"lighter"}} class="mt-3 far fa-copyright"></i> DSC PCCoE 2020</h6>

                            
                        </div>
                        <div className="social-media-links" style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
                            
                                <div className="my-3">
                                <a href="https://www.facebook.com/dscpccoe/" target="blank" style={{fontSize:"28px", color:"#999999"}} className="mx-4 social-links"><i className="fab fa-facebook"></i></a>
                                <a href="https://github.com/dscpccoe" target="blank" style={{fontSize:"28px", color:"#999999"}} className="mx-4 social-links"><i className="fab fa-github"></i></a>
                                <a href="https://www.instagram.com/dscpccoe/?hl=en" target="blank" style={{fontSize:"28px", color:"#999999"}} className="mx-4 social-links"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/company/dsc-pccoe/" target="blank" style={{fontSize:"28px", color:"#999999"}} className="mx-4 social-links"><i className="fab fa-linkedin"></i></a>
                                <a href="https://twitter.com/dscpccoe?lang=en" target="blank" style={{fontSize:"28px", color:"#999999"}} className="mx-4 social-links"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.youtube.com/channel/UCSCRtLfcsJIPi2wMu9my5-g" target="blank" style={{fontSize:"28px", color:"#999999"}} className="mx-4 social-links"><i className="fab fa-youtube"></i></a>
                                </div>
                                <h6 className="ml-4">Made with <span>&#128151;</span> by <Link to="/team">Frontend Team</Link></h6>

                        </div>
                        
                    </div>
            </div>
    
    )
}
export default Footer;