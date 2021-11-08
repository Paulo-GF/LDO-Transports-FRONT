// import styles
import './styles.scss';
// import images
import { FaTruck } from 'react-icons/fa';

export default function Activities() {
  return (
    <div id="activities" className="activities">
      <h1 className="activities-title">Nos activités</h1>
      <div className="activities-content">
        <section className="activities-section">
          <FaTruck className="section-icon" />
          <h2 className="activities-section-title">Traction</h2>
          <h3 className="activities-section-subtitle">Notre savoir-faire</h3>
          <p className="activities-section-decription">
            Des montagnes de lignes qui collent à vos attentes,
            des professionnels de la route derrière le volant
            et une équipe d'exploitation expérimentée et réactive
            qui assure le suivi de l'acheminement de vos marchandises
          </p>
        </section>
        <section className="activities-section">
          <FaTruck className="section-icon" />
          <h2 className="activities-section-title">Affrètement</h2>
          <h3 className="activities-section-subtitle">Notre rapidité et notre technicité</h3>
          <p className="activities-section-decription">
            Pour vos lots partiels, vos complets, nos équipes commerce et exploitation
            trouvent, dans vos délais, les solutions adaptées.
          </p>
        </section>
        <section className="activities-section">
          <FaTruck className="section-icon" />
          <h2 className="activities-section-title">Distribution</h2>
          <h3 className="activities-section-subtitle">Nos solutions à la carte</h3>
          <p className="activities-section-decription">
            Semi, Porteur, 20m3, location avec chauffeur... Nous trouvons les ingrédients
            qu'il vous faut. Alors faites votre menu !
          </p>
        </section>
        <section className="activities-section">
          <FaTruck className="section-icon" />
          <h2 className="activities-section-title">Contact</h2>
          <h3 className="activities-section-subtitle">Exprimez vous</h3>
          <p className="activities-section-decription">
            Vous avez des besoins en transport de marchandises,
            vous souhaitez repenser vos montages, ... Contactez nous !
          </p>
        </section>
      </div>
    </div>
  );
}
