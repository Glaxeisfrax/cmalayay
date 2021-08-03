// hook
// import { useState } from 'react';
// import logo from './logo.svg';
import { Route } from 'react-router';
import './App.css';
import CMMSGetName from './components/CMMSGetName';
import CMMSApp from './components/CMMSApp';
import {BrowserRouter, Link} from 'react-router-dom';



function App() {
 

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <h1>CMMS Apps</h1>
        <Link className ="App-link" to="/CMMSGetName">Greet</Link>
        <Link className ="App-link" to="/CMMSApp">CMMS Work Order</Link>
         <Route path= "/CMMSGetName">
         <CMMSGetName/>
         </Route>
         <Route path= "/CMMSApp">
         <CMMSApp/>
         </Route>
         </BrowserRouter>
      </header>
    </div>
  );
}

export default App;