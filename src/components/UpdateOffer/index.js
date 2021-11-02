import PropTypes from 'prop-types';
import { useState } from 'react';

export default function UpdateOffer({ jobList }) {
  const {
    city,
    region,
    title,
    type,
    description,
  } = jobList.find((job) => job.id === 1);

  // local state
  const [updateCity, setUpdateCity] = useState(city);
  const [updateTitle, setUpdateTitle] = useState(title);
  const [updateRegion, setUpdateRegion] = useState(region);
  const [updateType, setUpdateType] = useState(type);
  const [updateDescription, setUpdateDescription] = useState(description);

  // reset initial values in inputs
  const handleResetChanges = () => {
    setUpdateCity(city);
    setUpdateTitle(title);
    setUpdateRegion(region);
    setUpdateType(type);
    setUpdateDescription(description);
  };

  return (
    <div className="update">
      <button type="button">X</button>
      <form>
        <input
          className="update-form-input"
          type="text"
          name="title"
          value={updateTitle}
          onChange={(event) => {
            setUpdateTitle(event.target.value);
          }}
          placeholder="titre"
        />
        <input
          className="update-form-input"
          type="text"
          name="region"
          value={updateRegion}
          onChange={(event) => {
            setUpdateRegion(event.target.value);
          }}
          placeholder="région"
        />
        <input
          className="update-form-input"
          type="text"
          name="city"
          value={updateCity}
          onChange={(event) => {
            setUpdateCity(event.target.value);
          }}
          placeholder="ville"
        />
        <input
          className="update-form-input"
          type="text"
          name="type"
          value={updateType}
          onChange={(event) => {
            setUpdateType(event.target.value);
          }}
          placeholder="type de contrat"
        />
        <textarea
          className="update-form-input"
          rows="40"
          cols="60"
          type="text"
          name="description"
          value={updateDescription}
          onChange={(event) => {
            setUpdateDescription(event.target.value);
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
};
