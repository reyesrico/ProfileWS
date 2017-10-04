import React, { Component } from 'react';
import Profile from './Profile.js';
import MenuRows from './MenuRows.js';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
          <Profile />
          <MenuRows />
      </div>
    );
  }
}

export default Menu;
