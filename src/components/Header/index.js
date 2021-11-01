import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

// import of the icon from the react-icon lib
import { FaUserCircle } from 'react-icons/fa';
import { CgMenuGridR } from 'react-icons/cg';

import LDOLogo from 'src/assets/logo_ldo.jpg';
import './styles.scss';

// is Logged is gonna be the boolean fetched from the backend
// adminInfo aka name is gonna be the string fetched from the backend
// logOut is gonna be the function that logs out the admin, waiting for the
// feature to be ready to code the func
export default function Header({ isLogged, adminInfo, logOut }) {
  const [isOpen, setIsOpen] = useState(false);
  const classnameNav = isOpen ? 'navBar_appear' : 'navBar_hidden';
  const classnameBurger = isOpen ? 'hamburger hamburger_open' : 'hamburger hamburger_close';

  return (
    <div className="header">
      <Link to="/" className="logo-link">
        <img className="logo" src={LDOLogo} alt="Logo LDO" />
      </Link>
      <a onClick={() => {
        setIsOpen(!isOpen);
      }}
      >
        <CgMenuGridR className={classnameBurger} />
      </a>
      <nav className={`navBar ${classnameNav}`}>
        <NavLink to="/" className="menu-link">
          Accueil
        </NavLink>
        <NavLink to="/recrutement" className="menu-link">
          Recrutement
        </NavLink>
        <NavLink to="/contact" className="menu-link">
          Contact
        </NavLink>
        {isLogged && (
          <div className="menu-connected">
            <NavLink to="/admin-logged" className="menu-link-admin">
              Page Admin
            </NavLink>
            <FaUserCircle className="menu-connected-userIcon" />
            <div className="menu-connected-userInfo">
              {adminInfo}
            </div>
            <button className="deconnexion-button" type="button" onClick={logOut}> Déconnexion </button>
          </div>
        )}
      </nav>
    </div>
  );
}

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  adminInfo: PropTypes.string,
  logOut: PropTypes.func,
};

// default props are needed since the adminInfo and logOut are not required since
// they are empty if the app is accessed by a visitor
Header.defaultProps = {
  adminInfo: null,
  logOut: null,
};
