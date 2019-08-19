import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

class Menu extends React.Component {
  render() {
    return (
      <div className="header--menu">
        <NavLink exact to="/" activeClassName="activated" className="box">
          Accueil
        </NavLink>
        <NavLink to="/reservation" activeClassName="activated" className="box">
          Réservation
        </NavLink>
        <NavLink to="/authentication/login" activeClassName="activated" className="box">
          Connexion
        </NavLink>
      </div>
    );
  }
}

export default Menu;
