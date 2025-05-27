import '../sass/component/header.scss';


export default function Header() {
    return (
        <>
            {/* Menu burger  */}
            <div className="d-block d-md-none position-relative">
                
                
                {/* Contenu du menu */}
                  <div
                    className="collapse position-absolute bg-dark rounded shadow"
                    id="navbarToggleExternalContent"
                    style={{ top: '100%', right: 0, width: '200px', zIndex: 1050 }}
        >
                    <div className="bg-dark p-3 rounded">
                        <h5 className="text-white h4">Menu Mobile</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item"><a className="nav-link text-white" href="#">Accueil</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="#">Lien 1</a></li>
                            <li className="nav-item"><a className="nav-link text-white" href="#">Lien 2</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bouton burger */}
                <nav className="navbar navbar-dark bg-dark d-flex align-items-center px3">
                    <h1 className="titleMenu text-light m-0 ps-5">JOHN DOE</h1>
                        <button
                            className="navbar-toggler ms-auto"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarToggleExternalContent"
                            aria-controls="navbarToggleExternalContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                </nav>
            </div>


            {/* Menu desktop */}
            <div className="d-none d-md-flex bg-dark p-2 align-items-center justify-content-between">
                <h1 className="titleMenu text-light m-0 ps-5">JOHN DOE</h1>
                <ul className="nav">
                    <li className="nav-item">
                    <a className="nav-link text-white" href="#">Accueil</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white" href="#">Lien 1</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white" href="#">Lien 2</a>
                    </li>
                </ul>
            </div>

        </>
    );
}
