import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';

// import styles
import './styles.scss';

export default function UpdateOffer({
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
  hideModifyOfferModal,
  offer,
}) {
  // local state to reset initial values in inputs
  const [reset, setReset] = useState(false);

  const {
    id,
    city,
    region,
    title,
    type,
    description,
  } = offer;

  useEffect(() => {
  // put the current values of the finded offer in inputs
    onChangeCityValue(city);
    onChangeTitleValue(title);
    onChangeRegionValue(region);
    onChangeTypeValue(type);
    onChangeDescriptionValue(description);
  }, [reset]);

  // reset initial values in inputs
  const handleResetChanges = () => {
    setReset(!reset);
  };

  // submit the changes
  const handleSubmitForm = (event) => {
    event.preventDefault();
    setChange(id);
    hideModifyOfferModal();
  };

  return (
    <div className="update">
      <div className="update-modalBackground">
        <div className="update-modalCard">
          <button className="update-modalCard-closeButton" type="button" onClick={hideModifyOfferModal}>X</button>
          <form className="update-modalCard-form" onSubmit={handleSubmitForm}>
            <label htmlFor="title">Titre
              <input
                className="update-modalCard-form-input"
                type="text"
                name="title"
                required
                value={titleValue}
                onChange={(event) => {
                  onChangeTitleValue(event.target.value);
                }}
                placeholder="titre"
              />
            </label>
            <label htmlFor="region">Région
              <input
                className="update-modalCard-form-input"
                type="text"
                name="region"
                required
                value={regionValue}
                onChange={(event) => {
                  onChangeRegionValue(event.target.value);
                }}
                placeholder="région"
              />
            </label>
            <label htmlFor="city">Ville
              <input
                className="update-modalCard-form-input"
                type="text"
                name="city"
                required
                value={cityValue}
                onChange={(event) => {
                  onChangeCityValue(event.target.value);
                }}
                placeholder="ville"
              />
            </label>
            <label htmlFor="type">Type de contrat
              <input
                className="update-modalCard-form-input"
                type="text"
                name="type"
                required
                value={typeValue}
                onChange={(event) => {
                  onChangeTypeValue(event.target.value);
                }}
                placeholder="type de contrat"
              />
            </label>
            <p className="update-modalCard-form-description"> Description </p>
            <ReactQuill
              theme="snow"
              required
              value={descriptionValue}
              onChange={(event) => {
                onChangeDescriptionValue(event);
              }}
            />
            <button className="update-modalCard-form-submitButton" type="submit"> Confirmer la modification </button>
          </form>
          <button className="update-modalCard-cancel-button" onClick={handleResetChanges} type="submit">Annuler la modification </button>
        </div>
      </div>
    </div>
  );
}

UpdateOffer.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    region: PropTypes.string,
    city: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
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
  hideModifyOfferModal: PropTypes.func.isRequired,
};
