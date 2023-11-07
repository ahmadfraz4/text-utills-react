import React from "react";
function Navbar({ mode, DarkBody }) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          mode === "dark" ? "dark" : "light"
        }  bg-${
          mode === "dark" ? "myOwnDark" : "light"
        } border-1 border-bottom`}
      >
        <div className="container-fluid">
          <div className="navbar-brand">Navbar</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"></li>
            </ul>
            <div className="form-check form-switch">
              <label
                className={`form-check-label text-${
                  mode === "dark" ? "light" : "dark"
                }`}
                htmlFor="flexSwitchCheckChecked"
              >
                Enable Dark Mode
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onChange={DarkBody}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
