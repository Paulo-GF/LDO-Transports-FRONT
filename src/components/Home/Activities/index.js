// import styles
import './styles.scss';
import { Link } from 'react-router-dom';
// import images
import { FaTruckLoading } from 'react-icons/fa';
import { GiHandTruck } from 'react-icons/gi';
import { RiServiceFill } from 'react-icons/ri';
import { BsTruckFlatbed } from 'react-icons/bs';
import croppedMap from 'src/assets/mapcropped2.jpg';
import ldoTruck from '../../../assets/ldoTruck.png';
import franceDrawing from '../../../assets/franceDraw.jpg';

export default function Activities() {
  const activitiesContentStyle = {
    backgroundImage: `url(${croppedMap})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '15px',
  };

  return (
    <div id="activities" className="activities">
      <h1 className="activities-title">Nos activités</h1>
      <div className="activities-content">
        <section className="activities-section">
          <div className="activities-section-header" style={activitiesContentStyle}>
            <BsTruckFlatbed className="section-icon" />
            <h2 className="activities-section-header-title">Traction</h2>
            <h3 className="activities-section-header-subtitle">Notre savoir-faire</h3>
          </div>
          <p className="activities-section-description">
            Des montages de lignes qui collent à vos attentes,
            des professionnels de la route derrière le volant
            et une équipe d'exploitation expérimentée et réactive
            qui assure le suivi de l'acheminement de vos marchandises
          </p>
        </section>
        <div className="activities-content-draw">
          <img className="activities-content-draw-ldoTruck" src={ldoTruck} alt="draw of ldo truck" />
        </div>
        <section className="activities-section">
          <div className="activities-section-header" style={activitiesContentStyle}>
            <FaTruckLoading className="section-icon" />
            <h2 className="activities-section-header-title">Affrètement</h2>
            <h3 className="activities-section-header-subtitle">Notre rapidité et notre technicité</h3>
          </div>
          <p className="activities-section-description">
            Pour vos lots partiels, vos complets, nos équipes commerce et exploitation
            trouvent, dans vos délais, les solutions adaptées.
          </p>
        </section>
        <section className="activities-section">
          <div className="activities-section-header" style={activitiesContentStyle}>
            <GiHandTruck className="section-icon" />
            <h2 className="activities-section-header-title">Distribution</h2>
            <h3 className="activities-section-header-subtitle">Nos solutions à la carte</h3>
          </div>
          <p className="activities-section-description">
            Porte-caisse, Semi, Porteur, 20m3, location avec chauffeur...
            Nous trouvons les ingrédients
            qu'il vous faut. Alors faites votre menu !
          </p>
        </section>
        <div className="activities-content-draw">
          <img className="activities-content-draw-ldoFrance" src={franceDrawing} alt="draw of colibri" />
        </div>
        <section className="activities-section">
          <div className="activities-section-header" style={activitiesContentStyle}>
            <RiServiceFill className="section-icon" />
            <h2 className="activities-section-header-title">Contact</h2>
            <h3 className="activities-section-header-subtitle">Exprimez vous</h3>
          </div>
          <p className="activities-section-description">
            Vous avez des besoins en transport de marchandises,
            vous souhaitez repenser vos montages, ... <Link to="/contact" className="contact-link">Contactez nous !</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
