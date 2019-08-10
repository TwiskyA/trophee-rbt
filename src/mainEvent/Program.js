import React from 'react';
import ProgramDetails from './ProgramDetails';
import './Program.css';

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
                <ProgramDetails content="Compétitions Standards et Latines" />
              </li>
            </ul>
          </div>
          <div className="program--afternoon">
            <h2>aprem</h2>
            <ul>
              <li>
                14h-18h
                <ProgramDetails content="Compétitions Standards et Latines et petites finales" />
              </li>
            </ul>
          </div>
        </div>
        <div className="program--separator" />
        <div className="program--column">
          <h2>soiree</h2>
          <ul>
            <li>
              20h-23h
              <ProgramDetails content="Finales des grandes compétitions Standards et Latines intercoupées de Shows" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Program;
