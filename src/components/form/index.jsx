//input pegar valor
//input para pegar a discrição
//selct para escolher entrada ou saida
//button para enviar as informações pegas no formulario
//form recebe props listransactions e o setList

import { useState } from "react";
import { Balance } from "../balance";
import "./index.css";

export const Form = ({
  listTransactions,
  setListTransactions,
  filterTransactions,
}) => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Entrada");
  const [value, setValue] = useState("");

  const btnSubmit = (Event) => {
    Event.preventDefault();
    const newTransaction = {
      description: description,
      type: type,
      value: value,
    };
    setListTransactions([...listTransactions, newTransaction]);
    setValue("");
    setDescription("");
  };

  return (
    <section className="form-section">
      <form className="form" onSubmit={btnSubmit}>
        <label className="title3" htmlFor="">
          Descrição
        </label>
        <input
          type="text"
          placeholder="Descrição da transação"
          required
          value={description}
          className="input1"
          onChange={(e) => setDescription(e.target.value)}
        />
        <p>Exemplo: alimentação</p>
        <div className="main-container">
          <div className="container">
            <label className="title3">Valor</label>
            <input
              type="text"
              placeholder="ex:13"
              required
              className="input2"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="container">
            <label className="title3">Tipo</label>

            <select
              type="text"
              placeholder="Entrada ou Saída"
              value={type}
              className="input2"
              onChange={(e) => setType(e.target.value)}
            >
              <option>Entrada</option>
              <option>Saída</option>
            </select>
          </div>
        </div>

        <button className="btn1">Registrar transação</button>
      </form>
      {/* children */}
      {listTransactions.length !== 0 && (
        <Balance filterTransactions={filterTransactions} />
      )}
    </section>
  );
};
