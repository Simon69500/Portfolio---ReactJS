import { NavLink } from "react-router-dom";
import "../sass/component/header.scss";

export default function Header() {
  return (
    <>
      {/* H1 unique pour l'accessibilité */}
      <h1 className="visually-hidden">JOHN DOE</h1>

      {/* Menu burger - Mobile */}
      <div className="d-block d-md-none position-relative">
        {/* Contenu du menu - Mobile */}
        <div
          className="collapse position-absolute bg-dark rounded-0 shadow w-100 "
          id="navbarToggleExternalContent"
          style={{ zIndex: 1050, top: "100%" }}
        >
          <div className="cardBurgerMenu bg-dark rounded">
            <ul className="burgerList text-start nav flex-column ps-5 pt-3 pb-2">
              <NavItems />
            </ul>
          </div>
        </div>

        {/* Bouton burger - Mobile */}
        <nav className="navbar navbar-dark bg-dark d-flex align-items-center px3">
          <span className="titleMenu text-light m-0 ps-5 fs-3">JOHN DOE</span>
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

      {/* Menu desktop - tablette */}
      <div className="cardMenu d-none d-md-flex flex-row bg-dark p-2 align-items-center justify-content-between">
        <span className="titleMenu text-light m-0 px-3">JOHN DOE</span>
        <ul className="listMenu nav">
          <NavItems />
        </ul>
      </div>
    </>
  );
}

// ✅ Extraction des éléments de navigation pour éviter la répétition
function NavItems() {
  const links = [
    { to: "/", label: "HOME" },
    { to: "/Service", label: "SERVICES" },
    { to: "/Portfolio", label: "PORTFOLIO" },
    { to: "/Contact", label: "CONTACT" },
    { to: "/Mentions", label: "MENTIONS LEGALES" },
  ];

  return links.map(({ to, label }) => (
    <li className="nav-item" key={to}>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link text-white active-link" : "nav-link text-white"
        }
        to={to}
      >
        {label}
      </NavLink>
    </li>
  ));
}
