import React, { Component } from "react";
import Carte from "./Carte";
class Colonne extends Component {
  state = {
    cartes: [
      {
        id: 50,
        question: "Date de création de UNIX",
        reponse: "1969 - 1970",
        show_reponse: false,
        show_form: false
      },
      {
        id: 32,
        question: "Qui a créé le noyau Linux ?",
        reponse: "Linus Torvalds en 1991.",
        show_reponse: false,
        show_form: false
      },
      {
        id: 52,
        question:
          "Commande pour savoir où l'on se trouve dans l'arborescence ?",
        reponse: "pwd",
        show_reponse: false,
        show_form: false
      }
    ]
  };
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
