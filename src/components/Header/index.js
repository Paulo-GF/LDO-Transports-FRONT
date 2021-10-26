// import { NavLink } from 'react-router-dom';
import './styles.scss';

import LDOLogo from 'src/assets/logo_ldo.jpeg';

// Use of hrefs, Link section to add later on
const Header = () => (
  <nav className="navBar">
    <a href="/" className="menu-link">
      <img src={LDOLogo} alt="Logo LDO" />
    </a>
    <a href="/" className="menu-link">
      Acceuil
    </a>
    <a href="/recrutement" className="menu-link">
      Recrutement
    </a>
    <a href="/contact" className="menu-link">
      Contact
    </a>
    <a href="/admin-logged" className="menu-link">
      Page Admin
    </a>
  </nav>
);

export default Header;

// To add later on, freshly baked
/*
  <nav className="navBar">
    <NavLink to="/" className="menu-link">
      <img src={LDOLogo} alt="Logo LDO" />
    </NavLink>
    <NavLink to="/" className="menu-link">
      Acceuil
    </NavLink>
    <NavLink to="/recrutement" className="menu-link">
      Recrutement
    </NavLink>
    <NavLink to="/contact" className="menu-link">
      Contact
    </NavLink>
    <NavLink to="/admin-logged" className="menu-link">
      Page Admin
    </NavLink>
  </nav>
*/
