import React from 'react';
import MainInfo from './MainInfo';
import './MainEvent.css';
import Program from './Program';
import Logistique from './Logistique';

class MainEvent extends React.Component {
  render() {
    return (
      <div className="main-event--wrapper">
        <MainInfo />
        <Program />
        <Logistique />
      </div>
    );
  }
}

export default MainEvent;
