import React from 'react';
import './App.css';
import Home from './pages/home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/singleRoom';
import Error from './pages/error';
import Navbar  from "./components/Navbar";
import {Route , Switch} from 'react-router-dom';


function App() {
  return (
    <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Rooms" component={Rooms}/>
            <Route exact path="/rooms/:slug" component={SingleRoom}/>
            <Route component={Error}/>
        </Switch>
    </>
  );
}

export default App;
