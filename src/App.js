import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import Newsdetails from './components/Dashboard/Newsdetails'
import Signin from './components/auth/Signin'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/Dashboard/:id' component={Newsdetails} />
          <Route path='/Signin' component={Signin} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
