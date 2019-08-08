import React from 'react';
import './LogIn.css';

class LogOff extends React.Component{
    render(){
        return (
            <div className="log-in--wrapper">
                <h2>Déconnexion </h2>
                <h3>Souhaitez-vous vous déconnecter ?</h3>
                <div className="sign-in--submit">
                <input type="submit" value="Oui"/>
                <span> </span>
                <input type="reset" value="Non"/>
            </div>
            </div>
        )
    }
}

export default LogOff;
