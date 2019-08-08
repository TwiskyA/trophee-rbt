import React from 'react';
import { NavLink } from 'react-router-dom'
import MainInfo from './MainInfo';
import Program from './Program';
import Logistique from './Logistique';
import './MainEvent.css';

class MainEvent extends React.Component {
  render() {
    return (
      <div className="main-event--wrapper">
        <MainInfo />
        <Program />
        <Logistique />
        <div className="navlink">
        <NavLink to='/question'>Accéder à la réservation</NavLink>
        </div>
      </div>
    );
  }
}

export default MainEvent;
