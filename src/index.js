import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // componente react importato

const root = ReactDOM.createRoot(document.getElementById("root"));
// collegamento con il div id root
root.render(<App />); // sto richiamando il componente, come richiamiamo una funzione

// questo file si occupa di montare il primo componente react dentro root
