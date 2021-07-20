import React from 'react';
import Navbar from './mobile/components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './mobile/pages/Home';
import Login from './mobile/pages/Login';
import {isMobile} from 'react-device-detect';

function App() {
  if(isMobile) {
    return (
      <>
      <Router>
        <Navbar />
        <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/login' component={Login}/>
      </Switch>
      </Router>
      </>
    );
  }else{
    return <h1>Laptop view is currently not Supported</h1>;
  }
}

export default App;
