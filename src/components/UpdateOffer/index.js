import PropTypes from 'prop-types';

export default function UpdateOffer({ jobList }) {
  const {
    city,
    region,
    title,
    type,
    description,
  } = jobList.find((job) => job.id === 1);

  return (
    <div className="update">
      <button type="button">X</button>
      <form>
        <input
          className="update-form-input"
          type="text"
          name="title"
          value={title}
          onChange={(event) => {
            console.log(event.target.value);
          }}
          placeholder="titre"
        />
        <input
          className="update-form-input"
          type="text"
          name="region"
          value={region}
          onChange={(event) => {
            console.log(event.target.value);
          }}
          placeholder="région"
        />
        <input
          className="update-form-input"
          type="text"
          name="city"
          value={city}
          onChange={(event) => {
            console.log(event.target.value);
          }}
          placeholder="ville"
        />
        <input
          className="update-form-input"
          type="text"
          name="type"
          value={type}
          onChange={(event) => {
            console.log(event.target.value);
          }}
          placeholder="type de contrat"
        />
        <textarea
          className="update-form-input"
          rows="40"
          cols="60"
          type="text"
          name="description"
          value={description}
          onChange={(event) => {
            console.log(event.target.value);
          }}
          placeholder="description de l'offre"
        />
        <button className="update-form-button" type="submit"> Confirmer la modification </button>
      </form>
      <button className="update-cancel-button" type="submit">Annuler la modicication </button>
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
