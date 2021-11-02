import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// import styles
import './styles.scss';

export default function FocusedOffer({
  isLogged,
  offers,
  deleteOffer,
}) {
  const params = useParams();
  const offer = offers.find((michel) => michel.id == `${params.id}`);

  const [openModifyOfferModal, setOpenModifyOfferModal] = useState(false);

  const showModifyOfferModal = () => {
    setOpenModifyOfferModal(true);
  };
  const hideModifyOfferModal = () => {
    setOpenModifyOfferModal(false);
  };

  return (
    <div>
      {!openModifyOfferModal && (
        <div>
          <Link to="/recrutement" className="back-to-offers-link">
            Retour aux offres d'emploi
          </Link>
          <div className="focused-offer-card">
            {isLogged && (
              <>
                <button type="button" onClick={showModifyOfferModal} className="modify-offer-button">
                  Modifier l'annonce
                </button>
              </>
            )}
            <h1 className="job-offer-title">{offer.title}</h1>
            <p className="job-offer-city">{offer.city}</p>
            <p className="job-offer-type">{offer.type}</p>
            <p className="job-offer-desc">{offer.description}</p>
            {isLogged && (
              <button type="button" onClick={deleteOffer} className="delete-offer-button">
                Supprimer l'offre
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

FocusedOffer.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      city: PropTypes.string,
      type: PropTypes.string,
    }).isRequired,
  ).isRequired,
  isLogged: PropTypes.bool.isRequired,
  deleteOffer: PropTypes.func,
};

FocusedOffer.defaultProps = {
  deleteOffer: null,
};
