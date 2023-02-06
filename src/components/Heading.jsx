const Heading = (props) => {
  console.log(props);
  return (
    <div className="heading">
      <h1>Titolo {props.title}</h1>
      <p
        style={{
          backgroundColor: props.color,
          color: "white",
          fontSize: props.fontSize + "px",
        }}
      >
        sottotitolo {props.ciao}
      </p>
    </div>
  );
};
export default Heading;

// const Heading = () => (
//       <>
//       <h1>Titolo hardcodato</h1>
//       </>
//   );
//   export default Heading;

// Le prop si trovano all'interno del parametro di una funzione
// le prop vengono definite nell'App, nome a scelta e richiamate come parametro
// Prop sarà l'oggetto delle prop dichiarate, con .nomeProprietò vado a richiamarle
// con le graffe, senza literals possiamo inserire contenuto dinamico
// se non sono passati argomenti, l'oggetto props esiste ma è vuoto

// Style si aspetta un oggetto non una stringa, quindi le prime graffe delimitano il contenuto dinamico, le altre l'oggetto

// La proprietà css sarà la proprietà dell'oggetto, scritta in camel case. Si aspetta una stringa o un parametro
