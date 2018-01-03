import React, { Component } from 'react';
import Nav from '../components/Header/Nav';
import Routes from './routes';

export default class App extends Component {
  render(){
    return(
      <div>
        <Nav />
        <Routes />
      </div>
    )
  }
}
