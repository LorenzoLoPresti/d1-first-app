// Primo componente react (contenitore di tutti i nostri componenti)

// Il componente React nella sua forma più basilare è quindi una funzione che ritorna jsx

// il codice del return dentro la funzione va dentro ()

// La funzione non deve essere anonima

import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Heading from "./components/Heading";
import ClassComponent from "./components/ClassComponent";
// inserendo il componente si inserisce l'import in automatico

function App() {
  // <></> fragment, possiamo inserire più elementi dentro il fragment, varranno come uno solo
  return (
    <div className="App">
      {/* Una prop è un dato che fluisce dall'esterno all'interno del nostro componente. Sono come argomenti della funzione Heading (in questo caso) */}
      <Heading
        title="INTRODUZIONE A REACT"
        ciao="ciao"
        color="#f00"
        fontSize="16"
      />
      <Heading title="STATE E BOOTSTRAP" color="green" fontSize="32" />
      <Heading title="CONTROLLED IMPUT E FORMS" color="blue" fontSize="8" />
      <header className="App-header">
        <ClassComponent content="Contenuto del primo componente a classe" />
        <ClassComponent content="Contenuto del secondo componente a classe" />
        <ClassComponent content="Contenuto del terzo componente a classe" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
        {/* <MyComponent />
        <MyComponent />
        <MyComponent /> */}
      </header>
    </div>
  );
}

// Ogni componente deve ritornare un singolo elemento, con dentro tutti gli elementi che vogliamo.
// Dentro un div unico o un fragment

export default App; // dobbiamo esportare il componente per poterlo usare. Una volta esportato va importato nell'index.js o in un altro file/componente

// JSX è una sintassi simil html che permette l'utilizzo di variabili e logica all'interno dell'html
// attributo class html diventa in className, perchè va in conflitto con il costruttore degli oggetti
