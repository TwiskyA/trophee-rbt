import React from 'react';
import './Program.css';
import ProgramDetails from './ProgramDetails';

class Program extends React.Component {
  render() {
    return (
      <div className="program--wrapper">
        <div className="program--column">
          <div>
            <h2>matin</h2>
            <ul>
              <li>
                9h-12h
                <ProgramDetails content="detail 9-12" />
              </li>
            </ul>
          </div>
          <div className="program--afternoon">
            <h2>aprem</h2>
            <ul>
              <li>
                14h-18h
                <ProgramDetails content="detail 14-18" />
              </li>
            </ul>
          </div>
        </div>
        <div className="program--separator" />
        <div className="program--column">
          <h2>soiree</h2>
          <ul>
            <li>
              19h-23h
              <ProgramDetails content="detail 19-23" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Program;
