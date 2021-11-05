import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import UpdateOffer from 'src/components/UpdateOffer';

// import components
import ConfirmModal from 'src/components/ConfirmModal';

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
  // find the offer/job with the id in the road params (react router)
  const params = useParams();
  const paramsId = parseInt(params.id, 10);
  const offer = offers.find((job) => job.id === paramsId);

  // if no offer find with this id redirect
  if (!offer) {
    return (<Redirect to="/recrutement" />);
  }

  // == local state
  // state value to controll the display of the modal to modify the offer
  const [openModifyOfferModal, setOpenModifyOfferModal] = useState(false);
  // state value to controll the display of the modal to confirm the delete of the offer
  const [openModal, setOpenModal] = useState(false);

  // open the modal to modify the offer
  const showModifyOfferModal = () => {
    setOpenModifyOfferModal(true);
  };

  // close the modal to modify the offer
  const hideModifyOfferModal = () => {
    setOpenModifyOfferModal(false);
  };

  // delete the offer
  const handleDeleteClick = () => {
    deleteOffer(offer.id);
  };

  // the code is diplayed conditionnally to the local state of openModifyOfferModal
  // and to the global state (isLogged) for admin items and admin actions
  return (
    <div className="offer">
      {!openModifyOfferModal ? (
        <div className="offer-focused">
          <Link to="/recrutement" className="back-to-offers-link">
            Retour aux offres d'emploi
          </Link>
          <div className="offer-focused-card">
            {isLogged && (
              <button type="button" onClick={showModifyOfferModal} className="offer-focused-modifyButton">
                Modifier l'annonce
              </button>
            )}
            <div className="offer-focused-card-content">
              <h1 className="offer-focused-card-title">{offer.title}</h1>
              <p className="offer-focused-card-city">{offer.city}</p>
              <p className="offer-focused-card-type">{offer.type}</p>
              <p className="offer-focused-card-desc">{offer.description}</p>
            </div>
            {isLogged && (
              <button
                type="button"
                onClick={() => {
                  setOpenModal(true);
                }}
                className="offer-focused-deleteButton"
              >
                Supprimer l'offre
              </button>
            )}
          </div>
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
      ) : (
        <UpdateOffer
          offer={offer}
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
      region: PropTypes.string,
      city: PropTypes.string,
      type: PropTypes.string,
      description: PropTypes.string,
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
