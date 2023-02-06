// import React from "react";
// Viene importata tutta la libreria React

// React sarà il componente da cui prendiamo le funzionalitò esistenti
// Ogni class component dovrà essere esteso da un React.Component
// Render() è chiamato per inserirvi dentro il return
// class ClassComponent extends React.Component {
//   render() {
//     return;
//   }
// }

// Metodo più recente
// Importa meno peso rispetto al primo metodo
import { Component } from "react";

class ClassComponent extends Component {
  render() {
    return <main>{this.props.content}</main>;
  }
}

export default ClassComponent;

// Nel class component non c'è un parametro.
// Le props in questo caso sono un componente agganciato all'istanza della classe
// Va quindi ricercata all'interno del "this" del componente
