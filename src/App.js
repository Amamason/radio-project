import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Radio from './Radio';
import "react-h5-audio-player/lib/styles.css";
import Header from "./Header"
import Subscribe from './Subscribe';
import Inspiration from './Inspiration';
import Footer from './Footer';
import Posts from './Posts';


function App() {
  return (
    <>

    <Router>
    <React.Fragment>
    <Header />

    <Routes>


    <Route className="nav1" exact path="/" element={<Radio />}>
    </Route>
    
    <Route className="nav2" exact path="/inspiration" element={<Inspiration />}>
    </Route>
  
    <Route className="nav3" exact path="/subscribe" element={<Subscribe />}>
    </Route>

    <Route className="nav4" exact path="/blog" element={<Posts />}>
    </Route>

    </Routes>
  
    <Footer />
    </React.Fragment>
    </Router>
    </>
    );

}

export default App;