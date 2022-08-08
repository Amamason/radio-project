import React from 'react';
import image from "../src/img/homepageimg.png";
import { Link } from 'react-router-dom';


function Homepage(){


    return(
        <>
        <div className='homeContainer'>
           <div >
            <Link to="/Radio"><button className='enterButton'>ENTER</button>
            </Link>
          </div>
        </div>
        
        <div className="homeBackground" style={{ backgroundImage: `url(${image})`}}></div>
        </>
    )
}

export default Homepage;


