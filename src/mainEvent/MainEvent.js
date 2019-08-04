import React from 'react';
import MainInfo from './MainInfo';
import './MainEvent.css';
import Programme from './Programme';

class MainEvent extends React.Component {
  render() {
    return (
      <div className="main-event--wrapper">
        <MainInfo />
        <Programme />
      </div>
    );
  }
}

export default MainEvent;
