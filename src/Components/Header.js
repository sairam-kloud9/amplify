import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg main-navbar navbar-dark">
        <div className="container">
          <Link className="navbar-brand navbar-logo" to="/home">
            <span className="text-colored">E</span>esy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#header_navbar"
            aria-controls="header_navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="header_navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Services
                </Link>
              </li>
              <li className="nav-item login_signup">
                <a
                  className="nav-link"
                  href="#"
                  data-toggle="modal"
                  data-target="#login_Modal"
                >
                  LogIn
                </a>
                <a
                  className="nav-link"
                  href="#"
                  data-toggle="modal"
                  data-target="#register_Modal"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
