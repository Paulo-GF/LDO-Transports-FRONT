import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import styles
import './styles.scss';

// import images
import { FaTruck, FaTrash } from 'react-icons/fa';

export default function Joboffers({
  isLogged,
  offers,
  deleteOffer,
}) {
  return (
    <div className="job-offers">
      <h1 className="job-offers-title"> Nos offres de recrutement : </h1>
      <div className="offers-container">
        {offers.map((offer) => (
          <div className="offer-card" key={offer.id}>
            {isLogged && (
              <button type="button" onClick={deleteOffer} className="delete-offer-button" id={offer.id}>
                <FaTrash className="trash-icon" />
              </button>
            )}
            <Link to={`/recrutement/${offer.id}`}>
              <FaTruck className="truck-icon" />
              <p className="card-content">
                {offer.title} - {offer.city}
              </p>
            </Link>
          </div>
        ))}
      </div>
      {isLogged && (
        <Link to="/Createoffer" className="create-offer-link">
          Créer une offre
        </Link>
      )}
    </div>
  );
}

Joboffers.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      city: PropTypes.string,
    }).isRequired,
  ).isRequired,
  isLogged: PropTypes.bool.isRequired,
  deleteOffer: PropTypes.func,
};

// default props are needed since createOffer and deleteOffer are not required
// since they are empty if the app is accessed by a visitor
Joboffers.defaultProps = {
  deleteOffer: null,
};
