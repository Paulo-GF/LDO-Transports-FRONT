import { NavLink, Link } from 'react-router-dom';

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
      </nav>
      <div className="footer-link-aboutus">
        <Link to="/aboutus" className="footer-link-aboutus-text">Nos développeurs</Link>
      </div>
    </div>
  );
}
