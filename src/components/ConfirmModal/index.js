import PropTypes from 'prop-types';

// import styles
import './styles.scss';

// component to be used whenever we need a confirm message in modal
export default function ConfirmModal({ message, closeModal, handleConfirm }) {
  return (
    <div className="confirmModal">
      <button onClick={closeModal} type="button" className="confirmModal-closeButton">X</button>
      <div className="confirmModal-container">
        <p className="confirmModal-container-text"> { message } </p>
        <button
          onClick={handleConfirm}
          type="button"
          className="confirmModal-container-button"
        >
          Supprimer l'offre
        </button>
      </div>
    </div>
  );
}

ConfirmModal.propTypes = {
  message: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
};
