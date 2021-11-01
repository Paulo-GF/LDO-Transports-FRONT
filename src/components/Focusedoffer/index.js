import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import styles
import './styles.scss';

export default function Joboffers({
  isLogged,
  offer,
  deleteOffer,
}) {
  return (
    <>
      <Link to="/recrutement" className="back-to-offers-link">
        Retour aux offres d'emploi
      </Link>
      <h1 className="job-offer-title">{offer.title}</h1>
      <p className="job-offer-city">{offer.city}</p>

      {isLogged && (
        <button type="button" onClick={deleteOffer} className="delete-offer-button">
          Supprimer l'offre
        </button>
      )}
    </>
  );
}

Joboffers.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    city: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  isLogged: PropTypes.bool.isRequired,
  deleteOffer: PropTypes.func,
};

// default props are needed since createOffer and deleteOffer are not required
// since they are empty if the app is accessed by a visitor
Joboffers.defaultProps = {
  deleteOffer: null,
};
