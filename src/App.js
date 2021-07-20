import React from 'react';
import Navbar from './mobile/components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './mobile/pages/Home';
import Login from './mobile/pages/Login';

function App() {
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
}

export default App;
