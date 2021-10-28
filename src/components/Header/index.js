import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import of the icon from the react-icon lib
import { FaUserCircle } from 'react-icons/fa';

import LDOLogo from 'src/assets/logo_ldo.jpg';
import './styles.scss';

// is Logged is gonna be the boolean fetched from the backend
// adminInfo aka name is gonna be the string fetched from the backend
// logOut is gonna be the function that logs out the admin, waiting for the
// feature to be ready to code the func
export default function Header({ isLogged, adminInfo, logOut }) {
  return (
    <nav className="navBar">
      <NavLink to="/" className="menu-link">
        <img className="logo" src={LDOLogo} alt="Logo LDO" />
      </NavLink>
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
        <>
          <NavLink to="/admin-logged" className="menu-link">
            Page Admin
          </NavLink>
          <FaUserCircle className="icon" />
          <p>{adminInfo}</p>
          <button type="button" onClick={logOut}> Déconnexion </button>
        </>
      )}
    </nav>
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
