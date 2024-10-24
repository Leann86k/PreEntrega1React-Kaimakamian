import CartWidget from "../CartWidget/CartWidget";

function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Ecotienda
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-warning"
                aria-current="page"
                href="#"
              >
                Ubicación
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-warning" href="#">
                Plantas y semillas
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link active text-warning"
                aria-current="page"
                href="#"
              >
                Libros
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link active text-warning"
                aria-current="page"
                href="#"
              >
                Macetas
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-warning"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Kits Iniciales
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    kit de Cesped
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    kit de Rosas
                  </a>
                </li>
                <li>
                  <hr /> className="dropdown-divider"
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <CartWidget />

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-light text-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
