import React, { Component } from "react";
import Carte from "./Carte";
import Requete from "./Requete";
class Colonne extends Component {
  constructor(){
    super();
    // Création de la requête avec des méthodes passées
    // en paramètres ou des "CALLBACK"
    new Requete(this.successData, this.failedData);
    this.state = {
      cartes: []
    };
  }
  successData = (data) => {
    console.log("dans successData");
    // Tout baigne, voici le contenu de la réponse
    console.log("cartes : ", data);
    // création d'un copie du state
    let copy_state = {...this.state};
    // modification de la copie
    copy_state.cartes = data;
    // Comparaison avec le state local
    this.setState(copy_state);
  }
  failedData = () => {
    console.log("dans failedData : il se peut que vous n'ayez pas de réseau !");
  }

  render() {
    return (
      <section>
        <h2>{this.props.titre}</h2>
        {/* Instanciation des cartes grâce au parcours du tableau
        this.state.cartes */}
        {this.state.cartes.map(carte => {
          return <Carte key={carte.id} question={carte.question} reponse={carte.reponse} />
        })}
      </section>
    );
  }
}

export default Colonne;
