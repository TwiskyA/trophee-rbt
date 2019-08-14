import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import MainInfo from './MainInfo';
import Program from './Program';
import Logistique from './Logistique';
import './MainEvent.css';

class MainEvent extends React.Component {
  state={
    data:{}
  }

  componentDidMount() {
    axios.get('/api/main_event').then(response => this.setState({ data: response.data }))
  }

  render() {
    return (
      <div className="main-event--wrapper">
        <MainInfo data={this.state.data}/>
        <Program data={this.state.data}/>
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
