import React from 'react';
import MainInfo from './MainInfo';
import './MainEvent.css';
import Program from './Program';

class MainEvent extends React.Component {
  render() {
    return (
      <div className="main-event--wrapper">
        <MainInfo />
        <Program />
      </div>
    );
  }
}

export default MainEvent;
