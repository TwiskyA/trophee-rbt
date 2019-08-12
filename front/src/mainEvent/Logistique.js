import React from 'react';
import './Logistique.css';

class Logistique extends React.Component{
   state = { folded: true };

  toggleFolded = () => this.setState({ folded: !this.state.folded });

  render() {
    const { folded } = this.state;
    const { content } = this.props;
    return (
      <div className="logistique-details--link">
        <a onClick={this.toggleFolded}>+ d'infos logistiques</a>
        {!folded && <ul>{content.map(item => <li>{item}</li>)}</ul>}
      </div>
    );
  }
}

export default Logistique;