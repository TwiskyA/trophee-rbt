import React from 'react';
import './Header.css';
import Menu from '../mainEvent/Menu.js';

class Header extends React.Component {
    render(){
        return(
        <div className="container">
            <div className="header--banner"> 
                <h2>Association DANSES ET VOUS 78</h2>
                <h4>En partenariat avec  l'école Mdanse78 et</h4>
            </div>
            <span> </span>
            <Menu />
        </div>
           
        )
    }
}

export default Header;