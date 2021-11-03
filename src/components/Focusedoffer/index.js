import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UpdateOffer from 'src/components/UpdateOffer';

// import styles
import './styles.scss';

export default function FocusedOffer({
  titleValue,
  descriptionValue,
  regionValue,
  cityValue,
  typeValue,
  onChangeTitleValue,
  onChangeRegionValue,
  onChangeCityValue,
  onChangeTypeValue,
  onChangeDescriptionValue,
  setChange,
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
      {!openModifyOfferModal ? (
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
      ) : (
        <UpdateOffer
          titleValue={titleValue}
          descriptionValue={descriptionValue}
          regionValue={regionValue}
          cityValue={cityValue}
          typeValue={typeValue}
          onChangeTitleValue={onChangeTitleValue}
          onChangeRegionValue={onChangeRegionValue}
          onChangeCityValue={onChangeCityValue}
          onChangeTypeValue={onChangeTypeValue}
          onChangeDescriptionValue={onChangeDescriptionValue}
          setChange={setChange}
          jobList={offers}
          hideModifyOfferModal={hideModifyOfferModal}
        />
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
  setChange: PropTypes.func.isRequired,
  titleValue: PropTypes.string.isRequired,
  descriptionValue: PropTypes.string.isRequired,
  regionValue: PropTypes.string.isRequired,
  cityValue: PropTypes.string.isRequired,
  typeValue: PropTypes.string.isRequired,
  onChangeTitleValue: PropTypes.func.isRequired,
  onChangeRegionValue: PropTypes.func.isRequired,
  onChangeCityValue: PropTypes.func.isRequired,
  onChangeTypeValue: PropTypes.func.isRequired,
  onChangeDescriptionValue: PropTypes.func.isRequired,
};

FocusedOffer.defaultProps = {
  deleteOffer: null,
};
