import NuKenzie from "../../assets/NuKenzie.svg";
import "./index.css";
import illustration from "../../assets/illustration.svg";

export const Homepage = ({ setShowHomepage }) => {
  const changePage = () => {
    setShowHomepage(false);
  };

  return (
    <main className="body-homepage">
      <section className="init-section">
        <img className="logo" src={NuKenzie} alt="logo" />
        <h1 className="title1">Centralize o controle das suas finanças</h1>
        <p className="descripiton1">de forma rápida e segura</p>
        <button className="btn1" onClick={() => changePage()}>
          Iniciar
        </button>
      </section>

      <aside className="asside-section">
        <img src={illustration} alt="" />
      </aside>
    </main>
  );
};
