import { NavLink } from 'react-router-dom';
import '../sass/component/header.scss';


export default function Header() {
    return (
        <>
            {/* Menu burger - Mobile */}
            <div className="d-block d-md-none position-relative">
                
                
                {/* Contenu du menu - Mobile */}
                  <div
                    className="collapse position-absolute bg-dark rounded shadow w-100"
                    id="navbarToggleExternalContent"
                    style={{ zIndex: 1050, top: '100%' }}
                  >
                    <div className=" cardBurgerMenu bg-dark rounded">
                        <ul className="burgerList 
                        text-start nav  flex-column 
                        ps-5 pt-3 pb-2">
                            <li className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link text-white active-link" : "nav-link text-white"} to="/">HOME</NavLink></li>
                            <li className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link text-white active-link" : "nav-link text-white"} to="/Service">SERVICES</NavLink></li>
                            <li className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link text-white active-link" : "nav-link text-white"} to="/Portfolio">PORTFOLIO</NavLink></li>
                            <li className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link text-white active-link" : "nav-link text-white"} to="/Contact">CONTACT</NavLink></li>
                            <li className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link text-white active-link" : "nav-link text-white"} to="/Mentions">MENTIONS LEGALES</NavLink></li>
                        </ul>
                    </div>
                </div>

                {/* Bouton burger - Mobile */}
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


            {/* Menu desktop - tablette*/}
            <div className="cardMenu  d-none d-md-flex flex-row bg-dark p-2  align-items-center justify-content-between">
                <h1 className="titleMenu text-light m-0 px-3 "> JOHN DOE
                </h1>
                <ul className="listMenu nav ">
                    <li className="nav-item "><NavLink className={({isActive}) => isActive ? "nav-link text-white active-link" : "nav-link text-white"} to="/">HOME</NavLink></li>
                    <li className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link text-white active-link" : "nav-link text-white"} to="/Service">SERVICES</NavLink></li>
                    <li className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link text-white active-link" : "nav-link text-white"} to="/Portfolio">PORTFOLIO</NavLink></li>
                    <li className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link text-white active-link" : "nav-link text-white"} to="/Contact">CONTACT</NavLink></li>
                    <li className="nav-item"><NavLink className={({isActive}) => isActive ? "nav-link text-white active-link" : "nav-link text-white"} to="/Mentions">MENTIONS LEGALES</NavLink></li>
                </ul>
            </div>

        </>
    );
}
