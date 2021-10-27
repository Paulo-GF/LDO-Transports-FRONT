import PropTypes from 'prop-types';

// import styles
import './styles.scss';

export default function Login({
  emailValue,
  passwordValue,
  onChangeEmailValue,
  onChangePasswordValue,
  onSubmitForm,
}) {
  // on submit, call API to authenticate the user
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitForm();
  };

  return (
    <div className="login">
      <div className="login-content">
        <img className="login-content-icon" src="https://img.icons8.com/ios-filled/50/000000/user-male-circle.png" alt="" />
        <form
          className="login-content-form"
          onSubmit={handleSubmit}
        >
          <input
            className="login-content-form-input"
            type="email"
            name="email"
            value={emailValue}
            onChange={(event) => {
              onChangeEmailValue(event.target.value);
            }}
            placeholder="email"
          />
          <input
            className="login-content-form-input"
            type="pasword"
            name="password"
            value={passwordValue}
            placeholder="mot de passe"
            onChange={(event) => {
              onChangePasswordValue(event.target.value);
            }}
          />
          <button className="login-content-form-button" type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  onChangeEmailValue: PropTypes.func.isRequired,
  onChangePasswordValue: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};
