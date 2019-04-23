import React, { Component } from 'react';
import Colonne from './Colonne';

class App extends Component {
  render() {
    return (
      <section className="App">
        <h1>Liste de mes cartes</h1>
        {/*Instanciation de la colonne en passant 1 paramètre
        via props (titre) */}
        <Colonne titre="En cours d'apprentissage" />
      </section>
    );
  }
}

export default App;
