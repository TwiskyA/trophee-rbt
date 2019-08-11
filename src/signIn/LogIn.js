import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';

class LogIn extends React.Component{
    render(){
        return (
         <div className="log-in--wrapper">
             <h2>Connexion</h2>
             <form>
                <div className="log-in--form">
                    <label htmlFor="identifiant"> Identifiants : </label>
                    <input type="text" name="identifiant" id="nom" placeholder=" nom + prénom"/> 
                </div>
                <div className="log-in--form">
                    <label htmlFor="text"> Mot de passe : </label> 
                    <input type="text" name="code" id="code" placeholder="Minimum 6 caractères"/> 
                </div>
                <div className="login--compte">
                    <Link to='/authentication/signin' >Je n'ai pas de compte</Link>
                    <Link to='/code'>Mot de passe oublié ?</Link>
                </div>
                <div className="sign-in--submit">
                    <input type="submit" value="Oui"/>
                    <span> </span>
                    <input type="reset" value="Non"/>
                </div>
            </form>            
         </div>
        );
    }
}

export default LogIn;