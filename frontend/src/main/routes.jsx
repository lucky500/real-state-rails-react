import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../components/About/About';
import Login from '../components/Login/Login';
import Properties from '../components/Properties/Properties';

export default props => (  
    <div>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Properties} />
      </Switch>
    </div>
  
)