import React from 'react';
import { useState, useEffect } from 'react';

import './App.css';
import '../src/css/main.scss';
import '../src/css/loading.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
// import About from './components/AboutUs';
import Team from './components/Team';
import Home from './components/Home';
import Blog from './components/main';
import Footer from './components/Footer';
import Videos from './components/Videos';
import Connect from './components/Connect';
import Events from './components/Events';


function AllComponents(props){
  return(
    <div>
        <Navbar/>
      <Switch>
      
      
      <Route exact path="/team" component={Team} />
      <Route exact path="/projects" component={Blog}/>
      <Route exact path="/events" component = {Events}/>
      <Route exact path="/videos" component = {Videos}/>
      <Route exact path="/connect" component = {Connect}/>
      <Route exact path="/" component={Home} />
      </Switch>
      <Footer/>
    </div>
  );
}

function App() {
  const [ spinner, setSpinner ] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000)
    console.log("done");
  }, []);

  return(
    <div >
      {(() => {
        if (spinner) {
          return (
            <div style={{minHeight:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
              <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_vaWAER.json"  background="transparent"  speed="0.5"  style={{width:"300px", height:"300px"}}  loop autoplay></lottie-player>
            </div>
          )
        }  else {
          return (
            <AllComponents/>
          )
        }
      })()}
      
      
    </div>
  )
}
// example click handler for menu items


export default App;
