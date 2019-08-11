import React from 'react';
import './SignIn.css';

class SignIn extends React.Component{
    render(){
        return (
            <form className="sign-in--wrapper">
             <h2>Création d'un compte</h2>
             <div className="sign-in--form">
                 <label htmlFor="identifiant"> Identifiants : </label>
                 <input type="text" name="identifiant" id="nom" placeholder=" Nom + Prénom"/> 
             </div>
             <div className="sign-in--form">
                <label htmlFor="mail"> Adresse e-mail : </label> 
                <input type="text" name="mail" id="mail" placeholder=" adresse@yahoo.fr"/> 
             </div>
             <div className="sign-in--form">
                <label htmlFor="text"> Mot de passe : </label> 
                <input type="password" name="code" id="code" placeholder="Minimum 6 caractères"/> 
             </div>
             <div className="sign-in--form">
                <label htmlFor="age"> Date de naissance : </label>
                <input type="date" name="age" id="age"/> 
             </div>
             <div className="sign-in--form">
                <label htmlFor="tel"> Téléphone : </label>
                <input type="text" name="tel" id="tel" placeholder=" Exemple : 06 .. .. .. .."/> 
             </div>
             <div className="sign-in--form">
                <label htmlFor="danseur"> Êtes-vous danseur/danseuse ? : </label>
                <input type="radio" name="danseur" id="danseur"/>
                <label htmlFor="oui">Oui</label> 
                <input type="radio" name="danseur" id="notdanseur"/>
                <label htmlFor="non">Non</label>
             </div>
             <div className="sign-in--form">
                <label htmlFor="student"> Êtes-vous élève à l'école de danse Mdanse78 ? : </label>
                <input type="radio" name="student" id="student"/>
                <label htmlFor="oui">Oui</label> 
                <input type="radio" name="student" id="notstudent"/>
                <label htmlFor="non">Non</label>
             </div>
             <div className="sign-in--form">
                <label htmlFor="venu-premier"> Etiez-vous présent au 1er Trophée de Rambouillet ? : </label>
                <select name="premier-trophee" id="premier-trophee" defaultValue="non">
                    <option value="oui" >Oui</option> 
                    <option value="non" >Non</option>
                </select>
            </div>
            <div className="sign-in--form">
                <label htmlFor="venu-deuxieme"> Etiez-vous présent au 2ème Trophée de Rambouillet ? : </label> 
                <select name="deuxieme-trophee" id="deuxieme-trophee" defaultValue="non">
                    <option value="oui" >Oui</option> 
                    <option value="non" >Non</option>
                </select>
            </div>
            <div className="sign-in--submit">
                <input type="submit" value="Envoyer"/>
                <span> </span>
                <input type="reset" value="Annuler"/>
            </div>
         </form>
        );
    }
}

export default SignIn;