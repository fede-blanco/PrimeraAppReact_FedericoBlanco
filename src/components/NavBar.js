import "./css/NavBar.css";
import logo192 from "../assets/imagenes/logo192.png";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand d-flex" href="# ">
          <img src={logo192} className="logoNav" alt="logoReact"></img>{" "}
          <span className="brandName align-self-center">Federico Blanco</span>
        </a>
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
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="# ">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="# ">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="# ">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="# ">
                <CartWidget number="1" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
