import PropTypes from 'prop-types';

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
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitForm();
  };

  return (
    <div className="new-offer">
      <div className="new-offer-content">
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
          <textarea
            className="new-offer-content-form-input"
            type="text"
            name="description"
            rows="40"
            cols="60"
            value={descriptionValue}
            onChange={(event) => {
              onChangeDescriptionValue(event.target.value);
            }}
            placeholder="description de l'offre"
          />
          <button className="new-offer-form-button" type="submit">créer une nouvelle offre</button>
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
