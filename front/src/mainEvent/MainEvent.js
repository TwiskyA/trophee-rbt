import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import MainInfo from './MainInfo';
import Program from './Program';
import Logistique from './Logistique';
import './MainEvent.css';

class MainEvent extends React.Component {
  state={
    data: null
  }

  componentDidMount() {
    axios.get('/api/main_event').then(response => this.setState({ data: response.data }))
  }

  render() {
    const { data } = this.state
    
    if (!data) {
      return null;
    }

    return (
      <div className="main-event--wrapper">
        <MainInfo data={data} />
        <Program data={data.program} />
        <Logistique
          content={[
            "Restauration possible sur place",
            "Places de parking à proximité mais pensez au covoiturage",
            "Vestiaires non surveillé",
            "Accès PMR possible"
          ]}
        />
        <div className="link">
          <button className="resa">
            <Link to="/reservation">Je réserve !</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default MainEvent;
