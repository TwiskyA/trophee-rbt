import React from 'react';
import './SignIn.css';

class SignIn extends React.Component{
    render(){
        return (
         <div className="sign-in--wrapper">
             <h2>Création d'un compte</h2>
             <div className="sign-in--form">
                 <label for="identifiant"> Identifiants : </label>
                 <input type="text" name="identifiant" id="nom" placeholder=" Nom + Prénom"/> 
             </div>
             <div className="sign-in--form">
                <label for="mail"> Adresse e-mail : </label> 
                <input type="text" name="mail" id="mail" placeholder=" adresse@yahoo.fr"/> 
             </div>
             <div className="sign-in--form">
                <label for="age"> Renseigner votre date de naissance : </label>
                <input type="date" name="age" id="age"/> 
             </div>
             <div className="sign-in--form">
                <label for="tel"> Téléphone : </label>
                <input type="text" name="tel" id="tel" placeholder=" Exemple : 06 .. .. .. .."/> 
             </div>
             <div className="sign-in--form">
                <label for="danseur"> Êtes-vous danseur/danseuse ? : </label>
                <input type="radio" name="danseur" id="danseur"/>
                <label for="oui">Oui</label> 
                <input type="radio" name="danseur" id="notdanseur"/>
                <label for="non">Non</label>
             </div>
             <div className="sign-in--form">
                <label for="student"> Êtes-vous élève à l'école de danse Mdanse78 ? : </label>
                <input type="radio" name="student" id="student"/>
                <label for="oui">Oui</label> 
                <input type="radio" name="student" id="notstudent"/>
                <label for="non">Non</label>
             </div>
             <div className="sign-in--form">
                <label for="venu-premier"> Etiez-vous présent au 1er Trophée de Rambouillet ? : </label>
                <select name="premier-trophee" id="premier-trophee">
                    <option value="oui" selected>Oui</option> 
                    <option value="non">Non</option>
                </select>
            </div>
            <div className="sign-in--form">
                <label for="venu-deuxieme"> Etiez-vous présent au 2ème Trophée de Rambouillet ? : </label> 
                <select name="deuxieme-trophee" id="deuxieme-trophee">
                    <option value="oui" selected>Oui</option> 
                    <option value="non">Non</option>
                </select>
            </div>
            <div className="sign-in--submit">
                <input type="submit" value="Envoyer"/>
                <span> </span>
                <input type="reset" value="Annuler"/>
            </div>
         </div>
        );
    }
}

export default SignIn;