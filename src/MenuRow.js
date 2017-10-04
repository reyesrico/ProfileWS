import React, { Component } from 'react';

class MenuRow extends Component {
  render() {
    return (
      <div className="MenuRow">
          <span>{this.props.name}</span>
      </div>
    );
  }
}

export default MenuRow;
