import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import map from 'src/assets/map4.jpg';
import colibri from 'src/assets/colibri2.png';

// import components
import ConfirmModal from 'src/components/ConfirmModal';

// import styles
import './styles.scss';

// import images
import { FaTrash } from 'react-icons/fa';

// component to display all the offers
export default function Joboffers({
  isLogged,
  offers,
  deleteOffer,
  getOffers,
  updateOffers,
  setRedirected,
}) {
  // loacl state value to controll the display of the modal to confirm the delete of the offer
  const [openModal, setOpenModal] = useState(false);

  // local state value to have the id of the offer to delete
  const [offerToDelete, setOfferToDelete] = useState(0);

  // delete the offer and close the confirm modal
  const handleDeleteClick = () => {
    deleteOffer(offerToDelete);
    setOpenModal(false);
  };

  // get all offers on the first render and when updateOffers change, and reset the redirect
  useEffect(() => {
    getOffers();
    setRedirected(false);
  }, [updateOffers]);

  const offersContentStyle = {
    backgroundImage: `url(${map})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="job-offers">
      <h1 className="job-offers-title"> Nos offres de recrutement : </h1>
      <div className="job-offers-container" style={offersContentStyle}>
        {offers.map((offer) => (
          <div className="job-offers-card" key={offer.id}>
            <div className="job-offers-card-header">
              <img src={colibri} alt="logo" className="job-offers-card-header-logo" />
              {isLogged && (
                <button
                  type="button"
                  onClick={() => {
                    setOpenModal(true);
                    setOfferToDelete(offer.id);
                  }}
                  className="job-offers-card-header-deleteoffer-btn"
                >
                  <FaTrash className="job-offers-card-header-deleteoffer-trash" />
                </button>
              )}
            </div>
            <Link to={`/recrutement/${offer.id}`}>
              <div className="job-offers-card-content">
                <div className="job-offers-card-content-details">
                  <h2 className="job-offers-card-content-details-title" id={offer.id}>{offer.title}</h2>
                  <h3>Contrat: {offer.type}</h3>
                  <h4>Region: {offer.region}</h4>
                  <h5>Ville: {offer.city}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
        {openModal && (
          <ConfirmModal
            message="Etes-vous sûr de vouloir supprimer cette annonce ?"
            closeModal={() => {
              setOpenModal(false);
            }}
            handleConfirm={handleDeleteClick}
          />
        )}
      </div>
      {isLogged && (
        <Link to="/add-job" className="create-offer-link">
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
  getOffers: PropTypes.func.isRequired,
  updateOffers: PropTypes.bool.isRequired,
  setRedirected: PropTypes.func.isRequired,
};

// default props are needed since createOffer and deleteOffer are not required
// since they are empty if the app is accessed by a visitor
Joboffers.defaultProps = {
  deleteOffer: null,
};
