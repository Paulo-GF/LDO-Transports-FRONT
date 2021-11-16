import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';

import UpdateOffer from 'src/components/UpdateOffer';
import ReactQuill from 'react-quill';

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
  UIMessage,
  redirected,
  getError,
  setUIMessage,
}) {
  // find the offer/job with the id in the road params (react router)
  const params = useParams();
  const offerId = Number(params.id);

  // if error in get request to one offer, redirect to 404
  if (getError) {
    return (<Redirect to="/notfound" />);
  }
  // if the offer is deleted, redirect to all offers page
  if (redirected) {
    return (<Redirect to="/recrutement" />);
  }

  // get the offer and reset ui message
  useEffect(() => {
    getCertainOffer(offerId);
    setUIMessage('');
  }, []);

  // == local state
  // state value to controll the display of the modal to modify the offer
  const [openModifyOfferModal, setOpenModifyOfferModal] = useState(false);
  // state value to controll the display of the modal to confirm the delete of the offer
  const [openModal, setOpenModal] = useState(false);
  // state value to controll the display of the form to apply
  const [openApplyOfferForm, setOpenApplyOfferForm] = useState(false);
  // hide or show the button to apply if the user is admin or visitor
  const classnameApplyButton = openApplyOfferForm ? 'hide-apply-button' : 'show-apply-button';

  const ref = useRef();

  // open the modal to modify the offer
  const showModifyOfferModal = () => {
    setOpenModifyOfferModal(true);
  };

  // close the modal to modify the offer and reset all inputs
  const hideModifyOfferModal = () => {
    setOpenModifyOfferModal(false);
    onChangeTitleValue('');
    onChangeRegionValue('');
    onChangeCityValue('');
    onChangeTypeValue('');
    onChangeDescriptionValue('');
  };

  // delete the offer
  const handleDeleteClick = () => {
    deleteOffer(offerId);
  };

  // show apply form
  const showApplyFormClick = () => {
    setOpenApplyOfferForm(true);
  };

  // hide apply form and reset all inputs
  const hideApplyFormClick = () => {
    setOpenApplyOfferForm(false);
    onChangeMailValue('');
    onChangeFirstNameValue('');
    onChangeLastNameValue('');
    onChangePhoneValue('');
    onChangeMessageValue('');
  };

  // submit the infos and doc to apply and reset the value of input file
  const handleApplyFormSubmit = (event) => {
    event.preventDefault();
    onSubmitForm();
    ref.current.value = '';
  };

  useEffect(() => {
    setUIMessage('');
  }, []);

  // the code is diplayed conditionnally to the local state of openModifyOfferModal
  // and to the global state (isLogged) for admin items and admin actions
  return (
    <div className="offer">
      {!openModifyOfferModal ? (
        <div className="offer-focused">
          <Link to="/recrutement" className="back-to-offers-link" onClick={hideApplyFormClick}>
            Retour aux offres d'emploi
          </Link>
          <div className="offer-focused-card">
            <div className="offer-focused-card-header">
              {isLogged && (
                <button type="button" onClick={showModifyOfferModal} className="offer-focused-card-header-modifyButton">
                  Modifier l'annonce
                </button>
              )}
              <h1 className="offer-focused-card-header-title">{offer.title}</h1>
              <p className="offer-focused-card-header-city">{offer.city}</p>
              <p className="offer-focused-card-header-type">{offer.type}</p>
            </div>
            <div className="offer-focused-card-content">
              <ReactQuill
                value={offer.description}
                readOnly // no edition mode
                theme="bubble" // in node_modules bubble is hidden
              />
            </div>
            {isLogged ? (
              <button
                type="button"
                onClick={() => {
                  setOpenModal(true);
                }}
                className="offer-focused-card-deleteButton"
              >
                Supprimer l'offre
              </button>
            ) : (
              <button type="button" onClick={showApplyFormClick} className={`offer-focused-applyButton ${classnameApplyButton}`}>
                Postuler
              </button>
            )}
            {openApplyOfferForm && (
              <div className="apply">
                <h2 className="apply-title">Formulaire de recrutement</h2>
                <form
                  className="aplly-content-form"
                  onSubmit={handleApplyFormSubmit}
                >
                  <label htmlFor="lastname">Nom
                    <input
                      className="apply-content-form-input"
                      type="text"
                      name="lastName"
                      required
                      value={lastNameValue}
                      onChange={(event) => {
                        onChangeLastNameValue(event.target.value);
                      }}
                      placeholder="Nom"
                    />
                  </label>
                  <label htmlFor="firstname">Prénom
                    <input
                      className="apply-content-form-input"
                      type="text"
                      name="firstName"
                      required
                      value={firstNameValue}
                      onChange={(event) => {
                        onChangeFirstNameValue(event.target.value);
                      }}
                      placeholder="Prénom"
                    />
                  </label>
                  <label htmlFor="mail">Email
                    <input
                      className="apply-content-form-input"
                      type="text"
                      name="mail"
                      pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                      required
                      value={mailValue}
                      onChange={(event) => {
                        onChangeMailValue(event.target.value);
                      }}
                      placeholder="Adresse e-mail"
                    />
                  </label>
                  <label htmlFor="phone">Téléphone
                    <input
                      className="apply-content-form-input"
                      type="text"
                      name="phone"
                      pattern="^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$"
                      required
                      value={phoneValue}
                      onChange={(event) => {
                        onChangePhoneValue(event.target.value);
                      }}
                      placeholder="Numero de telephone"
                    />
                  </label>
                  <label htmlFor="message">Message
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
                  </label>
                  <div>
                    <label htmlFor="file">Ajouter votre CV
                      <input
                        className="apply-content-form-input"
                        type="file"
                        required
                        name="file"
                        id="file"
                        ref={ref}
                        onChange={(event) => {
                          onChangeFileValue(event.target.files);
                        }}
                      />
                    </label>
                  </div>
                  <button type="button" onClick={hideApplyFormClick} className="apply-content-form-applyButton">
                    Annuler
                  </button>
                  <button type="submit" className="apply-content-form-applyButton">
                    Confirmer votre candidature
                  </button>
                  {UIMessage && (<p className="message">{ UIMessage }</p>)}
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
  }).isRequired,
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
  UIMessage: PropTypes.string,
  redirected: PropTypes.bool.isRequired,
  getError: PropTypes.string.isRequired,
  setUIMessage: PropTypes.func,
};

FocusedOffer.defaultProps = {
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
  UIMessage: null,
  setUIMessage: null,
};
