import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";
import Menu from './Menu';

class Header extends React.Component {
    render(){
        return (
          <div className="header--banner">
            <div className="header-link">
            <NavLink exact to="/" className="header-box">
              <h3>Association DANSES ET VOUS 78</h3>
              <h4>En partenariat avec l'école Mdanse78 </h4>
            </NavLink>
            </div>
              <Menu />
          </div>
        );
    }
}

export default Header;