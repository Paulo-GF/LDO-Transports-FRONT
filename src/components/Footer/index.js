import { NavLink } from 'react-router-dom';

// Import styles
import './styles.scss';

export default function Footer() {
  return (
    <div className="footer">
      <nav className="footer-nav">
        <p className="footer-nav-item">Tous droits réservés</p>
        <NavLink to="/contact" activeClassName="footer-nav-link--selected" className="footer-nav-item footer-nav-link">
          Contact
        </NavLink>
        <NavLink to="/mentions-legales" activeClassName="footer-nav-link--selected" className="footer-nav-item footer-nav-link">
          Mentions légales
        </NavLink>
        <NavLink to="/aboutus" activeClassName="footer-nav-link--selected" className="footer-nav-item footer-nav-link-aboutus">
          Nos développeurs
        </NavLink>
      </nav>
    </div>
  );
}
