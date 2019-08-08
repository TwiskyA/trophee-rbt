import React from 'react';
import './MainInfo.css';

class MainInfo extends React.Component {
  render() {
    return (
      <div className="main-info--wrapper">
        <h1>3ème Trophée de Rambouillet</h1>
        <div className="main-info--subtitles">
          <h2>Pôle culturel de la Lanterne</h2>
          <h2>26 Octobre 2019</h2>
        </div>
        <div className="main-info--place">
          <h3>5 rue Gautherin à Rambouillet</h3>
        </div>
        <div className="main-info--subtitles">
          <h3>Matinée: 15€ / Soirée: 25€ / Journée: 30€</h3>
          <h3>Matin: 9h / Soirée: 20h</h3>
        </div>
      </div>
    );
  }
}

export default MainInfo;
