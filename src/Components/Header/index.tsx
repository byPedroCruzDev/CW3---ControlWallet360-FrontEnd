import { useState } from "react";
import { Link } from "react-router-dom";
import { Header, Bars, NavMenu } from "./style";


const HeaderMenu = () => {
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);
  return (
    <>
        <Header>
          <div className="containerHeader">
            <h1 className="Logo">CW3</h1>
            <nav>
              <div
                className="toggle"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                <Bars />
              </div>
              <NavMenu
                className={
                  isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
              >
                <li>
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link to="/quemSomos">
                    {" "}
                    <p>Quem Somos</p>
                  </Link>
                </li>
                <li>
                  <Link to="/session">
                    {" "}
                    <p>Login</p>
                  </Link>
                </li>
                <li>
                  <Link to="/signUp">
                    {" "}
                    <p>Cadastro</p>
                  </Link>
                </li>
              </NavMenu>
            </nav>
          </div>
        </Header>
    </>
  );
};

export default HeaderMenu;