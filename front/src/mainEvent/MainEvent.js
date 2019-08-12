import React from 'react';
import { Link } from 'react-router-dom'
import MainInfo from './MainInfo';
import Program from './Program';
import ProgramDetails from './ProgramDetails';
import Logistique from './Logistique';
import './MainEvent.css';

class MainEvent extends React.Component {
  render() {
    return (
      <div className="main-event--wrapper">
        <MainInfo />
        <Program />
        <Logistique content={[
           'Restauration possible sur place',
           'Places de parking à proximité mais pensez au covoiturage',
            'Vestiaires non surveillé',
            'Accès PMR possible'
         ]}/>
         <div className="link">
          <Link to='/reservation' >Réservations →</Link>
        </div>
      </div>
    );
  }
}

export default MainEvent;
