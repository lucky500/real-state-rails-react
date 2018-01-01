import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './Nav.css';

class Nav extends Component {
  render(){
    return (
      <Menu>
        <Menu.Menu>
          <Menu.Item>
            Harvard Realty
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
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