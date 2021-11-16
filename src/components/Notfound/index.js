// import styles
import './styles.scss';
import { Link } from 'react-router-dom';
import image from 'src/assets/4045.png';

export default function Notfound() {
  return (
    <div className="Notfound-container">
      <div className="Notfound-container-leftcontent">
        <h1 className="Notfound-container-leftcontent-title">404</h1>
        <p className="Notfound-container-leftcontent-message">La page que vous demandez n'existe pas.</p>
        <Link to="/" className="Notfound-container-leftcontent-homelink">Revenir à l'accueil</Link>
      </div>
      <div className="Notfound-container-rightcontent">
        <img src={image} alt="directionsign" className="Notfound-container-rightcontent-image" />
      </div>
    </div>
  );
}
