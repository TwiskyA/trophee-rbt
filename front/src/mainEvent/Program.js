import React from 'react';
import ProgramDetails from './ProgramDetails';
import './Program.css';

class Program extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="program--wrapper">
        <div className="program--column">
          <div>
            <h2>{data.title1}</h2>
            <ul>
              <li>
                {data.hour1}
                <ProgramDetails content="Compétitions Standards et Latines - Eliminatoires" />
              </li>
            </ul>
          </div>
          <div className="program--afternoon">
            <h2>{data.title2}</h2>
            <ul>
              <li>
                {data.hour2}
                <ProgramDetails content="Compétitions Standards et Latines - Eliminatoires et petites finales" />
              </li>
            </ul>
          </div>
        </div>
        <div className="program--separator" />
        <div className="program--column">
          <h2>{data.title3}</h2>
          <ul>
            <li>
              {data.hour3}
              <ProgramDetails content="Finales des grandes compétitions Standards et Latines - Danse 'public' et Shows" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Program;
