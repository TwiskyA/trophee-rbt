import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

class Menu extends React.Component {
    render(){
        return(
            <div className="header--menu">
                <div className="menu">
                    <h3>Menu</h3>
                    <div>
                    <NavLink to="/" activeClassName="activated">Accueil </NavLink>
                    </div>
                    <div>
                    <NavLink to="/question" activeClassName="activated">Réservation </NavLink>
                    </div>
                    <div>
                    <NavLink to="/login" activeClassName="activated">Connexion </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;