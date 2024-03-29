import React from "react";
import "./ListaCompras.css";

const ListaCompras = () => {
  const [listaCompras, setListaCompras] = React.useState([]);
  const [descricao, setDescricao] = React.useState("");

  const adicionarLista = () => {
    if (descricao !== "") {
      listaCompras.push(descricao); //adiciona na lista
      setListaCompras([...listaCompras]);
      setDescricao("");
    } else {
      alert("Favor preencher o campo descrição");
    }
  };

  //remover item da lista
  const removerItemLista = (index) => {
    listaCompras.splice(index, 1); //remove 1 item da lista
    setListaCompras([...listaCompras]);
  };

  return (
    <div>
      <h1>Lista de Compras</h1>
      <br />

      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(event) => setDescricao(event.target.value)}
      />
      <button onClick={adicionarLista}>Adicionar</button>
      <br />
      <br />
      <ul>
        {listaCompras.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button onClick={() => removerItemLista(index)}>Remover</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListaCompras;
