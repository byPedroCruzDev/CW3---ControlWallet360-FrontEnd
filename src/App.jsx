import "./App.css";
import { useState } from "react";
import { Form } from "./components/form";
import { List } from "./components/list";
import { Homepage } from "./components/homePage";
import { Header } from "./components/header";

function App() {
  //recebimentos recebem entrda
  //contas recebem type saida
  const [showHomepage, setShowHomepage] = useState(true);
  const [listTransactions, setListTransactions] = useState([]);
  const [filter, setFilter] = useState("");
  const filterTransactions = listTransactions.filter((transaction) =>
    filter === "" ? true : transaction.type === filter
  );
  return (
    <main>
      {showHomepage ? (
        <Homepage setShowHomepage={setShowHomepage} />
      ) : (
        <div className="body">
          <Header setShowHomepage={setShowHomepage} />
          <section className="body-app">
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              filterTransactions={filterTransactions}
            />
            <List
              filterTransactions={filterTransactions}
              setListTransactions={setListTransactions}
              setFilter={setFilter}
              filter={filter}
            />
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
