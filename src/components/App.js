import React, { Component } from 'react';
import Tableau from './Tableau';

class App extends Component {
  render() {
    return (
      <section className="App">
        <h1>Liste de mes cartes</h1>
        {/*Instanciation du tableau en passant 1 paramètre
        via props (titre) */}
        <Tableau titre="Linux" />
      </section>
    );
  }
}

export default App;
