import React from "react";
import "./Formulario.css";

const Formulario = () => {
  const [campoNome, setCampoNome] = React.useState("");
  const [numeroUm, setNumeroUm] = React.useState(0);
  const [numeroDois, setNumeroDois] = React.useState(0);

  const alterarCampoNome = () => {
    // console.log(event.target.value);
    setCampoNome(event.target.value);
  };

  const calcular = () => {
    alert(numeroUm + numeroDois);
  };

  return (
    <div>
      <input
        type="text"
        value={campoNome}
        onChange={alterarCampoNome}
        placeholder="Nome"
      />
      <br />
      <br />
      <input
        type="number"
        value={numeroUm}
        onChange={(event) => setNumeroUm(+event.target.value)}
        placeholder="Número 1"
      />
      +
      <input
        type="number"
        value={numeroDois}
        onChange={(event) => setNumeroDois(+event.target.value)}
        placeholder="Número 2"
      />
      =
      <button onClick={calcular}>Calcular</button>
    </div>
  );
};

export default Formulario;
