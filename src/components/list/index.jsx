import { Card } from "../Card";
import "./index.css";

export const List = ({
  filterTransactions,
  setListTransactions,
  setFilter,
  filter,
}) => {
  const deleteTransaction = (delet) => {
    const transactionFilter = filterTransactions.filter(
      (transaction) => transaction !== delet
    );
    setListTransactions(transactionFilter);
  };
  return (
    <main className="container-list">
      <div className="header-list">
        <p>Resumo financeiro</p>
        <div className="buttons-header">
          {/* condicional de estilização 'ativo' */}
          <button
            className={`btn1 ${filter === "" ? "ativo" : ""}`}
            onClick={() => setFilter("")}
          >
            Todos
          </button>
          {/* condicional de estilização 'Entrada' */}
          <button
            className={`btn2 ${filter === "Entrada" ? "ativo" : ""}`}
            onClick={() => setFilter("Entrada")}
          >
            Entradas
          </button>
          {/* condicional de estilização 'saida' */}
          <button
            className={`btn2 ${filter === "Saída" ? "ativo" : ""}`}
            onClick={() => setFilter("Saída")}
          >
            Despesas
          </button>
        </div>
      </div>
      {filterTransactions.length === 0 ? (
        <ul className="transactions-list">
          <span> Você ainda não possui nenhum lançamento </span>
        </ul>
      ) : (
        <ul className="transactions-list">
          {filterTransactions.map((transaction, index) => (
            <li className="card-list" key={index}>
              {transaction.type === "Entrada" ? (
                <div className="join"></div>
              ) : (
                <div key={index} className="out"></div>
              )}
              <Card
                transaction={transaction}
                deleteTransaction={deleteTransaction}
                key={index}
              />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};
