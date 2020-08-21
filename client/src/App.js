
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/home/Home.jsx';
import AboutUs from './screens/aboutUs/AboutUs.jsx';
import Donate from './screens/donate/Donate.jsx';
import NotFound from './screens/notFound/NotFound.jsx';
import './App.css';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/aboutus' component={AboutUs} />
        <Route exact path='/donate' component={Donate} />
        <Route exact path='/404'component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
