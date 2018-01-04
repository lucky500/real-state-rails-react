import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render(){
    return (
      <Menu>
        <Menu.Menu>
          <Menu.Item as={NavLink} to="/">
            Realty
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item as={NavLink} to="/about">
            About
          </Menu.Item>
          <Menu.Item>
            Sign Up
          </Menu.Item>
          <Menu.Item>
            Login
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Nav;