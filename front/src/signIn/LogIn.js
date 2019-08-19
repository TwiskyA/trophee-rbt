import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './LogIn.css';

class LogIn extends React.Component{

    state={
        login:'',
        password:'',
    }

    handleLoginChange = (e) => this.setState({ login: e.target.value });
    
    handlePasswordChange = (e) => this.setState({ password: e.target.value });

    handleSubmit = () => { 
         axios
           .post("/api/login", this.state)
           .then(response => console.log(response))
    }
    
    render(){
        return (
         <div className="log-in--wrapper">
             <h2>Connexion</h2>
            <div className="log-in--form">
                <label htmlFor="identifiant"> Identifiants : </label>
                <input type="text" name="identifiant" id="nom" placeholder=" nom + prénom" value={this.state.login} onChange={this.handleLoginChange} /> 
            </div>
            <div className="log-in--form">
                <label htmlFor="text"> Mot de passe : </label> 
                <input type="password" name="code" id="code" placeholder="Minimum 6 caractères" value={this.state.password} onChange={this.handlePasswordChange}/> 
            </div>
            <div className="login--compte">
                <Link to='/authentication/signin' >Je n'ai pas de compte</Link>
                <Link to='/code'>Mot de passe oublié ?</Link>
            </div>
            <div className="log-in--submit">
                <input type="submit" value="Oui" onClick={this.handleSubmit}/>
                <span> </span>
                <input type="reset" value="Non"/>
            </div>          
         </div>
        );
    }
}

export default LogIn;