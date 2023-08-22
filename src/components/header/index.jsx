import NuKenzie from "../../assets/NuKenzie2.svg";
import "./index.css";
export const Header = ({ setShowHomepage }) => {
  const changePage = () => {
    setShowHomepage(true);
  };

  return (
    <header className="header">
      <div className="header-section">
        <img src={NuKenzie} alt="logo" />
        <button className="btn2" onClick={() => changePage()}>
          Sair
        </button>
      </div>
    </header>
  );
};
