// Import styles
import './styles.scss';

export default function Footer() {
  return (
    <div className="footer">
      <p>Tous droits réservés</p>
      <a href="/contact" className="menu-link">
        Contact
      </a>
      <a href="/mentions-legales" className="menu-link">
        Mentions légales
      </a>
    </div>
  );
}
