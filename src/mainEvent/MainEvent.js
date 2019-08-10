import React from 'react';
import { Link } from 'react-router-dom'
import Menu from './Menu';
import MainInfo from './MainInfo';
import Program from './Program';
import Logistique from './Logistique';
import './MainEvent.css';

class MainEvent extends React.Component {
  render() {
    return (
      <div className="main-event--wrapper">
        <Menu/>
        <MainInfo />
        <Program />
        <div className="link">
        <Link to='/question' >Réservations →</Link>
        </div>
        <Logistique />
        <div className="link">
        <Link to='/question'>Réservations →</Link>
        </div>
      </div>
    );
  }
}

export default MainEvent;
