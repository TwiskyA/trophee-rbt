import React from 'react';

class ProgramDetails extends React.Component {
  state = { folded: true };

  toggleFolded = () => this.setState({ folded: !this.state.folded });

  render() {
    const { folded } = this.state;
    const { content } = this.props;
    return (
      <div className="program-details--link">
        <a onClick={this.toggleFolded}>Détails</a>
        {!folded && <div>{content}</div>}
      </div>
    );
  }
}

export default ProgramDetails;
