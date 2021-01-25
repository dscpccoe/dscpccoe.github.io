import React from 'react';

import {Link} from 'react-router-dom';
import Image from '../assets/logos/dsclogo.jpg';

export const itemClick = (e) => {
    console.log("clicked");
    // var a = new Navbar();
    
  }
  
  export const menuData = [
    {
      color: "#F4B400",
      icon: "fa-paper-plane",
      content : "Connect",
      href:"/connect",
      click: itemClick
    },{
      color: "#DB4437",
      icon: "fa-chart-bar",
      content : 'Projects',
      href : "/projects",
      click: itemClick
    },{
      color: "#F4B400",
      icon: "fa-users",
      content : 'The Team',
      href : "/team",
      click: itemClick
    },{
      color: "#0F9D58",
      icon: "fa-tags",
      content : 'Events',
      href : '/events',
      click: itemClick
    },{
      color: "#4285F4",
      icon: "fa-home",
      content : 'Home',
      href:"/",
      click: itemClick
    },
    {
      color: "#0F9D58",
      icon: "fa-play-circle",
      content : 'Videos',
      href : "/videos",
      click: itemClick
    },
  ];

  
class Navbar extends React.Component {
    constructor(props) {
      super(props);
  
  this.getInitialState = this.getInitialState.bind(this);
  this.componentWillMount = this.componentWillMount.bind(this);
  this.makeMenu = this.makeMenu.bind(this);
  this.toggleMenu = this.toggleMenu.bind(this);
  this.animateButtons = this.animateButtons.bind(this);
      
  }
  
  
    getInitialState () {
      return {
        menuOpen: false,
      };
    }
    
    componentWillMount () {
      this.makeMenu(menuData);
    }
    makeMenu (menuConfig) {
      const angle = 360 / menuConfig.length;
      let rotation = 0;
      let menuItems = [];
      
      menuConfig.forEach(({
        color,
        content,
        href, 
        icon, 
        click
      }) => {
        menuItems.push({
          color,
          icon,
          content,
          href,
          click,
          rotation,
          angle,
          show: false
        });
        rotation += angle;
      }); 
      
      this.setState({
        menuItems: menuItems
      });
    }
  
    toggleMenu () {
  
      this.setState({
        menuOpen: !this.state.menuOpen
      });
    }
  
    animateButtons () {
      const length = this.state.menuItems.length;
      
      const stagger = (i) => {
        if (i < length) {
            setTimeout(() => {
            let items = this.state.menuItems;
            let showing = this.state.menuItems[i].show;
            
            this.setState({
              menuItems: [
                ...items.slice(0, i),
                Object.assign({}, items[i], {
                  show: !showing
                }),
                ...items.slice(i + 1)
              ]
            });
            
            stagger(i + 1);
            
          },60);
        }
      };
      
      stagger(0); 
    }
  
    render() {
      
      return (
        <div className="">
          
          <MenuToggle 
            
            toggle={this.toggleMenu}
            open={this.state.menuOpen}
            animateButtons={this.animateButtons}
          />
          
          
          
          <Menu
            size={16}
            items={this.state.menuItems} 
            open={this.state.menuOpen}
            toggle = {this.toggleMenu}
            animateButtons = {this.animateButtons}
          />
        
          <div className="logo-image pl-4 pt-1 text-secondary" style={{display:"flex", flexDirection:"row"}}>
          <Link to="/" style={{textDecoration:"none"}}><img src={Image} className="mt-2" style={{maxWidth:"220px"}} alt="img"/></Link>
          
          <div className="mx-3 mt-4 ">
          
          
          </div>
            
          </div>
          
          </div>
      )}
}

const Menu = ({
    size, 
    items, 
    toggle, 
    open,
    animateButtons
  }) => (
    <div className={open 
          ? "menu-wrapper-open" 
          : "menu-wrapper-closed"}
    >
      <div className={"menu-background"}>
        <MenuItems
          size={size}
          items={items} 
          open={open}
          toggle={toggle}
          animateButtons={animateButtons}
        />
      </div>
    </div>
  );
  
  const MenuItems = ({
    size, 
    items, 
    open,
    toggle,
    animateButtons
  }) => {
    const buttons = items.map((item) => {
      const styling = {
        transform:
          `rotate(${item.rotation}deg) 
           translate(${size/2}em) 
           rotate(${-(item.rotation)}deg)`,
        backgroundColor: item.color,
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center"
      };
      
      return (
        <Link to={item.href} style={{textDecoration:"none"}}>

        <div 
          className={item.show 
            ? "menu-item item-show" 
            : "menu-item item-hide"}
          style={styling}
          onClick={()=>{
            toggle();
            animateButtons();
          }}
          
        >
          <i style={{display:"block"}} className={"fa " + item.icon}
             aria-hidden="true"
          ></i>
          <p  className="text-white content">{item.content}</p>
        </div>
        </Link>
      );
    });
    
    return (
      <div 
        className={open 
          ? "button-bg animate-menu" 
          : "button-bg"}
      > {buttons}
      </div>
    ); 
  }
  
  const MenuToggle = ({
    toggle, 
    open, 
    animateButtons
  }) => (
    <button 
      className={open 
        ? "menu-toggle toggle-open" 
        : "menu-toggle toggle-closed"}
      onClick={() => {
        toggle(); 
        setTimeout(
          animateButtons, 
          120
        );
      }}
    > <i className={open 
           ? "fa fa-times"
           : "fa fa-bars"}
         
      ></i>
    </button>
  );
  export default Navbar;