import React from 'react';
import { Link } from "react-router-dom";
import "./SignIn.css";

class Code extends React.Component{

    state={
        mail:'',
    }

    handleMailChange= (e) => this.setState({ mail: e.target.value });

    handleSubmit = e => {
      e.preventDefault();
      // envoie du formulaire au back
    }

    render(){
        return (
          <div className="log-in--wrapper">
            <form>
              <div className="log-in--form">
                <label htmlFor="mail">
                  Veuillez saisir votre adresse e-mail :
                </label>
                <input
                  type="mail"
                  name="mail"
                  id="mail"
                  placeholder=" adresse@yahoo.fr"
                  value={this.state.mail}
                  onChange={this.handleMailChange}
                />
                <p>
                  Vous recevrez par mail un lien vous permettant de
                  réinitialiser votre mot de passe.
                </p>
              </div>
              <div className="sign-in--submit">
                <input
                  type="submit"
                  value="Envoyer"
                  onClick={this.handleSubmit}
                />
                <span> </span>
                <Link to="/authentication/login">
                  <input type="reset" value="Annuler" />
                </Link>
              </div>
            </form>
          </div>
        );
    }
}

export default Code;