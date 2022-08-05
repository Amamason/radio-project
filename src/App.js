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


function App() {
  return (
    <>

    <Router>
    <React.Fragment>
    <Header />

    <Routes>


    <Route exact path="/" element={<Radio />}>
    </Route>
    
    <Route exact path="/inspiration" element={<Inspiration />}>
    </Route>
  
    <Route exact path="/subscribe" element={<Subscribe />}>
    </Route>

    </Routes>
  
    <Footer />
    </React.Fragment>
    </Router>
    </>
    );

}

export default App;

/*
return (
    <Router>
      <Fragment>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<Home/>}/>
          </Route>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </Fragment>
    </Router>
    
  );










----------------------
<Router>
  <Header />
  <Routes>
  <Route exact path="/">
  <Radio />
  </Route>
  
  <Route exact path="/inspiration">
  <Inspiration />
  </Route>

  <Route exact path="/subscribe">
  <Subscribe />
  </Route>
  </Routes>

  <Footer />
  
  </Router>
  
  )


  const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
  */
