import React from 'react';
import './LogIn.css';

class LogIn extends React.Component{
    render(){
        return (
         <div className="log-in--wrapper">
             <h2>Connexion</h2>
             <div className="log-in--form">
                 <label for="identifiant"> Identifiants : </label>
                 <input type="text" name="identifiant" id="nom" placeholder=" nom + prénom"/> 
             </div>
             <div className="log-in--form">
                <label for="mail"> Adresse e-mail : </label>
                <input type="mail" name="mail" id="mail" placeholder=" adresse@yahoo.fr"/> 
             </div>
         </div>
        );
    }
}

export default LogIn;