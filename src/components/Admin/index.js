import PropTypes from 'prop-types';

// import styles
import './styles.scss';
import { FaUserCircle } from 'react-icons/fa';

export default function Admin({
  newPasswordValue,
  confirmNewPasswordValue,
  onChangeNewPasswordValue,
  onChangeConfirmNewPasswordValue,
  onSubmitForm,
  UIMessage,
}) {
  // on submit, call API to modify the user password
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitForm();
  };

  return (
    <div className="admin">
      <div className="admin-container">
        <div className="admin-header">
          <FaUserCircle className="admin-header-icon" />
          <p className="admin-header-title">Bonjour Benoit</p>
        </div>
        <div className="admin-content">
          <form className="admin-content-form" onSubmit={handleSubmit}>
            <input
              className="admin-content-form-input"
              type="password"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,24}$"
              required
              name="newPassword"
              value={newPasswordValue}
              onChange={(event) => {
                onChangeNewPasswordValue(event.target.value);
              }}
              placeholder="Nouveau mot de passe"
            />
            <input
              className="admin-content-form-input"
              type="password"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,24}$"
              required
              name="newPasswordConfirm"
              value={confirmNewPasswordValue}
              onChange={(event) => {
                onChangeConfirmNewPasswordValue(event.target.value);
              }}
              placeholder="Confirmer mot de passe"
            />
            {UIMessage && (<p className="messageAdmin">{ UIMessage }</p>)}
            <ul className="admin-content-form-list">
              <li>entre 8 et 24 caractères</li>
              <li>au moins un caractère spécial</li>
              <li>au moins une majuscule, une minuscule et un chiffre </li>
            </ul>
            <button className="admin-content-form-button" type="submit">Modifier le mot de passe </button>
          </form>
        </div>
      </div>
    </div>
  );
}

Admin.propTypes = {
  newPasswordValue: PropTypes.string.isRequired,
  confirmNewPasswordValue: PropTypes.string.isRequired,
  onChangeNewPasswordValue: PropTypes.func.isRequired,
  onChangeConfirmNewPasswordValue: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  UIMessage: PropTypes.string,
};

Admin.defaultProps = {
  UIMessage: null,
};
