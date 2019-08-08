import React from 'react';
import { NavLink } from 'react-router-dom'
import './Question.css';

class Question extends React.Component {
    render() {
      return (
          <div className="question--wrapper">
              <h2>Identification</h2>
              <div className="question--compte"><NavLink to='/login'>J'ai déja un compte</NavLink></div>
              <div className="question--compte"><NavLink to='/signin'>Inscription et paiement</NavLink></div>
          </div>
      );
    }
}

export default Question;