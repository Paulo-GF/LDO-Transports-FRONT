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
        <NavLink exact activeClassName="navBar-link--selected" to="/" className="navBar-link">
          Accueil
        </NavLink>
        <NavLink to="/recrutement" activeClassName="navBar-link--selected" className="navBar-link">
          Recrutement
        </NavLink>
        <NavLink to="/contact" activeClassName="navBar-link--selected" className="navBar-link">
          Contact
        </NavLink>
        {isLogged && (
          <div className="navBar-connected">
            <NavLink to="/admin-logged" activeClassName="navBar-link--selected" className="navBar-link navBar-connected-admin">
              Page Admin
            </NavLink>
            <div className="navBar-connected-user">
              <FaUserCircle className="navBar-connected-user-icon" />
              <div className="navBar-connected-user-info">
                {adminInfo}
              </div>
            </div>
            <button className="navBar-connected-deconnexion-button" type="button" onClick={logOut}> Déconnexion </button>
          </div>
        )}
        {isLogged && (
          <div className="menu-connected">
            <div className="menu-connected-avatar">
              <FaUserCircle className="icon" />
              <p>{adminInfo}</p>
            </div>
            <ul className="menu-connected-avatar-dropdown">
              <li className="menu-link-admin">
                <NavLink to="/admin-logged">
                  Page Admin
                </NavLink>
              </li>
              <li className="deconnexion-li">
                <button className="deconnexion-button" type="button" onClick={logOut}>
                  Déconnexion
                </button>
              </li>
            </ul>
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
