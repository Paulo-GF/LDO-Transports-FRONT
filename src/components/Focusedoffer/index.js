import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import UpdateOffer from 'src/components/UpdateOffer';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

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
  offers,
  deleteOffer,
}) {
  const params = useParams();
  const paramsId = parseInt(params.id, 10);
  const offer = offers.find((job) => job.id === paramsId);

  if (!offer) {
    return (<Redirect to="/recrutement" />);
  }

  const [openModifyOfferModal, setOpenModifyOfferModal] = useState(false);

  const showModifyOfferModal = () => {
    setOpenModifyOfferModal(true);
  };
  const hideModifyOfferModal = () => {
    setOpenModifyOfferModal(false);
  };
  const handleDeleteClick = (event) => {
    deleteOffer(event);
  };

  return (
    <div className="offer">
      {!openModifyOfferModal ? (
        <div className="offer-focused">
          <Link to="/recrutement" className="back-to-offers-link">
            Retour aux offres d'emploi
          </Link>
          <div className="offer-focused-card">
            {isLogged && (
              <button type="button" onClick={showModifyOfferModal} className="offer-focused-modifyButton">
                Modifier l'annonce
              </button>
            )}
            <div className="offer-focused-card-content">
              <h1 className="offer-focused-card-title">{offer.title}</h1>
              <p className="offer-focused-card-city">{offer.city}</p>
              <p className="offer-focused-card-type">{offer.type}</p>
              <ReactQuill
                value={offer.description}
                readOnly // no edition mode
                theme="bubble" // in node_modules bubble is hidden
              />
            </div>
            {isLogged && (
              <button type="button" onClick={handleDeleteClick} id={offer.id} className="offer-focused-deleteButton">
                Supprimer l'offre
              </button>
            )}
          </div>
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
          jobList={offers}
          hideModifyOfferModal={hideModifyOfferModal}
        />
      )}
    </div>
  );
}

FocusedOffer.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      region: PropTypes.string,
      city: PropTypes.string,
      type: PropTypes.string,
      description: PropTypes.string,
    }).isRequired,
  ).isRequired,
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
};

FocusedOffer.defaultProps = {
  deleteOffer: null,
};
