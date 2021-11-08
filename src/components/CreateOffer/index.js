import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
  // local state
  const [redirected, setRedirected] = useState(false);

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
          }}
        >X
        </button>
        <form
          className="new-offer-content-form"
          onSubmit={handleSubmit}
        >
          <input
            className="new-offer-content-form-input"
            type="text"
            name="title"
            value={titleValue}
            onChange={(event) => {
              onChangeTitleValue(event.target.value);
            }}
            placeholder="titre de l'offre"
          />
          <input
            className="new-offer-content-form-input"
            type="text"
            name="region"
            value={regionValue}
            onChange={(event) => {
              onChangeRegionValue(event.target.value);
            }}
            placeholder="région de l'offre"
          />
          <input
            className="new-offer-content-form-input"
            type="text"
            name="city"
            value={cityValue}
            onChange={(event) => {
              onChangeCityValue(event.target.value);
            }}
            placeholder="ville de l'offre"
          />
          <input
            className="new-offer-content-form-input"
            type="text"
            name="type"
            value={typeValue}
            onChange={(event) => {
              onChangeTypeValue(event.target.value);
            }}
            placeholder="type de l'offre"
          />
          <ReactQuill
            className="new-offer-content-form-input"
            theme="snow" // snow is not hidden, there is an edition mode to create the description of the offer
            value={descriptionValue}
            onChange={(event) => {
              onChangeDescriptionValue(event);
            }}
          />
          <button className="new-offer-content-form-button" type="submit">créer une nouvelle offre</button>
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
