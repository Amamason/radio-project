import React from 'react';
import image from './radiostarlogo.png';
import {NavLink} from "react-router-dom";

function Header (){
return (
    <React.Fragment>
    <div className="headerContainer">
    <div className='navbuttons'>
    
    <NavLink className ="enter" exact to="/home">Home</NavLink>
    <NavLink className ="homebutton" exact to="/radio">Radio</NavLink>
    <NavLink className ="subscribebutton" exact to="/subscribe">Subscribe</NavLink>
    <NavLink className ="inspirationbutton" exact to="/inspiration">Inspiration</NavLink>
    <NavLink className ="blogbutton" exact to="/blog">Blog</NavLink>
    </div>

    <div className="weblogo">
    <img src={image} alt="" width={300}/>
    </div>

    </div>
    </React.Fragment>
);
}

export default Header;
