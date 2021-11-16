import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

// == import styles
// import of the icon from the react-icon lib
import { FaUserCircle } from 'react-icons/fa';
import { CgMenu } from 'react-icons/cg';

import LDOLogo from '../../assets/logoSF.png';
import './styles.scss';

// is Logged is gonna be the boolean fetched from the backend
// adminInfo aka name is gonna be the string fetched from the backend
// logOut is gonna be the function that logs out the admin
export default function Header({ isLogged, adminInfo, logOut }) {
  // local state for burger menu
  const [isOpen, setIsOpen] = useState(false);
  // class names for media queries
  const classnameNav = isOpen ? 'navBar_appear' : 'navBar_hidden';
  const classnameBurger = isOpen ? 'hamburger hamburger_open' : 'hamburger hamburger_close';

  const handleClick = () => {
    logOut();
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <a
        className="header-burger"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <CgMenu className={classnameBurger} />
      </a>
      <nav className={`navBar ${classnameNav}`}>
        <NavLink
          exact
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          activeClassName="navBar-link--selected"
          to="/"
          className="navBar-link"
        >
          Accueil
        </NavLink>
        <NavLink
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          to="/recrutement"
          activeClassName="navBar-link--selected"
          className="navBar-link"
        >
          Recrutement
        </NavLink>
        <NavLink
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          to="/contact"
          activeClassName="navBar-link--selected"
          className="navBar-link"
        >
          Contact
        </NavLink>
        {isLogged && (
          <div className="navBar-connected">
            <NavLink
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              to="/admin-logged"
              activeClassName="navBar-link--selected"
              className="navBar-link navBar-connected-admin"
            >
              Mon profil
            </NavLink>
            <div className="navBar-connected-user">
              <FaUserCircle className="navBar-connected-user-icon" />
              <div className="navBar-connected-user-info">
                {adminInfo}
              </div>
            </div>
            <button className="navBar-connected-deconnexion-button" type="button" onClick={handleClick}> Déconnexion </button>
          </div>
        )}
        {isLogged && (
          <div className="menu-connected">
            <div className="menu-connected-avatar">
              <FaUserCircle className="menu-connected-avatar-icon" />
              <p>{adminInfo}</p>
            </div>
            <ul className="menu-connected-avatar-dropdown">
              <li className="menu-link-admin">
                <NavLink to="/admin-logged">
                  Mon profil
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
      <Link to="/" className="logo-link">
        <img className="logo" src={LDOLogo} alt="Logo LDO" />
      </Link>
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
