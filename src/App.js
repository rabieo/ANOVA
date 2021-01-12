import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import Signin from './components/auth/Signin'
import CreateNews from './components/Dashboard/CreateNews'
import TutorialDashboard from './components/tutorial/TutorialDashboard'
import CreateTutorial from './components/tutorial/CreateTutorial'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/Signin' component={Signin} />
          <Route path='/createNews' component={CreateNews} />
          <Route path='/Tutorials' component={TutorialDashboard} />
          <Route path='/createTutorial' component={CreateTutorial} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
