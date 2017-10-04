import React, { Component } from 'react';
import pic from './logo.svg';
import fbpic from './logo.svg';
import twpic from './logo.svg';
import empic from './logo.svg';

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
          <div className="PictureBlock">
            <img src={pic} className="Picture" alt="Picture2" />
            <h1 className="App-title">Carlos Reyes-Rico</h1>
          </div>
          <div className="Contact">
            <img src={fbpic} className="ContactPicture" alt="Facebook" />
            <img src={twpic} className="ContactPicture" alt="Twitter" />
            <img src={empic} className="ContactPicture" alt="Email" />              
          </div>
      </div>
    );
  }
}

export default Profile;
