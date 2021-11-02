export default function UpdateOffer() {
  return (
    <div className="update">
      <button type="button">X</button>
      <form>
        <input
          className="update-form-input"
          type="text"
          name="title"
          value=""
          onChange={(event) => {
            console.log(event.target.value);
          }}
          placeholder="titre"
        />
        <input
          className="update-form-input"
          type="text"
          name="region"
          value=""
          onChange={(event) => {
            console.log(event.target.value);
          }}
          placeholder="région"
        />
        <input
          className="update-form-input"
          type="text"
          name="city"
          value=""
          onChange={(event) => {
            console.log(event.target.value);
          }}
          placeholder="ville"
        />
        <input
          className="update-form-input"
          type="text"
          name="type"
          value=""
          onChange={(event) => {
            console.log(event.target.value);
          }}
          placeholder="type de contrat"
        />
        <input
          className="update-form-input"
          type="text"
          name="description"
          value=""
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
