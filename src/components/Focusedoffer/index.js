import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
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
  offer,
  deleteOffer,
  mailValue,
  firstNameValue,
  lastNameValue,
  phoneValue,
  messageValue,
  onChangeMailValue,
  onChangeFirstNameValue,
  onChangeLastNameValue,
  onChangePhoneValue,
  onChangeMessageValue,
  onChangeFileValue,
  onSubmitForm,
  getCertainOffer,
  updateOneOffer,
}) {
  // find the offer/job with the id in the road params (react router)
  const params = useParams();
  const offerId = parseInt(params.id, 10);

  useEffect(() => {
    getCertainOffer(offerId);
  }, [updateOneOffer]);

  // if no offer find with this id redirect
  if (!offer) {
    return (<Redirect to="/Notfound" />);
  }

  // == local state
  // state value to controll the display of the modal to modify the offer
  const [openModifyOfferModal, setOpenModifyOfferModal] = useState(false);
  // state value to controll the display of the modal to confirm the delete of the offer
  const [openModal, setOpenModal] = useState(false);
  const [openApplyOfferForm, setOpenApplyOfferForm] = useState(false);
  const classnameApplyButton = openApplyOfferForm ? 'hide-apply-button' : 'show-apply-button';

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
  const showApplyFormClick = () => {
    setOpenApplyOfferForm(true);
  };
  const hideApplyFormClick = () => {
    setOpenApplyOfferForm(false);
  };

  const handleApplyFormSubmit = (event) => {
    event.preventDefault();
    onSubmitForm(event);
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
            {isLogged ? (
              <button
                type="button"
                onClick={() => {
                  setOpenModal(true);
                }}
                className="offer-focused-deleteButton"
              >
                Supprimer l'offre
              </button>
            ) : (
              <button type="button" onClick={showApplyFormClick} id={offer.id} className={`${classnameApplyButton}`}>
                Postuler
              </button>
            )}
            {openApplyOfferForm && (
              <div className="form-container">
                <h2>Formulaire de recrutement</h2>
                <form
                  className="aplly-content-form"
                  onSubmit={handleApplyFormSubmit}
                  id={offer.id}
                >
                  <input
                    className="apply-content-form-input"
                    type="text"
                    name="lastName"
                    value={lastNameValue}
                    onChange={(event) => {
                      onChangeLastNameValue(event.target.value);
                    }}
                    placeholder="Nom"
                  />
                  <input
                    className="apply-content-form-input"
                    type="text"
                    name="firstName"
                    value={firstNameValue}
                    onChange={(event) => {
                      onChangeFirstNameValue(event.target.value);
                    }}
                    placeholder="Prénom"
                  />
                  <input
                    className="apply-content-form-input"
                    type="text"
                    name="mail"
                    value={mailValue}
                    onChange={(event) => {
                      onChangeMailValue(event.target.value);
                    }}
                    placeholder="Adresse e-mail"
                  />
                  <input
                    className="apply-content-form-input"
                    type="text"
                    name="phone"
                    value={phoneValue}
                    onChange={(event) => {
                      onChangePhoneValue(event.target.value);
                    }}
                    placeholder="Numero de telephone"
                  />
                  <textarea
                    className="apply-content-form-input"
                    type="text"
                    name="message"
                    rows="3"
                    cols="30"
                    value={messageValue}
                    onChange={(event) => {
                      onChangeMessageValue(event.target.value);
                    }}
                    placeholder="Votre message"
                  />
                  <div>
                    <label htmlFor="file">Ajouter votre CV
                      <input
                        className="apply-content-form-input"
                        type="file"
                        name="file"
                        id="file"
                        onChange={(event) => {
                          onChangeFileValue(event.target.files);
                        }}
                      />
                    </label>
                  </div>
                  <button type="button" onClick={hideApplyFormClick} id={offer.id} className="offer-focused-applyButton">
                    Annuler
                  </button>
                  <button type="submit" onClick={handleApplyFormSubmit} id={offer.id} className="offer-focused-applyButton">
                    Confirmer votre candidature
                  </button>
                </form>
              </div>
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
          hideModifyOfferModal={hideModifyOfferModal}
        />
      )}
    </div>
  );
}

FocusedOffer.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    region: PropTypes.string,
    city: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
  }),
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
  mailValue: PropTypes.string,
  firstNameValue: PropTypes.string,
  lastNameValue: PropTypes.string,
  phoneValue: PropTypes.string,
  messageValue: PropTypes.string,
  onChangeMailValue: PropTypes.func,
  onChangeFirstNameValue: PropTypes.func,
  onChangeLastNameValue: PropTypes.func,
  onChangePhoneValue: PropTypes.func,
  onChangeMessageValue: PropTypes.func,
  onChangeFileValue: PropTypes.func,
  onSubmitForm: PropTypes.func,
  getCertainOffer: PropTypes.func.isRequired,
  updateOneOffer: PropTypes.bool.isRequired,
};

FocusedOffer.defaultProps = {
  offer: null,
  deleteOffer: null,
  mailValue: '',
  firstNameValue: '',
  lastNameValue: '',
  phoneValue: '',
  messageValue: '',
  onChangeMailValue: null,
  onChangeFirstNameValue: null,
  onChangeLastNameValue: null,
  onChangePhoneValue: null,
  onChangeMessageValue: null,
  onChangeFileValue: null,
  onSubmitForm: null,
};
