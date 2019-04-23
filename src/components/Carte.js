import React, { Component } from "react";
class Carte extends Component {
  state = {
    question: this.props.question,
    reponse: this.props.reponse,
    show_reponse: false
  };
  // arrow function : le this dépend de la class dans la quelle la méthode
  // est créée
  manageChangeQuestion = (event) => {
    console.log("dans manageChangeQuestion");
    // copie de la propriété state
    const copy_state = {...this.state};

    // Récupération de l'input du formulaire
    copy_state.question = event.target.value;

    //Modification du state via setState
    this.setState(copy_state);
  }
  manageChangeReponse = (event) => {
    console.log("dans manageChangeReponse");
    // copie de la propriété state
    const copy_state = {...this.state};

    // Récupération de l'input du formulaire
    copy_state.reponse = event.target.value;

    //Modification du state via setState
    this.setState(copy_state);
  }
  manageSubmit = () => {
    console.log("dans manageSubmit");
  }
  showHideReponse = () => {
    let copy_state = {...this.state};
    if(copy_state.show_reponse === true) {
      copy_state.show_reponse = false;
    } else {
      copy_state.show_reponse = true;
    }
    this.setState(copy_state);
  }
  render() {
    return (
      <article>
        {/* Récupération des paramètre vial la propriété props */}
        <p onClick={this.showHideReponse}>{this.state.question}</p>
        {/* alternative au if */}
        {this.state.show_reponse && (
          <p>{this.state.reponse}</p>
        )}
        <form onSubmit={this.manageSubmit}>
          <label>
            Question :
            <input
              type="text"
              onChange={this.manageChangeQuestion}
            />
          </label>
          <label>
            Reponse :
            <input
              type="text"
              onChange={this.manageChangeReponse}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </article>
    );
  }
}

export default Carte;
