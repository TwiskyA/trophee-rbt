import React from 'react';

class Logistique extends React.Component{
    render(){
        return (
        <div>
            <ul>
                <li>Restauration possible sur place</li>
                <li>Places de parking à proximité mais <strong>pensez au covoiturage</strong></li>
                <li>Vestiaires non surveillé</li>
                <li>Accès PMR possible</li>
                <li>etc.</li>
            </ul>
        </div>
        );
    }
}

export default Logistique;