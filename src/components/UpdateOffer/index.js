import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

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
  jobList,
  setChange,
}) {
  // state local
  const [reset, setReset] = useState(false);

  // find the good offer by id
  const {
    id,
    city,
    region,
    title,
    type,
    description,
  } = jobList.find((job) => job.id === 1);

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
  };

  return (
    <div className="update">
      <button type="button">X</button>
      <form onSubmit={handleSubmitForm}>
        <input
          className="update-form-input"
          type="text"
          name="title"
          value={titleValue}
          onChange={(event) => {
            onChangeTitleValue(event.target.value);
          }}
          placeholder="titre"
        />
        <input
          className="update-form-input"
          type="text"
          name="region"
          value={regionValue}
          onChange={(event) => {
            onChangeRegionValue(event.target.value);
          }}
          placeholder="région"
        />
        <input
          className="update-form-input"
          type="text"
          name="city"
          value={cityValue}
          onChange={(event) => {
            onChangeCityValue(event.target.value);
          }}
          placeholder="ville"
        />
        <input
          className="update-form-input"
          type="text"
          name="type"
          value={typeValue}
          onChange={(event) => {
            onChangeTypeValue(event.target.value);
          }}
          placeholder="type de contrat"
        />
        <textarea
          className="update-form-input"
          rows="40"
          cols="60"
          type="text"
          name="description"
          value={descriptionValue}
          onChange={(event) => {
            onChangeDescriptionValue(event.target.value);
          }}
          placeholder="description de l'offre"
        />
        <button className="update-form-button" type="submit"> Confirmer la modification </button>
      </form>
      <button className="update-cancel-button" onClick={handleResetChanges} type="submit">Annuler la modicication </button>
    </div>
  );
}

UpdateOffer.propTypes = {
  jobList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      city: PropTypes.string,
    }).isRequired,
  ).isRequired,
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
