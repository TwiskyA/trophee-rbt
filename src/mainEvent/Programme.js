import React from 'react';
import './Programme.css';

class Programme extends React.Component {
  render() {
    return (
      <div className="programme--wrapper">
        <div className="programme--column">
          <div>
            matin
            <ul>
              <li>9h-12h</li>
            </ul>
          </div>
          <div className="programme--afternoon">
            aprem
            <ul>
              <li>14h-18h</li>
            </ul>
          </div>
        </div>
        <div className="programme--separator" />
        <div className="programme--column">
          soiree
          <ul>
            <li>19h-23h</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Programme;
