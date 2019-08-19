import React from 'react';
import './MainInfo.css';

class MainInfo extends React.Component {
  
  render() {
    const { data } = this.props;
    return (
      <div className="main-info--wrapper">
        <h1>{data.title}</h1>
        <div className="wrapp">
          <div className="main-info--location">
            <h2>{data.location && data.location.name}</h2>
            <h3>{data.location && data.location.adress}</h3>
          </div>
          <div className="main-info--subtitles">
            <h2>{data.date}</h2>
            <h3>{data.price}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default MainInfo;
