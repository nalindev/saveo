import React from 'react';
import Navbar from './mobile/components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './mobile/pages/Home';
import Login from './mobile/pages/Login';
import Offer from './mobile/pages/Offer';
import Pastorder from './mobile/pages/Pastorder';
import Footer from './mobile/components/Footer';
import {isMobile} from 'react-device-detect';

function App() {
  if(isMobile) {
    return (
      <>
      <Router>
        <Navbar />
        <Switch>
        <Route path='/saveo' exact component={Home}/>
        <Route path='/comapnies' component={Login}/>
        <Route path='/offer' component={Offer}/>
        <Route path="/pastorder" component={Pastorder}/>
      </Switch>
      <Footer />
      </Router>
      </>
    );
  }else{
    return <h1>Laptop view is currently not Supported</h1>;
  }
}

export default App;
