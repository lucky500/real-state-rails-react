import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../components/Header/Nav';
import Routes from './routes';

export default class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <div>
        <Nav />
        <Routes />
      </div>
      </BrowserRouter>
    )
  }
}
