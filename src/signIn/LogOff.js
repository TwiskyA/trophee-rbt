import React from 'react';
import './LogIn.css';

class LogOff extends React.Component{
    render(){
        return (
            <div className="log-in--wrapper">
                <h2>Déconnexion</h2>
                <div className="sign-in--submit">
                <input type="submit" value="Envoyer"/>
                <span> </span>
                <input type="reset" value="Annuler"/>
            </div>
            </div>
        )
    }
}

export default LogOff;
