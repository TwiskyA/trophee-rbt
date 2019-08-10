import React from 'react';
import { Link } from 'react-router-dom';
import './Question.css';

class Question extends React.Component {
    render() {
      return (
          <div className="question--wrapper">
              <h2>Identification</h2>
              <div className="question--compte">
                  <Link to='/login' >J'ai déja un compte</Link></div>
              <div className="question--compte"><Link to='/signin'>Inscription et paiement</Link></div>
          </div>
      );
    }
}

export default Question;