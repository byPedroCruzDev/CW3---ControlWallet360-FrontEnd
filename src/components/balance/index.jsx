import "./index.css";
export const Balance = ({ filterTransactions }) => {
  const balanceTotal = filterTransactions.reduce(
    (acc, act) =>
      act.type === "Entrada" ? acc + +act.value : acc - +act.value,
    0
  );

  return (
    <section className="body-balance">
      <div className="balence">
        <p>Valor Total:</p>

        {balanceTotal >= 0 ? (
          <p className="positive">R${balanceTotal}</p>
        ) : (
          <p className="negative">R${balanceTotal}</p>
        )}
      </div>
      <span>Valor refere-se ao saldo</span>
    </section>
  );
};
