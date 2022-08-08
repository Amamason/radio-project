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
import Homepage from './Homepage';


function App() {
  return (
    <>

    <Router>
    <React.Fragment>
    <Header />

    <Routes>

    <Route className="nav0" path="/home" element={<Homepage />}>
    </Route>
    
    <Route className="nav1" path="/radio" element={<Radio />}>
    </Route>
    
    <Route className="nav2" path="/inspiration" element={<Inspiration />}>
    </Route>
  
    <Route className="nav3" path="/subscribe" element={<Subscribe />}>
    </Route>

    <Route className="nav4" path="/blog" element={<Posts />}>
    </Route>

    </Routes>

    {Location.pathname !== '/blog' && <Footer />}
    </React.Fragment>
    </Router>
    </>
    );

}

export default App;