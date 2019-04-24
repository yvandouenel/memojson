import React, { Component } from "react";
class Carte extends Component {
  // arrow function : le this dépend de la class dans la quelle la méthode
  // est créée

  manageSubmit = () => {
    console.log("dans manageSubmit");
  };

  render() {
    return (
      <article>
        {/* Récupération des paramètre vial la propriété props */}
        <p
          onClick={e => {
            this.props.onShowHideReponse(
              e,
              this.props.colonne,
              this.props.carte
            );
          }}
        >
          {this.props.carte.question}
        </p>
        {/* alternative au if */}
        {this.props.carte.show_reponse && <p>{this.props.carte.reponse}</p>}
        <form onSubmit={this.manageSubmit}>
          <label>
            Question :
            <input type="text" onChange={this.props.onManageChangeQuestion} />
          </label>
          <label>
            Reponse :
            <input type="text" onChange={this.props.onManageChangeReponse} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </article>
    );
  }
}

export default Carte;
