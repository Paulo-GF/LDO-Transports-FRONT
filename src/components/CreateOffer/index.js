import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import ReactQuill from 'react-quill';

// import styles
import './styles.scss';

export default function Createoffer({
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
  onSubmitForm,
}) {
  // local state to redirect
  const [redirected, setRedirected] = useState(false);

  // submit the new offer and set local state redirected to true
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitForm();
    setRedirected(!redirected);
  };

  if (redirected) {
    return (<Redirect to="/recrutement" />);
  }

  return (
    <div id="offer" className="new-offer">
      <div className="new-offer-content">
        <button
          className="new-offer-closeButton"
          type="button"
          onClick={() => {
            setRedirected(!redirected);
            onChangeTitleValue('');
            onChangeRegionValue('');
            onChangeCityValue('');
            onChangeTypeValue('');
            onChangeDescriptionValue('');
          }}
        >X
        </button>
        <form
          className="new-offer-content-form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="title">Titre
            <input
              className="new-offer-content-form-input"
              type="text"
              name="title"
              required
              value={titleValue}
              onChange={(event) => {
                onChangeTitleValue(event.target.value);
              }}
              placeholder="titre de l'offre"
            />
          </label>
          <label htmlFor="region">Région
            <input
              className="new-offer-content-form-input"
              type="text"
              name="region"
              required
              value={regionValue}
              onChange={(event) => {
                onChangeRegionValue(event.target.value);
              }}
              placeholder="région de l'offre"
            />
          </label>
          <label htmlFor="city">Ville
            <input
              className="new-offer-content-form-input"
              type="text"
              name="city"
              required
              value={cityValue}
              onChange={(event) => {
                onChangeCityValue(event.target.value);
              }}
              placeholder="ville de l'offre"
            />
          </label>
          <label htmlFor="type">Type de contrat
            <input
              className="new-offer-content-form-input"
              type="text"
              name="type"
              required
              value={typeValue}
              onChange={(event) => {
                onChangeTypeValue(event.target.value);
              }}
              placeholder="type de l'offre"
            />
          </label>
          <p className="new-offer-content-form-description">Description</p>
          <ReactQuill
            theme="snow" // snow is not hidden, there is an edition mode to create the description of the offer
            required
            value={descriptionValue}
            onChange={(event) => {
              onChangeDescriptionValue(event);
            }}
          />
          <button className="new-offer-content-form-button" type="submit">Créer une nouvelle offre</button>
        </form>
      </div>
    </div>
  );
}

Createoffer.propTypes = {
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
  onSubmitForm: PropTypes.func.isRequired,
};
