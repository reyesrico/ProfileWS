import React, { Component } from 'react';
import MenuRow from './MenuRow.js';

class MenuRows extends Component {
  render() {
    return (
      <div className="MenuRows">
              <MenuRow name="WorkExperience"/>
              <MenuRow name="Education"/>
              <MenuRow name="Portfolio"/>
              <MenuRow name="Awards"/>
              <MenuRow name="Publications"/>
      </div>
    );
  }
}

export default MenuRows;
