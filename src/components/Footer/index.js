import { NavLink } from 'react-router-dom';

// Import styles
import './styles.scss';

export default function Footer() {
  return (
    <nav className="footer">
      <p className="footer-item">Tous droits réservés</p>
      <NavLink to="/contact" activeClassName="footer-link--selected" className="footer-item footer-link">
        Contact
      </NavLink>
      <NavLink to="/mentions-legales" activeClassName="footer-link--selected" className="footer-item footer-link">
        Mentions légales
      </NavLink>
    </nav>
  );
}
