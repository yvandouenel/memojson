import React, { Component } from "react";
import Colonne from "./Colonne";
import Requete from "./Requete";

class Tableau extends Component {
  constructor() {
    super();
    // Création de la requête avec des méthodes passées
    // en paramètres ou des "CALLBACK"
    new Requete(this.successData, this.failedData);
    this.state = {
      colonnes: []
    };
  }
  /**
   * méthode appelée lorsque l'objet Requete arrive à récupérer les données
   * au format JSON sur le serveur distant
   */
  successData = data => {
    console.log("dans successData");
    // Tout baigne, voici le contenu de la réponse
    console.log("colonnes : ", data);
    // création d'un copie du state
    let copy_state = { ...this.state };
    // modification de la copie
    copy_state.colonnes = data;
    // Comparaison avec le state local
    this.setState(copy_state);
  };
  /**
   * Méthode appelée lorque l'objet Requete rencontre un problème pour récupérer
   * les données distantes
   */
  failedData = () => {
    console.log("dans failedData : il se peut que vous n'ayez pas de réseau !");
  };

  /**
   * Méthode appelée après un click sur une question
   * les paramètres permettent de retrouver de quelle question
   * dans quelle colonne il s'agit
   */
  showHideReponse = (e,colonne,carte) => {
    console.log("dans showHideReponse");
    // index de la colonne :
    let colonne_index = this.state.colonnes.indexOf(colonne);
    // index de la carte dans le tableau "cartes"
    let carte_index = this.state.colonnes[colonne_index].cartes.indexOf(carte);
    console.log("index de la carte : " + carte_index);
    // copy du state du tableau
    let copy_state = {...this.state};
    if(copy_state.colonnes[colonne_index].cartes[carte_index].show_reponse === true) {
      copy_state.colonnes[colonne_index].cartes[carte_index].show_reponse = false;
    } else {
      copy_state.colonnes[colonne_index].cartes[carte_index].show_reponse = true;
    }
    this.setState(copy_state);
  };
  /**
   * La méthode render est appelée juste après l'instanciation d'un Tabeau
   * et lorsque la méthode setState est appelée avec un objet qui diffère de
   * le l'objet state initial
   */
  render() {
    {console.log("Ma hiérarchie json que je vais pouvoir sauvegarder ",this.state)}
    return (
      <section>
        <h1>{this.props.titre}</h1>
        {this.state.colonnes.map(colonne => {
          return (
            <Colonne
            key={colonne.id}
            colonne={colonne}
            onShowHideReponse={this.showHideReponse}/>
          );
        })}
      </section>
    );
  }
}

export default Tableau;
