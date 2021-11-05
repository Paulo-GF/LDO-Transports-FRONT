import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// import components
import ConfirmModal from 'src/components/ConfirmModal';

// import styles
import './styles.scss';

// import images
import { FaTruck, FaTrash } from 'react-icons/fa';

// component to display all the offers
export default function Joboffers({
  isLogged,
  offers,
  deleteOffer,
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

  return (
    <div className="job-offers">
      <h1 className="job-offers-title"> Nos offres de recrutement : </h1>
      <div className="job-offers-container">
        {offers.map((offer) => (
          <div className="job-offers-card" key={offer.id}>
            {isLogged && (
              <button
                type="button"
                onClick={() => {
                  setOpenModal(true);
                  setOfferToDelete(offer.id);
                }}
                className="delete-offer-button"
                id={offer.id}
              >
                <FaTrash className="delete-offer-trash-icon" />
              </button>
            )}
            <Link to={`/recrutement/${offer.id}`}>
              <FaTruck className="job-offers-truck-icon" />
              <p className="job-offers-card-content">
                {offer.title} - {offer.city}
              </p>
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
};

// default props are needed since createOffer and deleteOffer are not required
// since they are empty if the app is accessed by a visitor
Joboffers.defaultProps = {
  deleteOffer: null,
};
