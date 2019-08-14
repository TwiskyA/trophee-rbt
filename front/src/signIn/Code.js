import React from 'react';

class Code extends React.Component{

    state={
        mail:'',
    }

    handleMailChange= (e) => this.setState({ mail: e.target.value });

    render(){
        return(
            <div className="log-in--wrapper">
                <form>
                    <div className="log-in--form">
                        <label for="mail"> Veuillez saisir votre adresse e-mail : </label>
                        <input type="mail" name="mail" id="mail" placeholder=" adresse@yahoo.fr" value={this.state.mail} onChange={this.handleMailChange}/> 
                        <p>Vous recevrez par mail un lien vous permettant de réinitialiser votre mot de passe.</p>
                     </div>
                </form>
            </div>
        )
    }
}

export default Code;