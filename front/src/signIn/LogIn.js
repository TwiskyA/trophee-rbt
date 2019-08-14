import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';

class LogIn extends React.Component{

    state={
        login:'',
        password:'',
    }

    handleLoginChange = (e) => this.setState({ login: e.target.value });
    
    handlePasswordChange = (e) => this.setState({ password: e.target.value });
    
    render(){
        return (
         <div className="log-in--wrapper">
             <h2>Connexion</h2>
             <form>
                <div className="log-in--form">
                    <label htmlFor="identifiant"> Identifiants : </label>
                    <input type="text" name="identifiant" id="nom" placeholder=" nom + prénom" value={this.state.login} onChange={this.handleLoginChange} /> 
                </div>
                <div className="log-in--form">
                    <label htmlFor="text"> Mot de passe : </label> 
                    <input type="text" name="code" id="code" placeholder="Minimum 6 caractères" value={this.state.password} onChange={this.handlePasswordChange}/> 
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