import PropTypes from 'prop-types';

// import styles
import './styles.scss';

export default function Createoffer({
  titleValue,
  regionValue,
  cityValue,
  typeValue,
  descriptionValue,
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
            name="text"
            value={titleValue}
            onChange={(event) => {
              console.log(event.target.value);
            }}
            placeholder="titre de l'offre"
          />
          <input
            className="new-offer-content-form-input"
            type="text"
            name="text"
            value={regionValue}
            onChange={(event) => {
              console.log(event.target.value);
            }}
            placeholder="région de l'offre"
          />
          <input
            className="new-offer-content-form-input"
            type="text"
            name="text"
            value={cityValue}
            onChange={(event) => {
              console.log(event.target.value);
            }}
            placeholder="ville de l'offre"
          />
          <input
            className="new-offer-content-form-input"
            type="text"
            name="text"
            value={typeValue}
            onChange={(event) => {
              console.log(event.target.value);
            }}
            placeholder="type de l'offre"
          />
          <input
            className="new-offer-content-form-input"
            type="text"
            name="text"
            value={descriptionValue}
            onChange={(event) => {
              console.log(event.target.value);
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
  regionValue: PropTypes.string.isRequired,
  cityValue: PropTypes.string.isRequired,
  typeValue: PropTypes.string.isRequired,
  descriptionValue: PropTypes.string.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};
