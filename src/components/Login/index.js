import PropTypes from 'prop-types';

export default function Login({ emailValue, passwordValue }) {
  return (
    <div className="login">
      <form className="login-form">
        <input
          type="email"
          name="email"
          value={emailValue}
          onChange={() => {
            console.log('email');
          }}
          placeholder="email"
        />
        <input
          type="pasword"
          name="password"
          value={passwordValue}
          placeholder="mot de passe"
          onChange={() => {
            console.log('password');
          }}
        />
        <button type="submit">Se connecter</button>
      </form>
      <button type="button">Mot de passe oublié</button>
    </div>
  );
}

Login.propTypes = {
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
};
