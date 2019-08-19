import React from "react";
import "./Program.css";

class Program extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="program--wrapper">
        <div className="program--column">
          <div className="program--afternoon">
            <h3>{data.title1}</h3>
            <h4>{data.hour1}</h4>
            {data.details1.title}
            <br />
            {data.details1.type}
            <div className="program--details">
              <h3>{data.title2}</h3>
              <h4>{data.hour2}</h4>
              {data.details2}
            </div>
          </div>
          <div className="program--separator" />
          <div className="program--night">
            <h3>{data.title3}</h3>
            <h4>{data.hour3}</h4>
            {data.details3}
          </div>
        </div>
      </div>
    );
  }
}

export default Program;
