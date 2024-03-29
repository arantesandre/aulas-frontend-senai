import React from "react";
import BotaoContador from "../BotaoContador/BotaoContador";
import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import ListaProdutos from "../ListaProdutos/ListaProdutos";
import Formulario from "../Formulario/Formulario";
import "./Principal.css";
import ListaCompras from "../ListaCompras/ListaCompras";

const Principal = () => {
  const [exemplo, setExemplo] = React.useState("");

  return (
    <main>
      <nav>
        <BotaoCustomizado
          tipo="primario"
          onClick={() => setExemplo("ListaProdutos")}
        >
          ListaProdutos
        </BotaoCustomizado>

        <BotaoCustomizado
          tipo="secundario"
          onClick={() => setExemplo("BotaoContador")}
        >
          BotaoContador
        </BotaoCustomizado>

        <BotaoCustomizado tipo="" onClick={() => setExemplo("BotaoFormulario")}>
          BotaoFormulario
        </BotaoCustomizado>

        <BotaoCustomizado
          tipo="primario"
          onClick={() => setExemplo("ListaCompras")}
        >
          ListaCompras
        </BotaoCustomizado>
      </nav>

      {exemplo === "ListaProdutos" && <ListaProdutos />}
      {exemplo === "BotaoContador" && <BotaoContador />}
      {exemplo === "BotaoFormulario" && <Formulario />}
      {exemplo === "ListaCompras" && <ListaCompras />}

      {/* <BotaoCustomizado tipo="terciario" onClick={() => {
                alert('Cancelado com sucesso!')
            }}
            >
                Cancelar
            </BotaoCustomizado> */}
    </main>
  );
};

export default Principal;
