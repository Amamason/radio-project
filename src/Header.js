import React from 'react';
import image from './radiostarlogo.png';
import {NavLink} from "react-router-dom";

function Header (){
return (
    <React.Fragment>
    
    <div className="weblogo">
    <img src={image} alt="" width={300}/>
    </div>

    <div className='navbuttons'>
    <NavLink exact to="/">Home</NavLink>
    <NavLink exact to="/subscribe">Subscribe</NavLink>
    <NavLink exact to="/inspiration">Inspiration</NavLink>
    </div>

    </React.Fragment>
);
}

export default Header;
