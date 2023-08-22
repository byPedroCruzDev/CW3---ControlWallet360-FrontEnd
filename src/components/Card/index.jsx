import "./index.css";

export const Card = ({ transaction, deleteTransaction }) => {
  return (
    <div className="card-box">
      <div className="card-description">
        <h4>{transaction.description}</h4>
        <p>{transaction.type}</p>
      </div>
      <div className="card-value">
        <p>
          R$
          {transaction.type === "Saída"
            ? transaction.value * -1
            : transaction.value * 1}
        </p>
        <button
          className="delete"
          onClick={() => deleteTransaction(transaction)}
        ></button>
      </div>
    </div>
  );
};
