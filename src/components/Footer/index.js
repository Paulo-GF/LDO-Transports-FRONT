import { NavLink } from 'react-router-dom';

// Import styles
import './styles.scss';

export default function Footer() {
  return (
    <nav className="footer">
      <p>Tous droits réservés</p>
      <NavLink to="/contact" className="footer-link">
        Contact
      </NavLink>
      <NavLink to="/mentions-legales" className="footer-link">
        Mentions légales
      </NavLink>
    </nav>
  );
}
