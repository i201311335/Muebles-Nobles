export default function Navegador() {
    return (
      <nav className="navbar  px-2 ">
        <div className="container-fluid">
          <button className="navbar-toggler bg-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavBar" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"/>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                <li className="nav-item">
                    <a className="nav-link text-black" href="./">Lista de muebles</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
}