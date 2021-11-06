import "./css/NavBar.css";
import logo192 from "../assets/imagenes/logo192.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { CgPinBottom } from "react-icons/cg";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        position: "sticky",
        top: "0px",
        width: "100%",
        zIndex: 1,
        borderBottom: "6px solid #bf9f11",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand d-flex" exact to="/">
          {/* <img src={logo192} className="logoNav" alt="logoReact"></img>{" "} */}
          <span
            className="brandName align-self-center mx-4"
            style={{ color: "#bf9f11" }}
          >
            Casa de Musica <br />
            Federico Blanco
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/categoria/Guitarra-criolla">
                Guitarras Criollas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categoria/Guitarra-electrica">
                Guitarras Electricas
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/categoria/Guitarra-electroacustica"
              >
                Guitarras Electroacusticas
              </Link>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="# ">
                <CartWidget />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
