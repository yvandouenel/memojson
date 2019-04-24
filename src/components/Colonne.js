import React, { Component } from "react";
import Carte from "./Carte";

class Colonne extends Component {


  manageChangeQuestion = event => {
    console.log("dans manageChangeQuestion");
    /* // copie de la propriété state
    const copy_state = { ...this.state };

    // Récupération de l'input du formulaire
    copy_state.question = event.target.value;

    //Modification du state via setState
    this.setState(copy_state); */
  };
  manageChangeReponse = event => {
    console.log("dans manageChangeReponse");
    /* // copie de la propriété state
    const copy_state = { ...this.state };

    // Récupération de l'input du formulaire
    copy_state.reponse = event.target.value;

    //Modification du state via setState
    this.setState(copy_state); */
  };

  render() {
    return (
      <section>
        <h2>{this.props.colonne.title}</h2>
        {/* Instanciation des cartes grâce au parcours du tableau
        this.state.cartes */}
        {this.props.colonne.cartes.map(carte => {
          return (
            <Carte
              key={carte.id}
              onShowHideReponse={this.props.onShowHideReponse}
              carte={carte}
              colonne={this.props.colonne}
              onManageChangeReponse={this.manageChangeReponse}
              onManageChangeQuestion={this.manageChangeQuestion}
            />
          );
        })}
      </section>
    );
  }
}

export default Colonne;
